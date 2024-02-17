import axiosInstance from "../utils/AxiosClient";
import menuItem from "../data/NavbarItemData";
import categories from "../data/SearchCategories";

const getProducts = async () => {
  const { data } = await axiosInstance.get("products");
  return data;
};
const getNavbarItem = () => {
  return menuItem;
};
const getCategories = () => {
  return categories;
};
const exportFunction = {
  getProducts,
  getNavbarItem,
  getCategories,
};

export default exportFunction;
