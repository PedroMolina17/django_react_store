import axios from "axios";
export const getAllStore = () => {
  return axios.get("http://localhost:8000/store/api/v1/games/");
};
