import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './shared-layout.module.css';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <div className={styles.container}>
        <Navigation />
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
};

export default SharedLayout;
