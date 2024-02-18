import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import generalService from "../services/GeneralService";
import Loading from "../components/Loading/Loading";
import ProductCard from "../components/ProductCard/ProductCard";
import HomeSlider from "../components/Home/HomeSlider";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function Home() {
  const [likedAnimation, setLikedAnimation] = useState(false);
  const [likedProductsModal, setLikedProductsModal] = useState(false);
  const [dataSlice, setDataSlice] = useState(4);
  const [likedDataSlice, setLikedDataSlice] = useState(4);
  const { data, isLoading, error } = useQuery(
    "users",
    generalService.getProducts
  );
  const likedProducts = useSelector((state) => state.liked.value);

  useEffect(() => {
    setLikedAnimation(true);
    setTimeout(() => {
      setLikedAnimation(false);
    }, 400);
  }, [likedProducts]);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        className="mobil-product-list bg-black"
        style={{
          position: "absolute",

          bottom: "-3rem",
          right: "0px",
          height: "3rem",
        }}
      >
        <ul
          className="flex justify-center items-center w-full h-full mobil-product-dots"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className="relative">
      <HomeSlider />
      <div className="container mx-auto my-10">
        <div className="flex justify-between items-center max-lg:px-3">
          <p className="text-3xl font-semibold max-lg:text-2xl max-lg:font-medium max-sm::text-base max-[420px]:text-base max-[420px]:w-2/4">
            {likedProductsModal ? `Beğenilen Ürünler` : `Tüm Ürünler`}
          </p>
          <div className="flex justify-between items-center gap-4 my-5">
            <div className="flex justify-center items-center gap-2">
              <FaRegHeart
                className={
                  likedAnimation === true
                    ? `text-red-500 -translate-y-1 duration-150 delay-150`
                    : ``
                }
              />
              <p className="text-base font-semibold">
                {likedProducts.length} Ürün
              </p>
            </div>
            <button
              onClick={() => setLikedProductsModal(!likedProductsModal)}
              className="w-24 h-7 font-medium  text-white text-sm bg-[#0059BC] rounded border-none outline-none flex justify-center items-center hover:bg-[#0059bced] cursor-pointer"
            >
              Beğenilenler
            </button>
          </div>
        </div>

        {likedProductsModal ? (
          <>
            <div className="flex flex-wrap max-[550px]:hidden">
              {likedProducts.length > 0 ? (
                likedProducts
                  ?.slice(0, likedDataSlice)
                  .map((item, i) => <ProductCard key={i} data={item} />)
              ) : (
                <p>Beğenilen herhangi bir ürün yok!</p>
              )}
            </div>
            <div className="hidden max-[550px]:block">
              <Slider {...settings}>
                {likedProducts?.map((item, i) => (
                  <ProductCard key={i} data={item} />
                ))}
              </Slider>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap max-[550px]:hidden">
              {data?.slice(0, dataSlice).map((item, i) => (
                <ProductCard key={i} data={item} />
              ))}
            </div>
            <div className="hidden max-[550px]:block">
              <Slider {...settings}>
                {data?.map((item, i) => (
                  <ProductCard key={i} data={item} />
                ))}
              </Slider>
            </div>
          </>
        )}

        {likedProductsModal
          ? likedProducts.length > 4 && (
              <div
                className={`w-full h-full flex justify-center items-center my-5 max-[550px]:hidden ${
                  likedProducts.length < likedDataSlice ? "hidden" : ""
                }`}
              >
                <button
                  className="w-48 h-14 text-xl font-normal bg-[#0059BC] rounded text-white flex justify-center gap-2 items-center px-4"
                  onClick={() => setLikedDataSlice(likedDataSlice + 4)}
                >
                  <p>Daha fazla</p> <FaArrowRightLong />
                </button>
              </div>
            )
          : data.length > 4 && (
              <div
                className={`w-full h-full flex justify-center items-center my-5 max-[550px]:hidden ${
                  data.length < dataSlice ? "hidden" : ""
                }`}
              >
                <button
                  className="w-48 h-14 text-xl font-normal bg-[#0059BC] rounded text-white flex justify-center gap-2 items-center px-4"
                  onClick={() => setDataSlice(dataSlice + 4)}
                >
                  <p>Daha fazla</p> <FaArrowRightLong />
                </button>
              </div>
            )}
      </div>
    </div>
  );
}

export default Home;
