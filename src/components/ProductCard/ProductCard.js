import React from "react";
import { useNavigate } from "react-router";

function ProductCard({ data }) {
  const navigate = useNavigate();
  const editPrice = (price) => {
    var newNumber = parseFloat(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return newNumber;
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 px-3 py-2">
      <div
        className="border-[0.5px] border-[#6b6d70] rounded p-3 hover:-translate-y-2 duration-150 delay-100 cursor-pointer"
        onClick={() => navigate(`/product/${data.name}`)}
      >
        <div className="px-2 flex-1">
          <img
            className="h-full w-full  rounded"
            src={data.imageUrl}
            alt="testimage"
          />
          <p className="my-2">{data.name}</p>
          <div className="w-full h-auto bg-cyan-700 text-white">
            <p className="px-2">{editPrice(data.price)} TL</p>
          </div>
          <p className="my-2 text-sm">Description</p>
          <p className="text-sm">{data.description}</p>
          <p className="my-2 text-xs text-gray-600">{data.shippingMethod}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
