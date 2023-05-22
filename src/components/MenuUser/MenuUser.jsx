import s from './MenuUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperation';
import Button from '@mui/material/Button';
export default function UserMenu() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <span>Welcome, {name.toUpperCase()}</span>
      <Button
        size="small"
        type="button"
        onClick={() => dispatch(logout())}
        className={s.btn}
        color="success"
        variant="contained"
      >
        Logout
      </Button>
    </div>
  );
}