// import { useMutation, UseMutationOptions, useQuery, useQueryClient } from '@tanstack/react-query';
// import { EmptyObject, IMutation, QueryOptions } from '@CommonInterfaces';
// import { IGoal } from '@ApiService/Interfaces/IGoal';
// import {
//   getQueryKeyAssignmentByUser,
//   isUserRachelAdmin,
//   updateRQCacheAfterCreate,
//   updateRQCacheAfterUpdate,
// } from '@CommonFunctions';
// import { useRecoilValue } from 'recoil';
// import { selectedScenarioAtom, UserAtom } from '@Atoms/Atoms';
// import { useGetAllAssignments } from './useAssignment';

// export const useGetAllGoals = (options?: QueryOptions<IGoal[]>) => {
//   const user = useRecoilValue(UserAtom);
//   const { data: goals, ...queryInfo } = useQuery<IGoal[]>({
//     queryKey: [GOAL_QUERY_KEY],
//     ...options,
//     enabled: !!user.UserId && options?.enabled,
//   });

//   return { goals, ...queryInfo };
// };

// export const useGetGoal = (id: string, options?: QueryOptions<IGoal>) => {
//   const user = useRecoilValue(UserAtom);

//   const { data: goal, ...queryInfo } = useQuery<IGoal>({
//     queryKey: [`${GOAL_QUERY_KEY}/${id}`],
//     ...options,
//     enabled: !!user.UserId && options?.enabled,
//   });

//   return { goal, ...queryInfo };
// };

// export const useGoalCRUD = () => {
//   const queryClient = useQueryClient();
//   const { assignments } = useGetAllAssignments();
//   const { goals } = useGetAllGoals();
//   const user = useRecoilValue(UserAtom);
//   const selectedScenario = useRecoilValue(selectedScenarioAtom);

//   const { mutate: CreateGoal, ...createMutateInfo } = useMutation<IGoal, unknown, IMutation<IGoal>>(
//     {}
//   );

//   const { mutate: UpdateGoal, ...updateMutateInfo } = useMutation<IGoal, unknown, IMutation<IGoal>>(
//     {}
//   );

//   const { mutate: DeleteGoal, ...deleteMutateInfo } = useMutation<
//     string,
//     unknown,
//     IMutation<EmptyObject>
//   >({});

//   const createGoal = (
//     data: IGoal,
//     options?: UseMutationOptions<IGoal, unknown, IMutation<IGoal>>
//   ) => {
//     CreateGoal(
//       {
//         method: 'Post',
//         path: GOAL_QUERY_KEY,
//         headers: {},
//         data,
//       },
//       {
//         onSuccess: (createdGoal) => {
//           updateRQCacheAfterCreate(createdGoal, queryClient, GOAL_QUERY_KEY);
//         },
//         ...options,
//       }
//     );
//   };

//   const updateGoal = (
//     id: string,
//     data: IGoal,
//     cityId: string,
//     options?: UseMutationOptions<IGoal, unknown, IMutation<IGoal>>
//   ) => {
//     const oldGoal = goals?.find((goal) => goal.id === id);
//     UpdateGoal(
//       {
//         method: 'Put',
//         path: `${GOAL_QUERY_KEY}?id=${id}&cityId=${cityId}`,
//         headers: {},
//         data,
//       },
//       {
//         onSuccess: (updatedGoalResponse) => {
//           let newAssignment;
//           if (oldGoal?.status !== updatedGoalResponse.status)
//             assignments?.forEach((assignment) => {
//               if (assignment.goal === id) {
//                 newAssignment = {
//                   ...structuredClone(assignment),
//                   assignmentDetail: {
//                     ...assignment.assignmentDetail,
//                     status: {
//                       routine: updatedGoalResponse.status,
//                       operational: updatedGoalResponse.status,
//                     },
//                   },
//                 };
//                 updateRQCacheAfterUpdate(
//                   newAssignment,
//                   queryClient,
//                   getQueryKeyAssignmentByUser(key, [selectedScenario], user)
//                 );
//               }
//             });
//           updateRQCacheAfterUpdate(updatedGoalResponse, queryClient, GOAL_QUERY_KEY);
//         },
//         ...options,
//       }
//     );
//   };

//   const deleteGoal = (
//     id: string,
//     options?: UseMutationOptions<unknown, unknown, IMutation<Partial<IGoal>>>
//   ) => {
//     DeleteGoal(
//       {
//         method: 'Delete',
//         path: `${GOAL_QUERY_KEY}/${id}`,
//         headers: {},
//         data: {},
//       },
//       {
//         onSuccess: () =>
//           queryClient.invalidateQueries({
//             queryKey: [GOAL_QUERY_KEY],
//           }),
//         ...options,
//       }
//     );
//   };

//   return {
//     createGoal,
//     updateGoal,
//     deleteGoal,
//     createMutateInfo,
//     updateMutateInfo,
//     deleteMutateInfo,
//   };
// };
