import axios from "axios";

const handleRegister = async (email, password) => {
  const userData = {
    username: email,
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(
      "http://localhost:8000/store/api/register/",
      userData
    );

    console.log(response.data.message);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
};
export default handleRegister;
