"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const closeMenu = () => setNav(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black bg-white bg-opacity-95">
      <h1 className="w-full text-3xl font-bold text-black">
        Functional Beings
      </h1>
      <ul className="cursor-pointer hidden md:flex">
        <li className="p-4 bg-opacity-95">
          <Link
            className="hover:border-b-4 border-b-orange-800"
            to="Home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>

        <li className="p-4 bg-opacity-95">
          <Link
            className="hover:border-b-4 border-b-orange-800"
            to="Treatments"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Treatments
          </Link>
        </li>
        <li className="p-4 bg-opacity-95">
          <Link
            className="hover:border-b-4 border-b-orange-800"
            to="Prices"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Prices
          </Link>
        </li>

        <li className="p-4 bg-opacity-95">
          <Link
            className="hover:border-b-4 border-b-orange-800"
            to="Reviews"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Reviews
          </Link>
        </li>
        <li className="p-4 bg-opacity-95">
          <Link
            className="hover:border-b-4 border-b-orange-800"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "block md:hidden fixed left-0 top-0 w-full h-full border-r-orange-800 bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="p-4 w-full text-3xl font-bold text-black m-4">
          Functional Beings
        </h1>
        <div>
          <li className="p-4 border-b border-orange-800">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="p-4 border-b border-orange-800">
            <Link
              to="Treatments"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Treatments
            </Link>
          </li>
          <li className="p-4 border-b border-orange-800">
            <Link
              to="Prices"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Prices
            </Link>
          </li>

          <li className="p-4 border-b border-orange-800">
            {" "}
            <Link
              to="Reviews"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Reviews
            </Link>
          </li>
          <li className="p-4 border-b border-orange-800">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;

/*{!user && (
  <li className="p-4">
    <button onClick={() => signIn()} className="whitespace-nowrap">
      Sign In
    </button>
  </li>
)}
{user && (
  <li className="p-4">
    <button onClick={() => signOut()} className="whitespace-nowrap">
      Sign Out
    </button>
  </li>
)}


 {!user && (
          <li className="p-4">
            <button onClick={() => signIn()} className="whitespace-nowrap">
              Sign In
            </button>
          </li>
        )}
        {user && (
          <li className="p-4">
            <button onClick={() => signOut()} className="whitespace-nowrap">
              Sign Out
            </button>
          </li>
        )}

        */
