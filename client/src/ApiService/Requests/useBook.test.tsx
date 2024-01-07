import { rest } from 'msw';
import { describe, it } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, screen } from '@testing-library/react';
import { useGetAllBooks, useGetBook } from '@ApiService/Requests/useBook';
import MockBookUi from '@Tests/MockServer/MockUi/MockBookUi';
import { createWrapper, renderComponentWithProviders } from '@Tests/MockServer/createWrapper';
import { mockServer } from '@Tests/MockServer/mockServerSetup';
import { mockBook } from '@Tests/MockServer/mockData';

describe('useBook', () => {
  it('Should GET all books successfully', async () => {
    const { result, waitFor } = renderHook(() => useGetAllBooks(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    const bookTitle = result.current.books?.[0].title;

    expect(bookTitle).toBe(mockBook.title);
  });

  it('Should get one book successfully', async () => {
    const { result, waitFor } = renderHook(() => useGetBook('1234'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    const bookTitle = result.current.book?.title;

    expect(bookTitle).toBe(mockBook.title);
  });

  it('Should create one book successfully', async () => {
    renderComponentWithProviders(<MockBookUi />);

    const createBtn = screen.getByRole('button', {
      name: 'create',
    });

    expect(createBtn).toBeInTheDocument();

    fireEvent.click(createBtn);

    expect(await screen.findByText('Book created!')).toBeInTheDocument();
  });

  it('Should update one book successfully', async () => {
    renderComponentWithProviders(<MockBookUi />);

    const updateBtn = screen.getByRole('button', {
      name: 'update',
    });

    expect(updateBtn).toBeInTheDocument();

    fireEvent.click(updateBtn);

    expect(await screen.findByText('Book updated!')).toBeInTheDocument();
  });

  it('Should delete one book successfully', async () => {
    renderComponentWithProviders(<MockBookUi />);

    const deleteBtn = screen.getByRole('button', {
      name: 'delete',
    });

    expect(deleteBtn).toBeInTheDocument();

    fireEvent.click(deleteBtn);

    expect(await screen.findByText('Book deleted!')).toBeInTheDocument();
  });

  it('Should return error when fetching books fails', async () => {
    mockServer.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result, waitFor } = renderHook(() => useGetAllBooks(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
