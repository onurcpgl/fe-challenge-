import LoadingSvg from "../../assets/Loading/Loading.svg";
function Loading() {
  return (
    <div className="absolute top-0 left-0 z-[9999999999] w-full h-full flex justify-center items-center bg-white opacity-90">
      <img src={LoadingSvg} alt="Loading" />
    </div>
  );
}

export default Loading;
