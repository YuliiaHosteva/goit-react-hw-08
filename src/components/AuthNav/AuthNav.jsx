import css from './AuthNav.module.css';
import CustomLink from '../CustomNavLink/CustomNavLink';

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <CustomLink to="/register">Sign up</CustomLink>
      <CustomLink to="/login">Sign in</CustomLink>
    </div>
  );
};

export default AuthNav;