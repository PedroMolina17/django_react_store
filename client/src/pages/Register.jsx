import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      {" "}
      <FaUserAlt className="text-8xl my-8"></FaUserAlt>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Correo
          <input
            type="email"
            className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-4"
            placeholder="example@gmail.com "
          ></input>
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Contraseña
          <input
            type="password"
            className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-4"
            placeholder="**************"
          ></input>
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Confirma Contraseña
          <input
            type="password"
            className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2 m-4"
            placeholder="**************"
          ></input>
        </label>
      </div>
      <button className=" py-4 bg-[#6d57e2] text-white rounded-md w-80 md:w-96 m-4">
        Crear Usuario
      </button>
      <p className="flex flex-wrap">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam uod
        earum sit unde dolore, expedita quo obcaecati amet?
      </p>
    </div>
  );
};

export default Register;
