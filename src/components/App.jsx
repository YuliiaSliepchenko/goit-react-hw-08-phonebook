import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from '../redux/auth/authOperation';
import { selectIsLoading } from '../redux/auth/authSelectors';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from 'PrivatRoute';
import PublicRoute from 'PublicRoute';

const HomeView = lazy(() => import('visual/HomeVisual'));
const RegisterView = lazy(() => import('visual/RegisterVisual'));
const LoginView = lazy(() => import('visual/LoginVisual'));
const ContactView = lazy(() => import('visual/ContactsVisual'));

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
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginView />
                    </PublicRoute >
          }
                  />
              <Route
              path="contacts"
              element={
                <PrivateRoute>
                      <ContactView />
                </PrivateRoute>
              }
              ></Route>
              <Route path="contacts" element={<ContactView />} />
              <Route path="*" element={<Navigate to="/" />} />
              </>
          )}
          </Route>
      </Routes>
    );
  }
