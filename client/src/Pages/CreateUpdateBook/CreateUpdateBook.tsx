import { Form, Formik, FormikProps } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { yupLimitTextInputValidation, yupLimitNumberInputValidation } from '@Utils/yupValidations';
import { object } from 'yup';
import { useBookCRUD, useGetAllBooks } from '@ApiService/Requests/useBook';
import { IBook, genres } from '@ApiService/Interfaces/IBooks';
import FormikInput from '@CommonComponents/FormikInput/FormikInput';
import { Button } from '@mui/material';
import SaveErrorTooltip from '@Components/SaveErrorTooltip/SaveErrorTooltip';
import FormikSelect from '@Components/FormikSelect/FormikSelect';
import {
  buttonsStyle,
  inputNameStyle,
  selectBoxStyle,
  styleInputPropsTextArea,
  styleTextArea,
} from './CreateUpdateBook.StyleSheet';
import classes from './CreateUpdateBook.module.scss';
import { getDateInFormat } from '../../Common/CommonFunctions';
import { BOOKS_QUERY_KEY } from '@Common/CommonConstants';

const CreateUpdateBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { createBook, updateBook } = useBookCRUD();
  const { books } = useGetAllBooks();
  const currentBook = books?.find((book) => book.id === bookId);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const initialBookValues: IBook = {
    title: currentBook?.title || '',
    description: currentBook?.description || '',
    author: currentBook?.author || '',
    publicationDate: getDateInFormat(currentBook?.publicationDate || new Date()),
    genre: currentBook?.genre || 'Action',
    price: currentBook?.price || 0,
  };

  const initialValues: IBook = initialBookValues;
  const validationSchema = object().shape({
    title: yupLimitTextInputValidation(),
    description: yupLimitTextInputValidation(),
    author: yupLimitTextInputValidation(),
    price: yupLimitNumberInputValidation(),
  });

  const onSubmit = (bookValues: IBook) => {
    const buttonElement = submitBtnRef.current || undefined;
    if (buttonElement) buttonElement.disabled = true;

    if (bookId) updateBook(bookId, bookValues);
    else {
      createBook(bookValues);
    }
  };

  const isSaveBtnDisabled = (formik: FormikProps<IBook>) => !formik.dirty || !formik.isValid;

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form noValidate className={classes.bookFormContainer}>
          <div className={classes.formBody}>
            <FormikInput
              name='title'
              label='Title'
              value={formik.values.title}
              autoFocus
              style={inputNameStyle}
            />

            <FormikInput
              name='description'
              label='Description'
              outerLabel
              value={formik.values.description}
              style={styleInputPropsTextArea}
              styleTextArea={styleTextArea}
              rows={4}
              disableUnderline
              multiline
              required
            />

            <FormikInput
              name='author'
              label='Author'
              value={formik.values.author}
              style={inputNameStyle}
              required
            />
            <FormikInput
              name='publicationDate'
              label='Publication Date'
              value={getDateInFormat(formik.values.publicationDate)}
              style={{ ...inputNameStyle, maxWidth: '150px' }}
              type='date'
              required
            />
            <FormikInput
              name='price'
              label='Price'
              value={formik.values.price}
              style={{ ...inputNameStyle, maxWidth: '100px' }}
              type='number'
              required
            />
            <FormikSelect
              formik={formik}
              label='Genre'
              name='genre'
              options={genres.map((genre) => {
                return {
                  text: genre,
                  value: genre,
                };
              })}
              value={formik.values.genre || genres[0]}
              styleWrap={selectBoxStyle}
            />
          </div>

          <footer className={classes.bookFormFooter}>
            {bookId && (
              <div className={classes.labelsBottom}>
                <div className={classes.labelBottom}>
                  <p>CreatedAt:</p>
                  <p>
                    {new Date(currentBook?.createdAt || new Date()).toLocaleDateString('en-GB')}
                  </p>
                </div>
                <div className={classes.labelBottom}>
                  <p>Updated at:</p>
                  <p>
                    {new Date(currentBook?.updatedAt || new Date()).toLocaleDateString('en-GB')}
                  </p>
                </div>
              </div>
            )}
            <div className={classes.form_button}>
              <SaveErrorTooltip isSaveBtnDisabled={isSaveBtnDisabled} formik={formik}>
                <Button
                  type='submit'
                  variant='outlined'
                  className={`${classes.saveBtn} saveFormBtn`}
                  sx={buttonsStyle}
                  ref={submitBtnRef}
                  disabled={isSaveBtnDisabled(formik)}
                >
                  save
                </Button>
              </SaveErrorTooltip>

              <Button
                variant='outlined'
                className={classes.saveBtn}
                sx={buttonsStyle}
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
            </div>
          </footer>
        </Form>
      )}
    </Formik>
  );
};

export default CreateUpdateBook;
