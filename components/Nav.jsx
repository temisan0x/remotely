import React, { useState } from "react";
import Link  from "next/link";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";


import {TbLayoutDashboard} from 'react-icons/tb'
import {HiTemplate} from 'react-icons/hi'
import {GiSellCard} from 'react-icons/gi'
import {AiFillCrown} from 'react-icons/ai'

export const navLinks = [
    {
        title: "Dashboard",
        link: "/",
        icon: <TbLayoutDashboard />
    },
    {
        title: "Link2",
        link: "/",
        icon: <HiTemplate />
    },
    {
        title: "Link3",
        link: "/",
        icon: <AiFillCrown />
    },
    {
        title: "Link4",
        link: "/",
        icon: <GiSellCard />
    },
]

export default function Nav() {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav

  //   If button is there
  const handleClick = () => {
    if (isMobileNavOpen) {
      setisMobileNavOpen(false);
    }
  };
  

  return (
    <div>
    <div className="flex flex-wrap sys-app-notCollapsed ">
      <div className="w-full ">
          <div className="w-full flex justify-between items-center p-6 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
            {/* Logo */}
            <div>
              <h1>Remotely.</h1>
            </div>
            <div className="px-2 flex w-full justify-end md:flex gap-x-5 items-center text-gray-900 bg-white font-medium capitalize hidden">
              {/* Links */}
              {navLinks?.map(({ title, link, icon }, id) => (
                <Link key={id} href={link}
                    className={`px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded
                    `}
                  >
                    <span className="mx-1">{title}</span>
                </Link>
              ))}
            </div>

            {/* After all nav links if you want any button in right then it will come here */}
            <div></div>

            {/* Hamberger Menu  */}
            <div className="md:hidden transition-all mr-3 my-3 cursor-pointer hover:text-gray-700">
              {isMobileNavOpen ? (
                <AiOutlineMenuFold
                  onClick={() => setisMobileNavOpen(false)}
                  className="rounded text-2xl"
                />
              ) : (
                <AiOutlineMenuUnfold
                  onClick={() => setisMobileNavOpen(true)}
                  className="rounded text-2xl"
                />
              )}
            </div>
        </div>

        {/* Mobile Navbar */}
        <div
          id="navbar"
          className={`pt-0 absolute top-2 z-100 mx-auto ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all flex-wrap md:hidden`}
        >
          <div className="py-[.5px] w-64">
            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-white rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
              {/* Logo */}
              <img
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5 "
              />

              {/* Links */}
              {navLinks?.map(({ title, link, icon }, id) => (
                <Link key={id} href={link}
                    className={`px-2 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded `}
                  >
                    <span className="mx-1">{title}</span>
                </Link>
              ))}

              {/* After all nav links if you want any button or link then it will come here */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
