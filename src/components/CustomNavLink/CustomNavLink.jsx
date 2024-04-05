import { NavLink } from 'react-router-dom';
import css from './CustomNavLink.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const CustomNavLink = ({ children, to }) => {
  return (
    <NavLink className={buildLinkClass} to={to}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;