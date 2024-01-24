import axios from "axios";

export const handleAgregarAlCarrito = async (productId, cantidad, userid) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/store/api/v1/carrito/",
      {
        producto: productId,
        cantidad: cantidad,
        usuario: userid,
      }
    );

    console.log(response.data); // Puedes manejar la respuesta según tus necesidades
  } catch (error) {
    console.error("Error al agregar al carrito", error);
  }
};
