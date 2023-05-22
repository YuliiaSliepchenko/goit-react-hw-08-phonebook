import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './redux/auth/authSelectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  //   console.log(routeProps);
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? children : <Navigate replace to="/login" />;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
