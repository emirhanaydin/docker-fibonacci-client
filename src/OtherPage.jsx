import React from "react";
import { Link } from "react-router-dom";

function OtherPage() {
  return (
    <div>
      <h1>This is another page.</h1>

      <Link to="/">Homepage</Link>
    </div>
  );
}

export default OtherPage;
