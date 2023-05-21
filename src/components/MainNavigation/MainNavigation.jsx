import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import s from './MainNavigation.module.css';

import { selectIsLogin } from 'redux/auth/authSelectors';

export default function MainNav() {
    const isLogin = useSelector(selectIsLogin);
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => {
                    return clsx(isActive ? s.active : s.link);
                }}
            >
                <span>HOME</span>
            </NavLink>
            {isLogin && (
                <NavLink
                    to="/contacts"
                    className={({ isActive }) => {
                        return clsx(isActive ? s.active : s.link);
                    }}
                >
                    <span>CONTACTS</span>
                </NavLink>
            )}
        </nav>
    );
}