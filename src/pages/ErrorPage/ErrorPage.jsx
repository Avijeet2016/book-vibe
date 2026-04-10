import React from "react";
import { Link, NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "50px", color: "red", fontWeight: '600' }}>404</h1>
      <h2 className="font-bold">Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            border: "2px solid blue",
            borderRadius: "15px",
            color: "white",
            background: "blue"
          }}
        >
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
