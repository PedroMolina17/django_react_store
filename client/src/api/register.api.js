import axios from "axios";
import { toast } from "react-hot-toast";

const handleRegister = async (username, email, password) => {
  const userData = {
    username: username,
    email: email,
    password: password,
  };

  try {
    await axios.post("http://localhost:8000/store/api/register/", userData);
    toast.success("Usuario Creado");
  } catch (error) {
    toast.error("Error al Crear usuario");
  }
};
export const handleLogin = async (username, password) => {
  const loginData = {
    username: username,
    password: password,
  };

  try {
    const response = await axios.post(
      "http://localhost:8000/store/api/login/",
      loginData,
      console.log(loginData)
    );
    toast.success("Inicio de sesión exitoso");
    return response.data; // Puedes devolver datos adicionales si es necesario
  } catch (error) {
    toast.error("Error al iniciar sesión");
    console.error("Error en el inicio de sesión:", error);
    throw error; // Puedes manejar este error según tus necesidades
  }
};
export const handleLogout = async () => {
  try {
    await axios.post("http://localhost:8000/store/api/logout/");
    toast.success("Cierre de sesión exitoso");
  } catch (error) {
    toast.error("Error al cerrar sesión");
    console.error("Error en el cierre de sesión:", error);
    throw error;
  }
};

export default handleRegister;
