import React from "react";
import { Link } from "react-router-dom";
const ComponentTwo = () => {
  return (
    <div>
      component Two
      <Link to="/myComponent1"> Go 1</Link>
    </div>
  );
};
export default ComponentTwo;
