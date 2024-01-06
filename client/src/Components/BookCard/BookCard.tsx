import { IBook } from '@ApiService/Interfaces/IBooks';
import RtlProvider from '@Utils/RtlProvider';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useBookCRUD } from '@ApiService/Requests/useBook';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { getDateInFormat } from '@CommonFunctions';
import classes from './BookCard.module.scss';

interface IBookCard {
  book: IBook;
}

const BookCard = ({ book }: IBookCard) => {
  const navigate = useNavigate();
  const { deleteBook } = useBookCRUD();

  const updateDateBook = book.updatedAt ? new Date(book.updatedAt) : new Date();

  return (
    <RtlProvider>
      <div className={classes.bookCardContainer}>
        <header className={classes.header}>
          <Button className={classes.bookTitle} onClick={() => navigate(`/Book/${book.id}`)}>
            {book.title}
          </Button>

          <IconButton
            color='primary'
            className={classes.iconButton}
            onClick={() => book?.id && deleteBook(book.id)}
          >
            <DeleteOutlineOutlined className={classes.closeModalIcon} />
          </IconButton>
        </header>

        <div className={classes.bookStatus}>
          <div className={classes.detail}>
            <div className={classes.label}>description:</div>
            <div className={classes.description}>{book.description}</div>
          </div>
          <div className={classes.detail}>
            <div className={classes.label}>author:</div>
            <div className={classes.description}>{book.author}</div>
          </div>
          <div className={classes.detail}>
            {' '}
            <div className={classes.label}>Publication Date:</div>
            <div className={classes.description}>{getDateInFormat(book.publicationDate)}</div>
          </div>
          <div className={classes.detail}>
            {' '}
            <div className={classes.label}>Genre:</div>
            <div className={classes.description}>{book.genre}</div>
          </div>
          <div className={classes.detail}>
            <div className={classes.label}>Price:</div>
            <div className={classes.description}>{book.price}</div>
          </div>
        </div>

        <footer className={classes.footer}>
          <>Last update:</>
          <div className={classes.date}>{updateDateBook.toLocaleDateString('en-GB')}</div>
          <div className={classes.hour}>
            {updateDateBook.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hourCycle: 'h24',
            })}
          </div>
        </footer>
      </div>
    </RtlProvider>
  );
};

export default BookCard;
