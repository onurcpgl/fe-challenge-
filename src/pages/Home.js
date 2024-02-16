import React, { useEffect } from "react";
import { useQuery } from "react-query";
import generalService from "../services/GeneralService";
import Loading from "../components/Loading/Loading";
import ProductCard from "../components/ProductCard/ProductCard";
function Home() {
  const { data, isLoading, error } = useQuery(
    "users",
    generalService.getProducts
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="relative">
      <div className="container mx-auto my-10">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-semibold">Content title goes here</p>
          <div className="flex justify-between items-center gap-4 my-5">
            <p>0 Ürün</p>
            <button className="w-24 h-7 text-white text-sm bg-[#0059BC] rounded border-none outline-none flex justify-center items-center hover:bg-[#0059bced] cursor-pointer">
              Beğenilenler
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {data?.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
