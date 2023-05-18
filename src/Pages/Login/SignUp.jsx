import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border w-96 h-full mx-auto my-8 py-8 text-2xl">
        {/* Input Field from here */}
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="
            name"
          >
            Name
          </label>
          <input
            class="shadow border-4 border-gray-400  hover:border-green-500 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            requigreen
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow border-4 border-gray-400  hover:border-green-500 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            requigreen
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border-4 border-gray-400 hover:border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            requigreen
          />
          {/* Show Error */}
          <p class="text-green-500 text-xs italic"></p>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="photo">
            Photo URL
          </label>
          <input
            class="shadow border-4 border-gray-400  hover:border-green-500 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            name="photo"
            type="text"
            placeholder="URL"
            requigreen
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="mx-auto animate-bounce bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center py-2">
          RegisteredAlready? <br />
          <Link className="link font-bold text-green-500" to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
