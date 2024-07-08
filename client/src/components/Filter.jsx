import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
const Filter = () => {
  const [openPrice, setopenPrice] = useState(true);
  const [openColor, setopenColor] = useState(true);
  const [openSize, setopenSize] = useState(true);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  return (
    <div className="px-7 border-2 w-80">
      <div className="flex py-5 items-center justify-between  text-#807D7E  text-2xl">
        <h2 className="font-semibold ">Filter</h2>
        <FiFilter />
      </div>

      <hr />

      <div>
        <ul className="flex flex-col gap-4 font-semibold text-#807D7E py-10">
          <li className="flex justify-between">
            <span>Tops</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex justify-between">
            <span>Printed T-shirts</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex justify-between">
            <span>Plain T-shirts</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
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
            <input type="number" className="outline-none w-full" />
          </div>
          <div className="border-2 rounded-lg w-1/2  flex items-center py-2 pl-4 gap-1 text-#3C4242 font-medium">
            $
            <input type="number" className="outline-none w-full" />
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
        <div className={`${openColor ? " grid" : "hidden"} grid-cols-4 gap-5 py-5`}>
          <div
            onClick={() => setColor("Purple")}
            className="flex flex-col items-center"
          >
            <button className={`w-9 h-9 bg-purple-500 rounded-xl`}></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Purple" ? "text-purple-500" : ""
              } text-sm`}
            >
              Purple
            </p>
          </div>
          <div
            onClick={() => setColor("Black")}
            className="flex flex-col items-center"
          >
            <button className={`w-9 h-9 bg-black rounded-xl`}></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Black" ? "text-black" : ""
              } text-sm`}
            >
              Black
            </p>
          </div>
          <div
            onClick={() => setColor("Red")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-red-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Red" ? "text-red-500" : ""
              } text-sm`}
            >
              Red
            </p>
          </div>
          <div
            onClick={() => setColor("Orange")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-orange-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Orange" ? "text-orange-500" : ""
              } text-sm`}
            >
              Orange
            </p>
          </div>
          <div
            onClick={() => setColor("Blue")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-blue-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 text-sm ${
                color === "Blue" ? "text-blue-500" : ""
              }`}
            >
              Blue
            </p>
          </div>
          <div
            onClick={() => setColor("White")}
            className="flex flex-col items-center"
          >
            <button
              className={`w-9 h-9 bg-white rounded-xl border ${
                color === "White" ? "border-2 border-black" : ""
              }`}
            ></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "White" ? "text-#3C4242" : ""
              } text-sm`}
            >
              White
            </p>
          </div>
          <div
            onClick={() => setColor("Green")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-green-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Green" ? "text-green-500" : ""
              } text-sm`}
            >
              Green
            </p>
          </div>
          <div
            onClick={() => setColor("Yellow")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-yellow-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Yellow" ? "text-yellow-500" : ""
              } text-sm`}
            >
              Yellow
            </p>
          </div>
          <div
            onClick={() => setColor("Amber")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-amber-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Amber" ? "text-amber-500" : ""
              } text-sm`}
            >
              Amber
            </p>
          </div>
          <div
            onClick={() => setColor("Gray")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-gray-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Gray" ? "text-black" : ""
              } text-sm`}
            >
              Gray
            </p>
          </div>
          <div
            onClick={() => setColor("Pink")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-pink-500 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Pink" ? "text-pink-500" : ""
              } text-sm`}
            >
              Pink
            </p>
          </div>
          <div
            onClick={() => setColor("Navi")}
            className="flex flex-col items-center"
          >
            <button className="w-9 h-9 bg-blue-700 rounded-xl "></button>
            <p
              className={`font-semibold text-#8A8989 ${
                color === "Navi" ? "text-blue-700" : ""
              } text-sm`}
            >
              Navi
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <button
          onClick={() => setopenSize(!openSize)}
          className="py-4 flex items-center justify-between w-full font-semibold text-#807D7E text-2xl"
        >
          Size
          <IoIosArrowDown className={`${openSize ? "rotate-180" : ""}`} />
        </button>
        <div className={`${openSize ? "grid" : "hidden"} grid-cols-3 gap-2`}>
          <button
            onClick={() => setSize("XXS")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "XXS" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            XXS
          </button>
          <button
            onClick={() => setSize("XL")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "XL" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            XL
          </button>
          <button
            onClick={() => setSize("XS")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "XS" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            XS
          </button>
          <button
            onClick={() => setSize("S")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "S" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            S
          </button>
          <button
            onClick={() => setSize("M")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "M" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            M
          </button>
          <button
            onClick={() => setSize("L")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "L" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            L
          </button>
          <button
            onClick={() => setSize("XXL")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "XXL" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            XXL
          </button>
          <button
            onClick={() => setSize("3XL")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "3XL" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            3XL
          </button>
          <button
            onClick={() => setSize("4XL")}
            className={`py-2 border-2 rounded-lg text-center text-sm text-#3C4242 font-medium ${
              size === "4XL" ? "text-white bg-#2A2F2F border-#2A2F2F" : ""
            }`}
          >
            4XL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
