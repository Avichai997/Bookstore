/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ComponentPropsWithoutRef,
  ComponentType,
  LazyExoticComponent,
  Suspense,
  lazy,
} from 'react';
import Loading from '@CommonComponents/Loading/Loading';

// Wrapper function used to suspense lazy loading routes for code splitting
const LazySuspense = (Component: LazyExoticComponent<ComponentType<any>>) =>
  function Fallback(props: ComponentPropsWithoutRef<typeof Component>) {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default LazySuspense;

export const ProjectStatus = LazySuspense(lazy(() => import('@Pages/ProjectStatus/ProjectStatus')));
