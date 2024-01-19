import { FaUserAlt } from "react-icons/fa";
import handleRegister from "../api/register.api";
import { useState } from "react";
import { Toaster, toast, ToastBar } from "react-hot-toast";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleCreateUser = () => {
    if (password === confirmPassword) {
      handleRegister(email, password, confirmPassword);
    } else {
      toast.error("Contraseña no coinciden");
    }
  };

  return (
    <form onSubmit={handleCreateUser} method="POST">
      <div className="flex justify-center items-center flex-col">
        <FaUserAlt className="text-8xl my-8"></FaUserAlt>
        <div className="flex w-full items-center justify-center">
          <label className="text-xl text-center font-bold">
            Username
            <input
              required
              value={username}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-4"
              placeholder="example@gmail.com"
            />
          </label>
        </div>
        <div className="flex w-full items-center justify-center">
          <label className="text-xl text-center font-bold">
            Correo
            <input
              required
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-4"
              placeholder="example@gmail.com"
            />
          </label>
        </div>
        <div className="flex w-full items-center justify-center">
          <label className="text-xl text-center font-bold">
            Contraseña
            <input
              required
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-4"
              placeholder="**************"
            />
          </label>
        </div>
        <div className="flex w-full items-center justify-center">
          <label className="text-xl text-center font-bold">
            Confirma Contraseña
            <input
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2 m-4"
              placeholder="**************"
            />
          </label>
        </div>
        <button
          className="py-4 bg-[#6d57e2] text-white rounded-md w-80 md:w-96 m-4"
          onClick={handleCreateUser}
        >
          Crear Usuario
        </button>
        <p className="flex flex-wrap mx-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam uod
          earum sit unde dolore, expedita quo obcaecati amet?
        </p>{" "}
        <div>
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
          ;
        </div>
      </div>{" "}
    </form>
  );
};

export default Register;
