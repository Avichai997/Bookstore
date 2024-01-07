import { useGetAllBooks, useBookCRUD } from '@ApiService/Requests/useBook';
import { ToastSuccess } from '@CommonComponents/Toastify/Toasts';
import { isEnvTest } from '@Utils/Environment';
import { mockBook, mockNewBook } from '../mockData';

const MockBookUi = () => {
  const { books, refetch } = useGetAllBooks();
  const { createBook, updateBook, deleteBook } = useBookCRUD();
  const firstBookID = isEnvTest ? '123456' : books?.[0]?.id;

  const createHandler = () => {
    createBook(mockNewBook, {
      onSuccess: () => ToastSuccess('Book created!'),
    });
  };

  const updateHandler = () => {
    if (!firstBookID) return;
    updateBook(firstBookID, mockBook, {
      onSuccess: () => ToastSuccess('Book updated!'),
    });
  };

  const deleteHandler = () => {
    if (!firstBookID) return;
    deleteBook(firstBookID, {
      onSuccess: () => ToastSuccess('Book deleted!'),
    });
  };

  return (
    <>
      <h1>Test Books UI</h1>
      <button type='button' onClick={() => refetch()}>
        get
      </button>
      <button type='button' onClick={() => createHandler()}>
        create
      </button>
      <button type='button' onClick={() => updateHandler()}>
        update
      </button>
      <button type='button' onClick={() => deleteHandler()}>
        delete
      </button>
    </>
  );
};
export default MockBookUi;
