import { useGetAllBooks } from '@ApiService/Requests/useBook';
import classes from './BooksContainer.module.scss';
import BookCard from './BookCard';

const BooksContainer = () => {
  const { books } = useGetAllBooks();

  return (
    <div className={classes.goalsContainer}>
      <div className={classes.goalsCards}>
        <div className={classes.goals}>
          {books?.map((book, index) => (
            <div className={classes.goalCard} key={index}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksContainer;
