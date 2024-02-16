import axiosInstance from "../utils/AxiosClient";

const getProducts = async () => {
  const { data } = await axiosInstance.get("products");
  return data;
};

const exportFunction = {
  getProducts,
};

export default exportFunction;
