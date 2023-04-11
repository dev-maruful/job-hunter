import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <img
          className="h-[200px]"
          src="https://cdn-icons-png.flaticon.com/512/847/847248.png?w=740&t=st=1681152829~exp=1681153429~hmac=546dcc85a7c107001173e228e4b09a059af2addc62840e30bf0de2859a9fb788"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Page Not Found
          </p>
          <Link
            to="/"
            className="bg-blueGradient w-[200px] text-white border-none px-4 py-4 rounded-lg text-xl font-extrabold"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
