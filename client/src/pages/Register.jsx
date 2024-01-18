import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  return (
    <section className="flex justify-center items-center flex-col ">
      {" "}
      <FaUserAlt className="text-8xl my-8"></FaUserAlt>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Correo
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md flex w-96 p-2  my-4"
            placeholder="example@gmail.com "
          ></input>
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Contraseña
          <input
            type="password"
            className="border-2 border-gray-500 rounded-md flex w-96 p-2  my-4"
            placeholder="**************"
          ></input>
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Confirma Contraseña
          <input
            type="password"
            className="border-2 border-gray-500 rounded-md flex w-96 p-2  my-4"
            placeholder="**************"
          ></input>
        </label>
      </div>
      <button className="px-6 py-4 bg-[#6d57e2] text-white rounded-md w-96 my-4">
        Crear Usuario
      </button>
    </section>
  );
};

export default Register;
