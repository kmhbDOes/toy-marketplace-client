import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { handleGoogleSignIn, signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login-bg py-5">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border w-96 h-full mx-auto my-8 py-8 text-2xl opacity-80"
      >
        <div class="mb-4 my-4">
          <label
            class="block text-gray-700  font-bold mb-2 text-2xl"
            for="email"
          >
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
        <div class="mb-6  my-4">
          <label
            class="block text-gray-700  text-2xl font-bold mb-2"
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
          {/* Error */}
          <p class="text-red-500 text-xs font-bold">{loginError}</p>
        </div>
        <div class="flex items-center justify-between my-6">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex justify-center py-2 gap-x-4">
          {/* Google sign in */}
          <div>
            <Link onClick={googleSignIn} to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="text-center py-2">
          Don't have an account? <br />
          <Link className="link font-bold text-green-500" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
