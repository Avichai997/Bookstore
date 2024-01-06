import { useMutation, UseMutationOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { EmptyObject, IMutation, QueryOptions } from '@CommonInterfaces';
import {
  updateRQCacheAfterCreate,
  updateRQCacheAfterDelete,
  updateRQCacheAfterUpdate,
} from '@CommonFunctions';
import { IBook } from '@ApiService/Interfaces/IBooks';
import { BOOKS_QUERY_KEY } from '@CommonConstants';

export const useGetAllBooks = (options?: QueryOptions<IBook[]>) => {
  const { data: books, ...queryInfo } = useQuery<IBook[]>({
    queryKey: [BOOKS_QUERY_KEY],
    ...options,
  });

  return { books, ...queryInfo };
};

export const useGetBook = (id: string, options?: QueryOptions<IBook>) => {
  const { data: book, ...queryInfo } = useQuery<IBook>({
    queryKey: [`${BOOKS_QUERY_KEY}/${id}`],
    ...options,
  });

  return { book, ...queryInfo };
};

export const useBookCRUD = () => {
  const queryClient = useQueryClient();

  const { mutate: CreateBook, ...createMutateInfo } = useMutation<IBook, unknown, IMutation<IBook>>(
    {}
  );

  const { mutate: UpdateBook, ...updateMutateInfo } = useMutation<IBook, unknown, IMutation<IBook>>(
    {}
  );

  const { mutate: DeleteBook, ...deleteMutateInfo } = useMutation<
    string,
    unknown,
    IMutation<EmptyObject>
  >({});

  const createBook = (
    data: IBook,
    options?: UseMutationOptions<IBook, unknown, IMutation<IBook>>
  ) => {
    CreateBook(
      {
        method: 'Post',
        path: BOOKS_QUERY_KEY,
        headers: {},
        data,
      },
      {
        onSuccess: (createdBook) => {
          updateRQCacheAfterCreate(createdBook, queryClient, BOOKS_QUERY_KEY);
        },
        ...options,
      }
    );
  };

  const updateBook = (
    id: string,
    data: IBook,
    cityId: string,
    options?: UseMutationOptions<IBook, unknown, IMutation<IBook>>
  ) => {
    UpdateBook(
      {
        method: 'Patch',
        path: `${BOOKS_QUERY_KEY}/${id}`,
        headers: {},
        data,
      },
      {
        onSuccess: (updatedBook) => {
          updateRQCacheAfterUpdate(updatedBook, queryClient, BOOKS_QUERY_KEY);
        },
        ...options,
      }
    );
  };

  const deleteBook = (
    id: string,
    options?: UseMutationOptions<unknown, unknown, IMutation<Partial<IBook>>>
  ) => {
    DeleteBook(
      {
        method: 'Delete',
        path: `${BOOKS_QUERY_KEY}/${id}`,
        headers: {},
        data: {},
      },
      {
        onSuccess: () => updateRQCacheAfterDelete(id, queryClient, BOOKS_QUERY_KEY),
        ...options,
      }
    );
  };

  return {
    createBook,
    updateBook,
    deleteBook,
    createMutateInfo,
    updateMutateInfo,
    deleteMutateInfo,
  };
};
