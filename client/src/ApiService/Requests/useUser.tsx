// import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
// import { useAuth } from '@hooks/react-query/useAuth';
// import { UserLocalStorage } from '@/types/users.model';

// const checkUser = async (queryClient: QueryClient) => {
//   // dummy function - check if user stored in react query cache and return it.
//   const user = queryClient.getQueryData<UserLocalStorage>(['user']);

//   return typeof user === 'undefined'
//     ? Promise.reject(null)
//     : Promise.resolve(user);
// };

// const getStoredUser = (
//   logout: (tokenExpired: boolean) => void,
//   QueryClient: QueryClient
// ) => {
//   // This function handles user authentication global state

//   // 1) Check if user stored in local storage
//   const storedUser = JSON.parse(
//     localStorage.getItem('user') as string
//   ) as UserLocalStorage;

//   if (!storedUser) return undefined;

//   // 2) check if user's token expired, if so - log the user out.
//   const tokenIsValid =
//     new Date(storedUser.tokenExpiration as unknown as string) > new Date();

//   // 3) Token expiration is valid so we set timer to logout user when token expires
//   const logoutTimeoutId = QueryClient.getQueryData<number>(['logoutTimeoutId']);

//   if (!tokenIsValid && !logoutTimeoutId) {
//     // logout() is async function so we set user = undefined in localStorage and in react query cache
//     // to prevent getStoredUser function from being called again and run logout() again
//     localStorage.setItem('user', JSON.stringify(null));
//     QueryClient.setQueryData(['user'], undefined);
//     logout(true);
//     return undefined;
//   }

//   // if logoutTimeoutId is undefined, then we need to set the timeout to auto logout user
//   if (logoutTimeoutId) return storedUser;

//   // if logoutTimeoutId is undefined, then we need to set the timeout to auto logout user
//   const logoutAt = new Date(storedUser.tokenExpiration).getTime() - Date.now();

//   const id = setTimeout(() => {
//     clearTimeout(id);
//     QueryClient.setQueryData(['logoutTimeoutId'], undefined);
//     logout(true);
//   }, logoutAt);

//   QueryClient.setQueryData(['logoutTimeoutId'], id);

//   return storedUser;
// };

// export const useUser = () => {
//   const queryClient = useQueryClient();
//   const { updateLocaleStorage, logout } = useAuth();

//   const { data: user } = useQuery<UserLocalStorage, unknown, UserLocalStorage>(
//     ['user'],
//     // when stored user data become stale - refetch user to check he is still active
//     () => checkUser(queryClient),
//     {
//       // user initialData is our local storage if exists
//       initialData: getStoredUser(logout, queryClient),
//       staleTime: Infinity,
//       cacheTime: Infinity,
//       onSuccess: (data) => {
//         updateLocaleStorage({
//           status: 'success',
//           tokenExpiration: data.tokenExpiration,
//           data: data,
//         });
//       },
//       onError: (error) => {
//         updateLocaleStorage(null);
//       },
//     }
//   );

//   return {
//     user,
//   };
// };
