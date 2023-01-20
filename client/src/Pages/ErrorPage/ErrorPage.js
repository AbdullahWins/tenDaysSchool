import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h2 className="m-4">Sorry! This page is not available.</h2>
      <Image
        className="m-4"
        referrerPolicy="no-referrer"
        roundedCircle
        style={{ height: "300px" }}
        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
      ></Image>
      <p className="m-4">
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
