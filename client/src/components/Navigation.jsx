import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";
import {
  updateQuantity,
  removeItemFromCart,
} from "../features/product/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { FaUser, FaTrash } from "react-icons/fa";
import { handleLogin, handleLogout } from "../api/register.api";
import { Toaster, ToastBar } from "react-hot-toast";
import { handleAgregarAlCarrito } from "../api/addcart.api";
import { IoLogOut } from "react-icons/io5";

const Navigation = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [shopOpen, setshopOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSingIn] = useState(false);
  const handleQuantityChange = (id, newQuantity) => {
    const quantity =
      newQuantity === "" || isNaN(newQuantity) ? 0 : parseInt(newQuantity, 10);
    if (quantity > 0) {
      dispatch(updateQuantity({ id, newQuantity: quantity }));
    } else {
      dispatch(removeItemFromCart(id));
    }
  };
  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const handleLoginUser = async () => {
    try {
      const userData = await handleLogin(username, password);
      setUsername(userData.username || "");
      setSingIn(true);
      //Agregar al carrito -dispatch(handleAgregarAlCarrito(5, 5, 1));
    } catch (error) {
      // Manejar errores específicos del inicio de sesión si es necesario
    }
  };

  const handleLogoutUser = async () => {
    try {
      await handleLogout();
      setSingIn(false);
    } catch (error) {
      // Maneja el error, si es necesario
      console.error("Error en el logout:", error);
    }
  };
  return (
    <div className="">
      <nav className="flex fixed z-10 bg-[#6d57e2] justify-between items-center p-5 px-4 lg:px-20  max-md:hidden top-0 right-0 left-0 ">
        <div className="text-[#fff4fe] text-2xl">STORE</div>
        <ul className="">
          <li className="flex text-xl ">
            <Link
              to="/store-create/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-7 py-1"
            >
              Juegos
            </Link>
            <Link
              to="/store/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-7 py-1"
            >
              Productos
            </Link>
            <Link
              to="/games/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-7 py-1"
            >
              Juegos
            </Link>{" "}
            <Link
              to="/productos/"
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-7 py-1"
            >
              Productos
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          {/* Shop Open*/}
          <Link
            className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2 py-1 relative"
            onClick={() => {
              setshopOpen(!shopOpen);
              setLogin(false);
            }}
          >
            <div className="flex flex-col justify-center items-center">
              {" "}
              <FaCartShopping className=" text-2xl relative"></FaCartShopping>
              <span className="text-xs">Carrito</span>
            </div>

            {cartItems.length > 0 && (
              <span className="absolute h-6 w-6 bg-white border-white text-black rounded-full top-0 left-full transform -translate-x-1/2 -translate-y-1/2  text-center text-sm font-bold opacity-80">
                {cartItems.length}
              </span>
            )}
          </Link>
          {/* Login*/}
          {signin ? (
            <Link
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2
                py-1 relative"
              onClick={() => {
                setshopOpen(false);
                handleLogoutUser();
              }}
            >
              <div className="flex flex-col justify-center items-center">
                <IoLogOut className=" text-2xl relative"></IoLogOut>
                <span className="text-xs">{username}</span>
              </div>
            </Link>
          ) : (
            <Link
              className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2
              py-1 relative"
              onClick={() => {
                setLogin(!login);
                setshopOpen(false);
              }}
            >
              <FaUser className="text-2xl relative "></FaUser>
            </Link>
          )}
        </div>
        {/* Login Div*/}
        {login && (
          <div className="absolute top-full right-0 bg-white border border-gray-300 p-4 flex flex-col font-bold  text-center w-1/3 lg:w-1/4   ">
            <label>
              {" "}
              <p> Usuario:</p>
              <input
                type="text"
                placeholder="example@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border w-full border-black p-1 my-2 mx-auto text-center rounded-md"
              ></input>
            </label>
            <label>
              {" "}
              <p> Contraseña:</p>
              <input
                type="password"
                placeholder="****************"
                className="border w-full border-black p-1 my-2 mx-auto text-center rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <button
              className="font-bold py-4 px-14 bg-[#6d57e2] text-white rounded-md my-1"
              onClick={() => {
                setLogin(!login);
                handleLoginUser();
              }}
            >
              Ingresar
            </button>{" "}
            <Link
              to="/register/"
              className="text-[#2e282e] underline  hover:text-gray-300 px-9 py-1"
              onClick={() => setLogin(false)}
            >
              Registrar
            </Link>
          </div>
        )}
        {/* Shop Div*/}
        {shopOpen && (
          <div className="absolute top-full right-0 bg-white border border-gray-300 p-1 flex flex-col w-1/3 lg:w-1/4  animate-fade-down max-md:hidden ">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-4 text-xl">
                El carrito está vacío.
              </p>
            ) : (
              cartItems.map((item, index) => (
                <div className="flex py-2 justify-between " key={index}>
                  <div className="flex justify-start items-center">
                    <img
                      src={"http://localhost:8000/" + item.imagen}
                      className="w-8 h-8"
                      alt={item.nombre}
                    ></img>
                    <div className="flex flex-col mx-3">
                      <div>
                        <p className="font-bold">{item.nombre}</p>
                      </div>
                      <div>
                        <p className="text-xs">{item.precio}</p>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-center items-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.cantidad - 1)
                      }
                    >
                      <CgMathMinus></CgMathMinus>
                    </button>
                    <input
                      type="text"
                      disabled
                      value={item.cantidad}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-12 text-center border"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.cantidad + 1)
                      }
                    >
                      <CgMathPlus></CgMathPlus>
                    </button>
                    <button
                      className="mx-2 text-red-400"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </div>
                </div>
              ))
            )}
            <button className="font-bold py-3 px-14 bg-[#6d57e2] text-white rounded-md my-1">
              COMPRAR S/{totalPrice}
            </button>
          </div>
        )}
      </nav>
      {/*Mobile Menu */}
      <div className=" fixed  left-0  top-0 right-0 flex justify-between bg-[#6d57e2] p-3  md:hidden">
        <div className="mobile-menu block md:hidden bg-[#6d57e2] ">
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
        <span></span>
        {navbarOpen ? (
          <ul className="flex flex-col py-1 items-center justify-center text-center">
            <li>
              <Link
                to={"/productos"}
                className="block py-1  text-slate-300 sm:text-xl rounded md:p-0 hover:text-white"
                onClick={() => setNavbarOpen(false)}
              >
                Productos
              </Link>
              <Link
                to="/games/"
                className="block py-1  text-slate-300  sm:text-xl rounded md:p-0 hover:text-white"
                onClick={() => setNavbarOpen(false)}
              >
                Juegos
              </Link>
            </li>
          </ul>
        ) : null}
        {/* Div account and Shop*/}
        <div className="flex">
          <Link
            className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2
            py-1 relative"
            onClick={() => {
              setLogin(!login);
              setshopOpen(false);
            }}
          >
            <FaUser className="text-2xl relative "></FaUser>
          </Link>
          {/* Shop */}
          <Link
            className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2 py-1 relative mx-2"
            onClick={() => {
              setshopOpen(!shopOpen);
              setLogin(false);
            }}
          >
            <FaCartShopping className=" text-2xl relative"></FaCartShopping>
            {cartItems.length > 0 && (
              <span className="absolute h-6 w-6 bg-white border-white text-black rounded-full top-1 left-full  transform -translate-x-1/2 -translate-y-1/2  text-center text-sm font-bold opacity-70">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>{" "}
      {login && (
        <div className="fixed bottom-0  left-0 right-0 bg-white border border-gray-300 p-4 flex flex-col font-bold  text-center items-center w-full md:hidden  ">
          <FaUser className="text-4xl"></FaUser>
          <label>
            {" "}
            <p> Usuario:</p>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-black p-1 my-2"
            ></input>
          </label>
          <label>
            {" "}
            <p> Contraseña:</p>
            <input
              type="password"
              placeholder="****************"
              className="border border-black p-1 my-2"
            ></input>
          </label>
          <button className="font-bold py-4 px-14 bg-[#6d57e2] text-white rounded-md my-1">
            Ingresar
          </button>
          <Link
            to="/register/"
            className="text-[#2e282e] underline  hover:text-gray-300 px-9 py-1"
            onClick={() => setLogin(false)}
          >
            Registrar
          </Link>
        </div>
      )}
      {/*Div Add Shop Mobile */}
      {shopOpen && (
        <div className="fixed bottom-0 bg-white border border-gray-300 p-4 flex flex-col w-full animate-fade-down md:hidden  ">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4 text-xl">
              El carrito está vacío.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div className="flex py-2 justify-between " key={index}>
                <div className="flex justify-start items-center">
                  <img
                    src={"http://localhost:8000/" + item.imagen}
                    className="w-8 h-8"
                    alt={item.nombre}
                  ></img>
                  <div className="flex flex-col mx-3">
                    <div>
                      <p className="text-sm font-bold">{item.nombre}</p>
                    </div>
                    <div>
                      <p className="text-xs">{item.precio}</p>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-center items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.cantidad - 1)
                    }
                  >
                    <CgMathMinus></CgMathMinus>
                  </button>
                  <input
                    type="text"
                    disabled
                    value={item.cantidad}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="w-12 text-center border"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.cantidad + 1)
                    }
                  >
                    <CgMathPlus></CgMathPlus>
                  </button>
                  <button
                    className="mx-2 text-red-400"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash></FaTrash>
                  </button>
                </div>
              </div>
            ))
          )}
          <button className="font-bold py-3 px-14 bg-[#6d57e2] text-white rounded-md my-1">
            COMPRAR S/{totalPrice}
          </button>
        </div>
      )}{" "}
      <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? "custom-enter 1s ease"
                : "custom-exit 1s ease",
            }}
          />
        )}
      </Toaster>
    </div>
  );
};
export default Navigation;
