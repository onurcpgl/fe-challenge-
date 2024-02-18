import { useNavigate } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addLikedProduct } from "../../redux/features/liked/likedSlice";
import { useState } from "react";
import { useEffect } from "react";
function ProductCard({ data }) {
  const [likedStatus, setLikedStatus] = useState(false);
  const navigate = useNavigate();
  const editPrice = (price) => {
    var newNumber = parseFloat(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return newNumber;
  };
  const likedProducts = useSelector((state) => state.liked.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const status = likedProducts.filter((x) => x.id === data.id);
    if (status.length > 0) setLikedStatus(true);
    else {
      setLikedStatus(false);
    }
  }, [likedProducts]);

  const handleHeartClick = (event) => {
    event.stopPropagation();
    dispatch(addLikedProduct(data));
  };

  return (
    <div className="w-1/4 max-lg:w-2/4 max-[550px]:w-full px-3 py-2">
      <div
        className="border-[0.5px] border-[#6b6d70] rounded p-3 max-lg:p-1 cursor-pointer"
        onClick={() => navigate(`/product/${data.name}`)}
      >
        <div className="px-2 max-lg:px-1 flex-1">
          <div className="w-full h-full relative">
            <img
              className="h-full w-full rounded select-none"
              src={data.imageUrl}
              alt="testimage"
            />
            <div className="bg-white rounded-full absolute top-4 right-2 w-8 h-8 flex justify-center items-center z-50">
              <FaRegHeart
                className={`text-[#0000009c] font-extrabold text-xl hover:text-red-800 duration-150 delay-150 ${
                  likedStatus === true ? "text-red-500" : ""
                }`}
                onClick={handleHeartClick}
              />
            </div>
          </div>

          <p className="my-2 px-2 text-[#00254F] text-base font-semibold">
            {data.name}
          </p>
          <div className="w-full h-auto bg-[#E6EEF8] text-white">
            <p className="px-2 text-[#00254F] text-sm font-semibold">
              {editPrice(data.price)} TL
            </p>
          </div>
          <p className="my-2 text-sm px-2 text-[#00254F] font-semibold">
            Description
          </p>
          <p
            className="text-xs font-normal px-2 text-[#00254F] "
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {data.description}
          </p>

          <p className="my-2 px-2 text-xs text-gray-600">
            {data.shippingMethod}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
