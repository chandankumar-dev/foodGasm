import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{status + " :  " + statusText}</h2>
      <Link to="/">
        <button className="">Home 👈</button>
      </Link>
    </div>
  );
};

export default Error;
