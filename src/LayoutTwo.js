import React from "react";
import { Route } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout Two</h1>
      <h2>{children}</h2>
    </div>
  );
};
const LayoutTwoRoute = ({ component: Component, ...rest }) => {
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
export default LayoutTwoRoute;
