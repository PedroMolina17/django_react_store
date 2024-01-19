import axios from "axios";
export const checkEmailExists = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/store/api/check_email/",
      { email: email }
    );
    return response.data.exists;
  } catch (error) {
    throw new Error("Error al verificar la existencia del correo");
  }
};
