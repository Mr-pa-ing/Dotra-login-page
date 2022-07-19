import React from "react";

import images from "../constants/images";

const Login = () => {
  return (
    <div className="flex justify-between min-h-screen font-sans">
      <div
        className="hidden relative w-1/2 bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        <div className="absolute bottom-20 flex justify-center w-full">
          <div className="max-w-md text-center">
            <span className="text-3xl leading-loose font-bold text-gray-900">
              Control Business
            </span>
            <p className="font-light text-gray-500 leading-7">
              Dotra is the most comprehensive field service & asset managament
              platform with combining flexibility.
            </p>
            <div className="flex-center space-x-6 pt-8">
              <button className="rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none">
                <img src={images.circleLeft} alt="leftbtn" />
              </button>
              <button className="rounded-full focus:ring-2 focus:ring-orange-500 focus:outline-none">
                <img src={images.circleRight} alt="rightbtn" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mx-auto max-w-2xl">
        <div className="flex flex-col px-8 py-10 lg:px-24">
          <img
            src={images.logo}
            className="w-32 md:self-end self-center"
            alt="logo"
          />
          <div className="pt-20 pb-10">
            <h1 className="text-3xl leading-loose font-bold tracking-wide whitspace-nowrap">
              Hi, Welcome back!
            </h1>
            <span className="font-light text-gray-500">
              Login now to manage your job made easy.
            </span>
          </div>
          <div className="flex flex-wrap justigy-between gap-x-6 gap-y-4 whitespace-nowrap">
            <button className="flex justify-center items-center flex-1 py-4.5 px-3 rounded-lg border hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
              <img src={images.google} className="w-6 h-6 mr-2" alt="google" />
              <span className="font-medium">Sign in with Google</span>
            </button>
            <button className="flex justify-center items-center flex-1 bg-blue-500 py-4.5 px-3 rounded-lg text-white hover:bg-blue-600 focus:ring-4 focus:ring-gray-100">
              <img
                src={images.facebook}
                className="w-6 h-6 mr-2"
                alt="facebook"
              />
              <span className="font-medium">Sign in with Facebook</span>
            </button>
          </div>
          <div className="flex justify-center items-center w-full pt-6">
            <hr className="w-full border-gray-400" />
            <span className="px-4 font-light text-gray-500 tracking-wider">
              or
            </span>
            <hr className="w-full border-gray-400" />
          </div>
          <form action="" className="mt-8">
            <div className="w-full">
              <label htmlFor="email" className="font-light block mb-3">
                Email address
              </label>
              <div className="flex justity-center items-center border px-6 py-2 rounded-lg overflow-hidden transition-all focus-within:border-orange-500 focus-within:shadow-lg">
                <img
                  src={images.email}
                  alt="email"
                  className="inline pointer-events-none"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border-0 focus:outline-none focus:ring-0"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="w-full mt-6">
              <label htmlFor="password" className="font-light block mb-3">
                Password
              </label>
              <div className="flex justity-center items-center border px-6 py-2 rounded-lg overflow-hidden transition-all focus-within:border-orange-500 focus-within:shadow-lg">
                <img
                  src={images.lock}
                  alt="email"
                  className="inline pointer-events-none"
                />
                <input
                  type="text"
                  name="email"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border-0 focus:outline-none focus:ring-0"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="w-4 h-4 rounded focus:ring-orange-600 text-orange-500 bg-white"
                />
                <label htmlFor="remember" className="font-light ml-4">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                Forgot password
              </a>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-orange-500 w-full p-4 mb-4 rounded-lg text-white hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none">
                Sign in
              </button>
              <span className="font-light text-gray-500">
                Not registered yet?{" "}
              </span>
              <a href="#" className="text-teal-500 hover:text-teal-600">
                Create an Account
              </a>
            </div>
            <div className="mt-12 w-full text-center">
              <p className="text-gray-500 mb-2">
                © 2021 Dotra. All rights reserved.
              </p>
              <span className="space-x-1">
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Terms of Service
                </a>
                <span className="text-gray-500">&#183;</span>
                <a href="#" className="text-gray-500 hover:text-gray-600">
                  Privacy Policy
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
