import { QueryClient } from '@tanstack/react-query';
import { TooltipProps } from '@mui/material';
import { IGetTooltipStyle } from './CommonInterfaces';

export const getObjectProperty = <T extends object>(array: T[], field: keyof T) =>
  array.map((item) => item[field]);

export function isEmptyObject(obj: object) {
  return typeof obj === 'object' && Object.keys(obj).length === 0;
}

// ErrorBoundary.tsx
export const getErrorSummary = (error: Error) =>
  `Error Message: ${error.message} \nError Stack: ${error.stack}`;

export const logError = (error: Error) => {
  // eslint-disable-next-line no-console
  console.error('💥 Error from Error Boundary:', error);
};

export const getDateInFormat = (date: Date | string) =>
  new Date(date).toISOString().slice(0, 10).toString();

export const emptyFunction = () => {};
export const minLengthText = (minLength: number) => `שדה זה צריך להכיל לפחות ${minLength} תווים`;
export const maxLengthText = (maxLength: number) =>
  `שדה זה צריך להכיל ${maxLength} תווים לכל היותר`;

function compareObjects(oldQueryData: unknown, newQueryData: unknown) {
  if (oldQueryData === newQueryData) {
    const errorMsg =
      'The object you supplies to the create/update/delete React Query cache are the same objects!\nYou probably changed a data object manually instead of updating react query cache';
    // eslint-disable-next-line no-console
    console.error(errorMsg);
    throw Error(errorMsg);
  }
}
export const updateRQCacheAfterCreate = <T,>(
  createdData: T,
  queryClient: QueryClient,
  queryKey: string
) => {
  queryClient.setQueryData<T[] | T>([queryKey], (oldData) => {
    compareObjects(oldData, createdData);
    if (!Array.isArray(oldData)) return createdData;
    if (Array.isArray(oldData)) return [...oldData, createdData];

    return [];
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateRQCacheAfterUpdate = (
  UpdatedData: any,
  queryClient: QueryClient,
  queryKey: string
) => {
  queryClient.setQueryData([queryKey], (oldData: any) => {
    compareObjects(oldData, UpdatedData);

    return Array.isArray(oldData)
      ? oldData?.map((data: any) => (data.id === UpdatedData.id ? UpdatedData : data))
      : UpdatedData;
  });
};

export const updateRQCacheAfterDelete = (
  dataId: string,
  queryClient: QueryClient,
  queryKey: string
) => {
  queryClient.setQueryData(
    [queryKey],
    (oldData: any) => oldData?.filter((data: any) => data.id !== dataId)
  );
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export const getTooltipStyle = ({
  tooltipSx,
  arrowSx,
}: IGetTooltipStyle = {}): TooltipProps['componentsProps'] => {
  return {
    tooltip: {
      sx: {
        width: 'auto',
        height: 'auto',
        padding: '8px',
        fontSize: '16px',
        lineHeight: '22px',
        borderRadius: '7px',
        border: '1px solid var(--color-shual)',
        color: 'var(--color-shual)',
        backgroundColor: 'var(--color-light-blue)',
        ...tooltipSx,
      },
    },
    arrow: { sx: { color: 'var(--color-shual)', ...arrowSx } },
  };
};
