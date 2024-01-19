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
export default handleRegister;
