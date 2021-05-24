import React from 'react';
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, token, isPrivate, ...rest }) => {
  if (!token && isPrivate) {
    return <Redirect to="/signIn" />;
  }

  return (
    <Route
      {...rest}
      render={props => 
        <Component {...props} />
      }
    />
  )
};

export default PrivateRoute;