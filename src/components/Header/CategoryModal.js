import React from "react";

function CategoryModal({
  setMobilCategoryModal,
  categoriesData,
  setSeletedCategories,
}) {
  const setCategoryHandler = (value) => {
    setSeletedCategories(value);
    setMobilCategoryModal(false);
  };
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-white z-[999999999]">
      <button
        className="absolute top-2 right-2"
        onClick={() => setMobilCategoryModal(false)}
      >
        X
      </button>
      <div className="my-10 border-b-2 px-4">
        {categoriesData.map((item, i) => (
          <p
            key={i}
            onClick={() => setCategoryHandler(item.title)}
            className="t text-2xl text-black font-medium py-2"
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CategoryModal;
