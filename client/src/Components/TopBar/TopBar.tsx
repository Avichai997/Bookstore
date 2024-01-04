import RtlProvider from '@Utils/RtlProvider';
import classes from './TopBar.module.scss';

const TopBar = () => {
  return (
    <RtlProvider>
      <div className={classes.TopBar}>
        <div className={classes.appTitle}>Books Catalog</div>
        <hr className={classes.separatorLine} />
      </div>
    </RtlProvider>
  );
};

export default TopBar;
