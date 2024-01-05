import { IBook } from '@ApiService/Interfaces/IBooks';
import RtlProvider from '@Utils/RtlProvider';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import classes from './BookCard.module.scss';

interface IBookCard {
  book: IBook;
}
const BookCard = ({ book }: IBookCard) => {
  const navigate = useNavigate();

  const updateDateBook = book.updatedAt ? new Date(book.updatedAt) : new Date();

  return (
    <RtlProvider>
      <div className={classes.bookCardContainer}>
        <header className={classes.header}>
          <Button className={classes.bookTitle} onClick={() => navigate(`/Book/${book.id}`)}>
            {book.title}
          </Button>

          <IconButton color='primary' className={classes.iconButton} onClick={() => {}}>
            <DeleteOutlineOutlined className={classes.closeModalIcon} />
          </IconButton>
        </header>

        <div className={classes.bookStatus}>
          <div className={classes.descriptionLabel}>description:</div>
          <div className={classes.description}>{book.description}</div>
          <div className={classes.authorLabel}>author:</div>
          <div className={classes.description}>{book.author}</div>
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
