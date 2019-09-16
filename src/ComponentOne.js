import React from "react";
import { Link } from "react-router-dom";

const ComponentOne = () => {
  return (
    <div>
      component One
      <Link to="/myComponent2"> Go 2</Link>
    </div>
  );
};
export default ComponentOne;
