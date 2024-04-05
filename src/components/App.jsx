import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Loader from './Loader/Loader';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/Login'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<Registration />} redirectTo="/contacts" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
};

export default App;