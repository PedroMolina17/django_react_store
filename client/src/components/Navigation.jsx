import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navigation = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="flex  bg-[#ac1f8d] justify-between items-center p-8 px-32">
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
        className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2 py-1"
      >
        <FaCartShopping className="text-2xl"></FaCartShopping>
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </Link>
    </nav>
  );
};

export default Navigation;
