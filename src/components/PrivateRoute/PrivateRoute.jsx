import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/users/signin" />;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;