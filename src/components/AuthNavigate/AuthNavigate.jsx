import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from '../MainNavigation/MainNavigation.module.css';
import { useSelector } from "react-redux";



export default function AuthNavigate() {
    const isLogged = useSelector(state => state.auth.isLogin)
    console.log(isLogged);
    return (
<>
        {!isLogged &&
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
            }
            {isLogged &&
                <div><NavLink
                    to="/contacts">Contacts</NavLink>
                    <p>User name</p>
                    <button className={s.btn} color="success" variant="contained" type="submit">
                Logout
            </button>
                </div>}
    </>
    );
}
