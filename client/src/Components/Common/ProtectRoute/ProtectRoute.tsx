import { IProtectRoute } from '@CommonInterfaces';
import { useAtomValue } from 'jotai';
import { userAtom } from '@Atoms/Atoms';

const ProtectRoute = ({ children }: IProtectRoute) => {
  const user = useAtomValue(userAtom);

  return user ? <>{children}</> : <div>not authorized</div>;
};

export default ProtectRoute;
