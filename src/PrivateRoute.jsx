import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Element, allowedRoles, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      element={
        user.isLoggedIn && allowedRoles.includes(user.role) ? (
          <Element />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
