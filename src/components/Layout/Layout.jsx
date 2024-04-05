import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;