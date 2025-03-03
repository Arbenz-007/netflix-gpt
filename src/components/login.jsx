import React, { useState } from "react";
import Header from "./Header";
import bgimg from "../utils/bgimg.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="bg_img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black opacity-85 my-36 mx-auto right-0 left-0 rounded-lg">
        <h1 className="text-white text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign  Up"}
        </h1>
        {!isSignInForm && (
        <input
          type="text"
          placeholder="Full Name"
          className="text-white p-4 my-4 w-full bg-black opacity-85 rounded-2xl border border-amber-50"
        />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="text-white p-4 my-4 bg-black opacity-85 w-full rounded-2xl border border-amber-50"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-white p-4 my-4 w-full bg-black opacity-85 rounded-2xl border border-amber-50"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-2xl">
          {isSignInForm ? "Sign In" : "Sign  Up"}
        </button>
        <p className="text-white  py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Up Now" : "Already a user Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
