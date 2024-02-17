import { useEffect, useState } from "react";
import DarkLogo from "../assets/header_logo_dark.svg";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import generalService from "../services/GeneralService";
import { useQuery } from "react-query";
import debounce from "lodash/debounce";
import CategoryModal from "../components/Header/CategoryModal";
function Header() {
  const [mobilCategoryModal, setMobilCategoryModal] = useState(false);
  const [selectedCategories, setSeletedCategories] = useState("Categories");
  const [selectNavItem, setSelectNavItem] = useState(0);
  const [categoriesModel, setCategoriesModal] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showNavbarItemValue, setShowNavbarItemValue] = useState(20);
  const [moreNavbarItem, setMoreNavbarItem] = useState(false);
  const { data, isLoading, error } = useQuery(
    "menuItem",
    generalService.getNavbarItem
  );

  const {
    data: categoriesData,
    isLoading: categoriesIsLoading,
    error: categoriesError,
  } = useQuery("categories", generalService.getCategories);
  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 200);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth <= 1280) {
      setShowNavbarItemValue(6);
    } else {
      setShowNavbarItemValue(20);
    }
  }, [screenWidth]);
  return (
    <>
      {mobilCategoryModal && categoriesData.length > 0 && (
        <CategoryModal
          setMobilCategoryModal={setMobilCategoryModal}
          categoriesData={categoriesData}
          setSeletedCategories={setSeletedCategories}
        />
      )}
      <nav className="relative top-0 h-36 flex items-center flex-col max-sm:h-auto">
        <div className="container mx-auto flex justify-start items-center gap-3 h-2/4 max-xl:px-5 max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:py-5">
          <div className="max-sm:w-full max-sm:flex max-sm:justify-between max-sm:items-center">
            <a href="/">
              <img src={DarkLogo} alt="Logo" />
            </a>
            <MdMenu
              onClick={() => setMobilCategoryModal(!mobilCategoryModal)}
              className="hidden max-sm:flex text-3xl"
            />
          </div>

          <div className="flex w-2/4 h-10 max-xl:w-full gap-2 max-[480px]:gap-0">
            <div className="relative w-full">
              <input
                className="w-full h-full border-[1px] rounded  px-5 border-[#89919A] outline-none max-[480px]:rounded-l max-[480px]:rounded-none"
                placeholder="Search..."
              />

              <button
                onClick={() => setCategoriesModal(!categoriesModel)}
                className="absolute flex justify-between items-center top-0 right-0 h-full w-1/4 max-lg:w-[40%] px-2 bg-[#F4F5F6] border-[#89919A]  border-t-[1px] border-r-[1px] border-b-[1px] rounded-tr rounded-br max-[480px]:hidden"
              >
                <p>{!categoriesModel === true ? selectedCategories : ""}</p>

                <MdKeyboardArrowDown
                  className={`transform transition-transform duration-300 text-2xl ${
                    categoriesModel ? "rotate-180" : ""
                  }`}
                />
                {categoriesModel && (
                  <div className="absolute w-full right-0 top-10 bg-[#00254F] py-4 px-2 text-white text-start rounded text-sm z-50">
                    {categoriesData?.map((item, i) => (
                      <p
                        key={i}
                        className="py-2 px-2 hover:bg-[#0059BC]"
                        onClick={() => setSeletedCategories(item.title)}
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                )}
              </button>
            </div>

            <button className="w-28 h-10 bg-[#0059BC] rounded border-none outline-none max-[480px]:rounded-r max-[480px]:rounded-none flex justify-center items-center hover:bg-[#0059bced] cursor-pointer">
              <IoSearch className="text-2xl text-white" />
            </button>
          </div>
        </div>
        <div
          className="w-full border-t-2 h-2/4 flex justify-center max-sm:hidden"
          onMouseLeave={() => setSelectNavItem(0)}
        >
          <div className="container mx-auto flex justify-between items-center relative max-xl:justify-evenly">
            {data?.slice(0, showNavbarItemValue - 1).map((item, i) => (
              <div className="h-full" key={i}>
                <p
                  className={`cursor-pointer h-full w-full flex items-center font-medium ${
                    selectNavItem === item.id
                      ? " text-[#32363A] border-b-2 border-[#0059BC]"
                      : "text-[#6A6D70]"
                  } `}
                  onMouseEnter={() => setSelectNavItem(item.id)}
                  key={i}
                >
                  {item.title}
                </p>
                {selectNavItem === item.id && (
                  <div
                    className="absolute top-[4.4rem] w-full left-0 h-96 bg-[#F4F5F6] z-50 flex justify-between items-start px-16 py-8"
                    onMouseLeave={() => setSelectNavItem(0)}
                  >
                    <div className="w-1/4 h-full flex justify-start items-start gap-16">
                      {item.value?.map((navItem, i) => (
                        <ul
                          key={i}
                          className="flex flex-col justify-start items-start"
                        >
                          <li className="py-2 font-medium text-lg cursor-pointer text-with-underline">
                            {navItem.title}
                          </li>
                          {navItem.childItem.length > 0 &&
                            navItem.childItem.map((child, i) => (
                              <li
                                key={i}
                                className="py-1 font-normal text-md cursor-pointer text-with-underline"
                              >
                                {child}
                              </li>
                            ))}
                        </ul>
                      ))}
                    </div>
                    <div className="w-3/4 h-full max-xl:w-2/4">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt="item.title"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div
              className={`flex justify-between items-center relative ${
                showNavbarItemValue === 6 ? "block" : "hidden"
              }`}
              onClick={() => setMoreNavbarItem(!moreNavbarItem)}
            >
              <p
                className={`cursor-pointer h-full flex items-center font-medium`}
              >
                More
              </p>
              <MdKeyboardArrowDown
                className={`transform transition-transform duration-300 text-2xl ${
                  moreNavbarItem ? "rotate-180" : ""
                }`}
              />
              {moreNavbarItem && (
                <div className="absolute top-10 -right-8 z-50 w-32 bg-[#F4F5F6]">
                  {data?.slice(showNavbarItemValue - 1).map((item, i) => (
                    <p className="cursor-pointer h-full flex justify-center items-center font-medium text-[#6A6D70] p-2 text-with-underline">
                      {item.title}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
