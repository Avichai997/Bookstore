import { Outlet } from 'react-router-dom';
import TopBar from '@Components/TopBar/TopBar';
import classes from './BooksCatalog.module.scss';

const BooksCatalog = () => {
  return (
    <div className={classes.container}>
      <TopBar />
      <div className={classes.outletScreen}>
        <Outlet />
      </div>
    </div>
  );
};
export default BooksCatalog;
