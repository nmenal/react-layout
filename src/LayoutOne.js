import React from "react";
import { Route } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout One</h1>
      <h2>{children}</h2>
    </div>
  );
};
const LayoutOneRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default LayoutOneRoute;
