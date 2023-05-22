import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from './redux/auth/authOperation';
import { selectIsLoading } from './redux/auth/authSelectors';
import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';

const HomeVisual = lazy(() => import('visual/HomeVisual'));
const RegisterVisual = lazy(() => import('visual/RegisterVisual'));
const LoginVisual = lazy(() => import('visual/LoginVisual'));
const ContactsVisual = lazy(() => import('visual/ContactsVisual'));

export function App() {
  const dispatch = useDispatch();
  const isCurrentLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {!isCurrentLoading && (
          <>
            <Route index element={<HomeVisual />} />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterVisual />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginVisual />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsVisual />
                </PrivateRoute>
              }
            ></Route>
            <Route path="contacts" element={<ContactsVisual />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Route>
    </Routes>
  );
}