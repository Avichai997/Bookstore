import { useGetAllBooks } from '@ApiService/Requests/useBook';
import BookCard from '@Components/BookCard/BookCard';
import classes from './BooksContainer.module.scss';

const BooksContainer = () => {
  const { books } = useGetAllBooks();

  return (
    <div className={classes.booksContainer}>
      <div className={classes.booksCards}>
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
