import { Link, NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

export const Navbar = () => {
    return (
    <nav className={classes.navbar}>
        <NavLink to="/" exact activeClassName={classes.active} className={(navData) => navData.isActive ? 'attvio': ''} >Home</NavLink>
        <NavLink to="/login" activeClassName="quellaGiusta">Login</NavLink>
        <NavLink to="/users"  activeClassName="quellaGiusta">Users</NavLink>
      </nav>);
}