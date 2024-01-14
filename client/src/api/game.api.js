import axios from "axios";

export const getAllStoreByCategoria = () => {
  return axios.get(
    "http://localhost:8000/store/api/v1/store/get_by_categoria/?categoria_id=1"
  );
};
