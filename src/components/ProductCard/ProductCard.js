import React from "react";

function ProductCard({ data }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 px-3 py-2">
      <div className="border-[0.5px] border-[#6b6d70] rounded p-3">
        <div className="px-2 flex-1">
          <img
            className="h-full w-full  rounded"
            src={data.imageUrl}
            alt="testimage"
          />
          <p className="my-2">{data.name}</p>
          <div className="w-full h-auto bg-cyan-700 text-white">
            <p className="px-2">{data.price}</p>
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
