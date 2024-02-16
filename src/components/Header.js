import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
function Header() {
  const [selectedCategories, setSeletedCategories] = useState("Categories");
  const [selectNavItem, setSelectNavItem] = useState(0);
  const [categoriesModel, setCategoriesModal] = useState(false);
  const menuItem = [
    {
      id: 1,
      title: "Menu Item",
      img: "https://picsum.photos/id/237/1400/400",
    },
    {
      id: 2,
      title: "Menu Item",
      img: "https://picsum.photos/id/217/1400/400",
    },
    {
      id: 3,
      title: "Menu Item",
      img: "https://picsum.photos/id/227/1400/400",
    },
    {
      id: 4,
      title: "Menu Item",
      img: "https://picsum.photos/id/247/1400/400",
    },
    {
      id: 5,
      title: "Menu Item",
      img: "https://picsum.photos/id/257/1400/400",
    },
    {
      id: 6,
      title: "Menu Item",
      img: "https://picsum.photos/id/239/1400/400",
    },
    {
      id: 7,
      title: "Menu Item",
      img: "https://picsum.photos/id/277/1400/400",
    },
    {
      id: 8,
      title: "Menu Item",
      img: "https://picsum.photos/id/287/1400/400",
    },
    {
      id: 9,
      title: "Menu Item",
      img: "https://picsum.photos/id/211/1400/400",
    },
    {
      id: 10,
      title: "Menu Item",
      img: "https://picsum.photos/id/233/1400/400",
    },
    {
      id: 11,
      title: "Menu Item",
      img: "https://picsum.photos/id/232/1400/400",
    },
    {
      id: 12,
      title: "Menu Item",
      img: "https://picsum.photos/id/231/1400/400",
    },
  ];
  return (
    <nav className="relative top-0 h-36 flex items-center flex-col">
      <div className="container mx-auto flex justify-start items-center gap-3 h-2/4">
        <a href="/">
          <img src="" alt="Logo" />
        </a>
        <div className="relative w-2/4 h-10">
          <input
            className="w-full h-full border-[1px] rounded  px-5 border-[#89919A] outline-none"
            placeholder="Search..."
          />

          <button
            onClick={() => setCategoriesModal(!categoriesModel)}
            className="absolute flex justify-between items-center top-0 right-0 h-full w-1/4 px-2 bg-[#F4F5F6] border-[#89919A]  border-t-[1px] border-r-[1px] border-b-[1px] rounded-tr rounded-br"
          >
            <p>{!categoriesModel === true ? selectedCategories : ""}</p>

            <MdKeyboardArrowDown
              className={`transform transition-transform duration-300 text-2xl ${
                categoriesModel ? "rotate-180" : ""
              }`}
            />
            {categoriesModel && (
              <div className="absolute w-full right-0 top-10 bg-[#00254F] py-4 px-2 text-white text-start rounded text-sm z-50">
                <p
                  className="py-2 px-2 hover:bg-[#0059BC]"
                  onClick={() => setSeletedCategories("Data")}
                >
                  Data
                </p>
                <p
                  className="py-2 px-2 hover:bg-[#0059BC]"
                  onClick={() => setSeletedCategories("Category Name")}
                >
                  Category Name
                </p>
                <p
                  className="py-2 px-2 hover:bg-[#0059BC]"
                  onClick={() => setSeletedCategories("Category Name")}
                >
                  Category Name
                </p>
                <p
                  className="py-2 px-2 hover:bg-[#0059BC]"
                  onClick={() => setSeletedCategories("Category Name")}
                >
                  Category Name
                </p>
              </div>
            )}
          </button>
        </div>

        <button className="w-28 h-10 bg-[#0059BC] rounded border-none outline-none flex justify-center items-center hover:bg-[#0059bced] cursor-pointer">
          <IoSearch className="text-2xl text-white" />
        </button>
      </div>
      <div
        className="w-full border-t-2 h-2/4 flex justify-center"
        onMouseLeave={() => setSelectNavItem(0)}
      >
        <div className="container mx-auto flex justify-between items-center relative ">
          {menuItem?.map((item, i) => (
            <>
              <p
                className={`cursor-pointer hover:border-b-2 border-[#0059BC] h-full flex items-center font-medium ${
                  selectNavItem === item.id
                    ? " text-[#32363A]"
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
                    <ul className="flex flex-col justify-start items-start">
                      <li className="py-2 font-medium text-lg cursor-pointer">
                        Header
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                    </ul>
                    <ul className="flex flex-col justify-start items-start">
                      <li className="py-2 font-medium text-lg cursor-pointer">
                        Header
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                      <li className="py-1 font-normal text-md cursor-pointer">
                        Subheader
                      </li>
                    </ul>
                  </div>
                  <div className="w-3/4 h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt="item.title"
                    />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
