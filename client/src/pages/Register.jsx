import { FaUserAlt } from "react-icons/fa";
import handleRegister from "../api/register.api";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (data.password === data.confirmPassword) {
      handleRegister(data.username, data.email, data.password);
      console.log(data);
    } else {
      toast.error("Contraseña no coinciden");
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-center items-center flex-col">
        <FaUserAlt className="text-8xl my-8"></FaUserAlt>
        <div className="flex w-full items-center justify-center">
          <label className="text-xl text-center font-bold m-2">
            Username
            <input
              required
              type="text"
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-2"
              placeholder="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
                minLength: {
                  value: 3,
                  message: "Nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Nombre debe tener menos de 20 caracteres",
                },
              })}
            />
            {errors.username && (
              <span className="text-red-500 text-xs block">
                {errors.username.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex w-full items-center justify-center">
          <label className="text-xl text-center font-bold m-2">
            Correo
            <input
              required
              type="email"
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2 m-2"
              placeholder="example@gmail.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email es requerido",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Correo no valido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs block">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex w-full items-center justify-center ">
          <label className="text-xl text-center font-bold m-2">
            Contraseña
            <input
              required
              type="password"
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2  m-2"
              placeholder="**************"
              {...register("password")}
            />
          </label>
        </div>
        <div className="flex w-full items-center justify-center ">
          <label className="text-xl text-center font-bold m-2">
            Confirma Contraseña
            <input
              required
              type="password"
              className="border-2 border-gray-500 rounded-md flex w-80 md:w-96 p-2 m-2"
              placeholder="**************"
              {...register("confirmPassword")}
            />
          </label>
        </div>
        <button
          className="py-4 bg-[#6d57e2] text-white rounded-md w-80 md:w-96 m-4"
          type="submit"
        >
          Crear Usuario
        </button>
        <p className="flex flex-wrap mx-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam uod
          earum sit unde dolore, expedita quo obcaecati amet?
        </p>
      </div>
    </form>
  );
};

export default Register;
