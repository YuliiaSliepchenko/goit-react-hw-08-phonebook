import { useSelector } from 'react-redux';
import MenuUser from 'components/MenuUser/MenuUser';
import MainNavigation from 'components/MainNavigation/MainNavigation';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { selectIsLogin } from 'redux/auth/authSelectors';
import s from '../Header/Header.module.css';

export default function Header() {
    const isLogin = useSelector(selectIsLogin);
    return (
        <header className={s.header}>
            <MainNavigation />
            {!isLogin ? <AuthNavigate /> : <MenuUser />}
        </header>
    );
}