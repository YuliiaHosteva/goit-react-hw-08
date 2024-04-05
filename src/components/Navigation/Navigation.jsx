import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import CustomLink from '../CustomNavLink/CustomNavLink';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.nav}>
      <CustomLink to="/">Home</CustomLink>
      {isLoggedIn && <CustomLink to="/contacts">Contacts</CustomLink>}
    </div>
  );
};

export default Navigation;