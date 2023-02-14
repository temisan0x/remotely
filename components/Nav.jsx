import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

export const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about-us",
  },
  {
    title: "FAQS",
    link: "/faq",
  },
  {
    title: "Find your new career",
    link: "/",
  }, {
    title: "Collaborate with us",
    link: "/",
  },
];

export default function Nav() {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav

  return (
    <div className="flex flex-wrap sys-app-notCollapsed bg-purple">
      <div className="w-full ">
        <div className="flex justify-between items-center p-6 text-gray-900 rounded-lg shadow-lg font-medium capitalize">
          {/* Logo */}
          <div>
            <h1 className="text-white font-semibold text-3xl">Remotely.</h1>
          </div>
          <div className="px-2 w-full justify-end lg:flex gap-x-5 items-center text-gray-900 font-medium capitalize hidden">
            {/* Links */}
            {navLinks?.map(({ title, link, icon }, id) => (
              <Link
                key={id}
                href={link}
                className={`px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded
                    `}
              >
                <span className="mx-1 text-white text-lg font-normal">
                  {title}
                </span>
              </Link>
            ))}
            <Link
              href="/login"
              className="w-24 h-9 grid text-sm font-normal place-items-center bg-white text-purple"
            >
              Login
            </Link>
          </div>

          {/* After all nav links if you want any button in right then it will come here */}
          <div></div>

          {/* Hamberger Menu  */}
          <div className="lg:hidden transition-all mr-3 my-3 cursor-pointer hover:text-gray-700">
            {isMobileNavOpen ? (
              <AiOutlineMenuFold
                onClick={() => setisMobileNavOpen(false)}
                className="rounded text-5xl text-white hover:skew-y-12"
              />
            ) : (
              <AiOutlineMenuUnfold
                onClick={() => setisMobileNavOpen(true)}
                className="rounded text-5xl text-white hover:skew-y-12"
              />
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          id="navbar"
          className={`pt-0 absolute top-0 z-100 mx-auto ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all flex-wrap lg:hidden`}
        >
          <div className="py-[.5px] w-64">
            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-white min-h-screen  text-left capitalize font-medium shadow-lg">
              {/* Logo */}
              <div>
                <h1>Remotely.</h1>
              </div>

              {/* Links */}
              {navLinks?.map(({ title, link }, id) => (
                <Link
                  key={id}
                  href={link}
                  className={`px-2 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded `}
                >
                  <span className="mx-1">{title}</span>
                </Link>
              ))}
              <Link
                href="/login"
                className="w-24 h-9 grid text-lg place-items-center bg-white"
              >
                Login
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
