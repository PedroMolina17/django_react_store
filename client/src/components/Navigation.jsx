import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";
import { updateQuantity } from "../features/product/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const Navigation = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [shopOpen, setshopOpen] = useState(false);

  const handleQuantityChange = (index, newQuantity) => {
    dispatch(updateQuantity({ index, newQuantity }));
  };
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
          className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2 py-1 relative"
          onClick={() => setshopOpen(!shopOpen)}
        >
          <FaCartShopping className="text-2xl relative"></FaCartShopping>
          {cartItems.length > 0 && (
            <span className="absolute h-6 w-6 bg-white border-white text-black rounded-full top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-sm font-bold">
              {cartItems.length}
            </span>
          )}
        </Link>
        {shopOpen && (
          <div className="absolute top-full right-0 bg-white border border-gray-300 p-4 flex flex-col  w-1/4   ">
            {cartItems.map((item, index) => (
              <div className="flex py-2 justify-between " key={index}>
                <div className="flex justify-start items-center">
                  <img
                    src={"http://localhost:8000/" + item.imagen}
                    className="w-8 h-8"
                    alt={item.nombre}
                  ></img>
                  <span className="mx-2">{item.nombre}</span>{" "}
                </div>
                <div className="">
                  <button>
                    <CgMathMinus></CgMathMinus>
                  </button>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                    className="w-12 text-center"
                  />
                  <button>
                    <CgMathPlus></CgMathPlus>
                  </button>
                </div>
              </div>
            ))}
            <button className="font-bold py-4 px-14 bg-[#ac1f8d] text-white rounded-md">
              COMPRAR
            </button>
          </div>
        )}
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
