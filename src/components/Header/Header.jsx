import { useSelector } from 'react-redux';
import UserMenu from '../MenuUser/MenuUser';
import MainNav from '../MainNavigation/MainNavigation';
import AuthNav from '../AuthNavigate/AuthNavigate';
import { selectIsLogin } from '../../redux/auth/authSelectors';
import s from './Header.module.css';
export default function Header() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <header className={s.header}>
      <MainNav />
      {!isLogin ? <AuthNav /> : <UserMenu />}
    </header>
  );
}