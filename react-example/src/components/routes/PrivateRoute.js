import React, { useState, useEffect } from 'react';
import * as allRoutes from './index';
import rolesConfig from '../../config/roles';
import { Route, useNavigate, Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  const [allowedRoutes, setAllowedRoutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let role = props.role;
    if (role) {
      setAllowedRoutes(rolesConfig[role].routes);
    } else {
      navigate('/login');
    }
  }, [props.role, navigate]);

  // Ensure `allRoutes` contains valid React components.
  // Filter out any routes where the component might be undefined.
  const validRoutes = allowedRoutes.filter(route => {
    const Component = allRoutes[route.component];
    return Component !== undefined;
  });

  if (!props.role) {
    // Still authenticating or role not set, can return null or a loading indicator
    return null;
  }

  return (
    <>
      {validRoutes.map(route => {
        const Component = allRoutes[route.component];
        return (
          <Route
            path={route.url}
            element={<Component />}
            key={route.url}
          />
        );
      })}
      {props.role === "guest" ? <Navigate to='/login' replace /> : null}
    </>
  );
};

export default PrivateRoute;
