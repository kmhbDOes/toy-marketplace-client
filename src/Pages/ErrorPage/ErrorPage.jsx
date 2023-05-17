import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div>
          <img
            className="h-80 w-full rounded-lg"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/page-not-found-3959255-3299954.gif"
            alt=""
          />
        </div>
        <div className="max-w-md text-center">
          <h2 className="mb-5 font-extrabold text-8xl animate-pulse text-red-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded  bg-red-500 hover:bg-red-800 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
