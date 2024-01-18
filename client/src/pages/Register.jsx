const Register = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      {" "}
      <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal  font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-bl from-[#ac1f8d]  to-[#ac1f8d]">
          Register{" "}
        </span>
        <br></br>
      </h1>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Correo
          <input
            type="text"
            className="border-2 border-gray-600 rounded-md flex w-96 p-2  my-4"
            placeholder="example@gmail.com "
          ></input>
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Contraseña
          <input
            type="password"
            className="border-2 border-gray-600 rounded-md flex w-96 p-2  my-4"
            placeholder="**************"
          ></input>
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl text-center font-bold">
          Confirma Contraseña
          <input
            type="password"
            className="border-2 border-gray-600 rounded-md flex w-96 p-2  my-4"
            placeholder="**************"
          ></input>
        </label>
      </div>
      <button className="px-6 py-4 bg-[#ac1f8d] text-white rounded-md w-96 my-4">
        Crear Usuario
      </button>
    </section>
  );
};

export default Register;
