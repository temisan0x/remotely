import React, { useState } from "react";

export default function NewsLetter() {
  return (
    <section>
      <div className="container py-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div class="md:w-[50%] mb-10">
            <h1 className="md:text-4xl text-2xl poppins text-[#3E3C3B] font-bold">
             Remotely.
            </h1>
            <p className="text-1xl mt-5 poppins w-[90%]">
            We've got the solution: world-class training and development programs developed by top universities and companies.
            </p>
          </div>
          <div className="md:w-1/3 relative">
            <form className="mt-8 sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-orange border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <div>
              <p className="text-1xl mt-5">By signing up, you agree to our Terms of Service and Privacy Policy. You will receive offers from Wimdu and agree that we may share your hashed email address with third parties for the purpose of better tailoring advertising to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
