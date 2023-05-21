import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
    const isLogin = useSelector(selectIsLogin);

    return isLogin ? children : <Navigate replace to="/login" />;
}