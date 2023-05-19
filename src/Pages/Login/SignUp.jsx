import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const SignUp = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const from = location.state?.from?.pathname || "/login";
    if (password.length < 6) {
      setError("Password Must be atleast 6 characters");
    }
    console.log(email, password, photo, name);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate(from, { replace: true });
        console.log(createdUser);
        updateUserData(result.user, name, photo);
        logOut();
      })
      .catch((error) => {
        console.log(error);
      });
    const updateUserData = (user, name) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then((res) => {
          console.log("User Updated");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  return (
    <div class="w-full max-w-xs mx-auto">
      <form
        onSubmit={handleRegister}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border w-96 h-full mx-auto my-8 py-8 text-2xl"
      >
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
            required
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
            required
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
            required
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
            required
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
