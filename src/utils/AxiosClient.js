import axios from "axios";
const AxiosClient = axios.create({
  baseURL: `https://honey-badgers-ecommerce.glitch.me/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
