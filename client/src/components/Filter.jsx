import React, { useContext, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { StoreContext } from "../context/StoreContext";
import PrimaryButton from "../components/PrimaryButton";
import { toast } from "react-toastify";
const Filter = () => {
  const { products, setListProduct } = useContext(StoreContext);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [openPrice, setopenPrice] = useState(true);
  const [openColor, setopenColor] = useState(true);
  const [openSize, setopenSize] = useState(true);

  const listcolor = Array.from(
    new Set(products.map((item) => item.colors).flat())
  );
  const listsize = Array.from(
    new Set(products.map((item) => item.sizes).flat())
  );
  const listcategory = Array.from(
    new Set(products.map((item) => item.category?.name).flat())
  );
  console.log(listcategory);
  
  const handleColorChange = (e) => {
    const color = e.target.value;
    if (e.target.checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    if (e.target.checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    }
  };
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategory([...selectedCategory, category]);
    } else {
      setSelectedCategory(selectedCategory.filter((s) => s !== category));
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      (maxPrice > 0
        ? product.price - product.discount >= minPrice &&
          product.price - product.discount <= maxPrice
        : true) &&
      (selectedCategory.length !== 0
        ? selectedCategory.includes(product.category?.name)
        : true) &&
      (selectedColors.length !== 0
        ? product.colors.some((c) => selectedColors.includes(c))
        : true) &&
      (selectedSizes.length !== 0
        ? product.sizes.some((c) => selectedSizes.includes(c))
        : true)
    );
  });
  const handleFilter = () => {
    if (filteredProducts.length === 0) {
      toast.info("No products found");
    } else {
      setListProduct(filteredProducts);
    }
  };

  return (
    <div className="px-7 border-2 w-80">
      <div className="flex py-5 items-center justify-between  text-#807D7E  text-2xl">
        <h2 className="font-semibold ">Filter</h2>
        <FiFilter />
      </div>

      <hr />

      <div>
        <ul className="flex flex-col gap-4 font-semibold text-#807D7E py-10">
          {listcategory.map((item) => (
            <li className="flex justify-between">
              <label htmlFor="">{item}</label>
              <input
                onChange={handleCategoryChange}
                value={item}
                className="w-4 h-4"
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <button
          onClick={() => setopenPrice(!openPrice)}
          className="py-4 flex items-center justify-between w-full font-semibold text-#807D7E text-2xl"
        >
          Price
          <IoIosArrowDown className={`${openPrice ? "rotate-180" : ""}`} />
        </button>
        <div
          className={`${
            openPrice ? "block" : "hidden"
          }  flex justify-between py-3`}
        >
          <div className="border-2 rounded-lg w-1/2 flex items-center py-2 pl-4 gap-1 text-#3C4242 font-medium">
            $
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="outline-none w-full"
            />
          </div>
          <div className="border-2 rounded-lg w-1/2  flex items-center py-2 pl-4 gap-1 text-#3C4242 font-medium">
            $
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="outline-none w-full"
            />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <button
          onClick={() => setopenColor(!openColor)}
          className="py-4 flex items-center justify-between w-full font-semibold text-#807D7E text-2xl"
        >
          Colors
          <IoIosArrowDown className={`${openColor ? "rotate-180" : ""}`} />
        </button>
        <div
          className={`${openColor ? " grid" : "hidden"} grid-cols-4 gap-5 py-5`}
        >
          {listcolor.map((item) => (
            <div className="flex flex-col items-center">
              <label htmlFor="" className="text-lg font-medium">
                {item}
              </label>
              <input
                type="checkbox"
                className="size-6"
                value={item}
                onChange={handleColorChange}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="mb-4">
        <button
          onClick={() => setopenSize(!openSize)}
          className="py-4 flex items-center justify-between w-full font-semibold text-#807D7E text-2xl"
        >
          Size
          <IoIosArrowDown className={`${openSize ? "rotate-180" : ""}`} />
        </button>
        <div className={`${openSize ? "grid" : "hidden"} grid-cols-3 gap-2`}>
          {listsize.map((item) => (
            <div className="flex flex-col items-center">
              <label htmlFor="" className="text-lg font-medium">
                {item}
              </label>
              <input
                type="checkbox"
                className="size-6"
                value={item}
                onChange={handleSizeChange}
              />
            </div>
          ))}
        </div>
      </div>
      <PrimaryButton title="Accept" action={handleFilter} />
    </div>
  );
};

export default Filter;
