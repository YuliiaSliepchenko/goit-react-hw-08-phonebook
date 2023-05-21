import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from '..//MainNavigation/MainNavigation.module.css';


export default function AuthNavigate() {
    return (
        <div>
            <NavLink
                to="/register"
                className={({ isActive }) => {
                    return clsx(isActive ? s.active : s.link);
                }}
            >
                <span>Register/</span>
            </NavLink>
            <NavLink to="/login"
                className={({
                    isActive }) => {
                    return clsx(isActive ? s.active : s.link);
                }}
            >
                <span>Login</span>
            </NavLink>
        </div>
    );
}
