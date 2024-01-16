import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";

import { useSelector } from "react-redux";
import { useState } from "react";
const Navigation = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [shopOpen, setshopOpen] = useState(false);

  return (
    <div className="flex justify-between bg-[#ac1f8d] p-3">
      <nav className="flex fixed z-10 bg-[#ac1f8d] justify-between items-center p-8 px-32 max-md:hidden top-0 right-0 left-0">
        <div className="text-[#fff4fe] text-2xl">STORE</div>
        <ul className="">
          <li className="flex text-xl ">
            <Link
              to="/store-create/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-9 py-1"
            >
              Juegos
            </Link>
            <Link
              to="/store/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-9 py-1"
            >
              Productos
            </Link>
            <Link
              to="/games/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-9 py-1"
            >
              Juegos
            </Link>{" "}
            <Link
              to="/productos/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-9 py-1"
            >
              Productos
            </Link>
          </li>
        </ul>{" "}
        <Link
          to="/"
          className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2 py-1 relative"
        >
          <FaCartShopping className="text-2xl relative"></FaCartShopping>
          {cartItems.length > 0 && (
            <span className="absolute h-6 w-6 bg-white border-white text-black rounded-full top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-sm font-bold">
              {cartItems.length}
            </span>
          )}
        </Link>{" "}
      </nav>
      {/*Mobile Menu */}
      <div className="mobile-menu block md:hidden bg-[#ac1f8d] ">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <HiMiniBars3 className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <HiOutlineXMark className="h-5 w-5" />
          </button>
        )}
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center justify-center text-center">
          <li>
            <Link
              to={"/productos"}
              className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white"
            >
              Productos
            </Link>
            <Link
              to="/games/"
              className="block py-2 pl-3 pr-4 text-slate-300  sm:text-xl rounded md:p-0 hover:text-white"
            >
              Juegos
            </Link>
          </li>
        </ul>
      ) : null}
      {/* Shop */}
      <div className="mobile-menu block md:hidden bg-[#ac1f8d] ">
        {!shopOpen ? (
          <button
            onClick={() => setshopOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-50 hover:text-white hover:border-white"
          >
            <FaCartShopping className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setshopOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-50 hover:text-white hover:border-white"
          >
            <FaCartShopping className="h-5 w-5" />
          </button>
        )}
      </div>{" "}
    </div>
  );
};
export default Navigation;

/**
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (

    <>
      <nav className=" fixed mx-auto border border-[#33353F] top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            Pedro M.
          </Link>
          {/** Menu Overlay }
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </>
  );
};

*/
