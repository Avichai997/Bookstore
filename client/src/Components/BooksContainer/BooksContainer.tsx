import { useGetAllBooks } from '@ApiService/Requests/useBook';
import BookCard from '@Components/BookCard/BookCard';
import { Button } from '@mui/material';
import { buttonsStyle } from '@Pages/CreateUpdateBook/CreateUpdateBook.StyleSheet';
import { useNavigate } from 'react-router-dom';
import classes from './BooksContainer.module.scss';

const BooksContainer = () => {
  const { books } = useGetAllBooks();
  const navigate = useNavigate();

  return (
    <div className={classes.booksContainer}>
      <div className={classes.booksCards}>
        <div className={classes.addBookBtn}>
          <Button
            type='submit'
            variant='outlined'
            className='saveFormBtn'
            sx={buttonsStyle}
            onClick={() => navigate('/Book')}
          >
            Add Book
          </Button>
        </div>

        <div className={classes.books}>
          {books?.map((book, index) => (
            <div className={classes.bookCard} key={index}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksContainer;
