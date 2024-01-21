export const handleLogin = async (username, password) => {
  const loginData = {
    username: username,
    password: password,
  };

  try {
    // Realizar el inicio de sesión
    const response = await axios.post(
      "http://localhost:8000/user/login/",
      loginData
    );

    // Puedes almacenar el token de sesión u otra información relevante aquí

    toast.success("Inicio de sesión exitoso");
    return response.data; // Puedes devolver datos adicionales si es necesario
  } catch (error) {
    toast.error("Error al iniciar sesión");
    console.error("Error en el inicio de sesión:", error);
    throw error; // Puedes manejar este error según tus necesidades
  }
};
