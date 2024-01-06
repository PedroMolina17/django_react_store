import { Link } from "react-router-dom";

const Navigation = () => {
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
            to="/store/"
            className="text-[#fff4fe] hover:underline hover:text-gray-300 px-9 py-1"
          >
            Store
          </Link>{" "}
          <Link
            to="/store/"
            className="text-[#fff4fe] hover:underline hover:text-gray-300 px-9 py-1"
          >
            Store
          </Link>
        </li>
      </ul>{" "}
      <Link
        to="/"
        className="text-[#fff4fe] hover:underline hover:text-gray-300 px-2 py-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </Link>
    </nav>
  );
};

export default Navigation;
