import React, { useEffect } from "react";
import { useContext, useRef, useState } from "react";
import SideBar from "../../components/SideBar";
import { Editor } from "@tinymce/tinymce-react";
import { AdminContext } from "../../context/AdminContext";
import ButtonSubmit from "../../components/ButtonSubmit";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const { products } = useContext(AdminContext);
  const [data, setData] = useState({
    title: "",
    description: "",
    firstLevelCategory: "",
    secondLevelCategory: "",
    price: 0,
    brand: "",
    discount:0
  });
  const [category, setCategory] = useState({
    name: "",
    parentCategory: {
      level: 0,
      name: "",
    },
    level: 0,
  });
  const [stocks, setStocks] = useState([
    {
      size: "",
      color: "",
      quantity: 0,
    },
  ]);
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        setData(res.data.product),
          setImage(res.data.product.image),
          setStocks(res.data.product.stock);
        setCategory(res.data.product.category);
      })
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();
  const editorRef = useRef(null);

  const addStock = () => {
    setStocks([...stocks, { size: "", color: "", quantity: 0 }]);
  };
  const subStock = (id) => {
    setStocks(stocks.filter((stock) => stock._id !== id));
  };

  const categories = [
    ...new Set(products.map((product) => product.category.name)),
  ];
  const brands = [...new Set(products.map((product) => product.brand))];

  const handleInputChange = (index, event, key) => {
    const updatedStocks = stocks.map((stock, i) => {
      if (i === index) {
        return {
          ...stock,
          [key]: event.target.value,
        };
      }
      return stock;
    });
    setStocks(updatedStocks);
  };

  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditorChange = (newContent, editor) => {
    setData((prevData) => ({
      ...prevData,
      description: newContent,
    }));
  };
  const onchangeCategory = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "firstLevelCategory") {
      setCategory((pre) => ({
        ...pre,
        parentCategory: {
          ...pre.parentCategory,
          name: value,
        },
      }));
    } else {
      setCategory((prev) => ({ ...prev, name: value }));
    }
  };
  const formData = new FormData();
  formData.append("title", data?.title);
  formData.append("image", image);
  formData.append("description", data?.description);
  formData.append("price", data?.price);
  formData.append("brand", data?.brand);
  formData.append("discount", data?.discount);

  formData.append("category", JSON.stringify(category));

  formData.append("stock", JSON.stringify(stocks));

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };
  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3000/product/update/${id}`,
        formData,
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc3ZGJlZmZjYmFmMDM1YjhlNTQyMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMzgyMDc0MX0.3ADoS7sGJxfbmZy6GJgF8j0e5Dbxteje-XSzuB-oYnI",
          },
        }
      );
      navigate("/products");
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-3 py-8">
        <h1 className="text-3xl font-semibold">Edit product</h1>
        <form onSubmit={handleEditProduct} className="flex flex-col gap-10">
          <div className="flex shadow rounded-xl justify-between">
            <p className="font-bold px-6 py-8">Basic details</p>
            <div className="w-2/3">
              <input
                required
                name="title"
                type="text"
                value={data?.title}
                onChange={onChangeHandle}
                placeholder="Product name"
                className="mb-5 border-2 outline-none rounded-lg px-3 py-2 w-full"
              />
              <label htmlFor="" className="text-#4D5761">
                Description
              </label>
              <Editor
                apiKey="bt275qmawkty6u5199nsuda4sp4qgrs5saj0zjob005krtmb"
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue={data?.description}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
          </div>
          <div className="flex shadow rounded-xl justify-between">
            <p className="font-bold px-6 py-8">Image</p>

            <div className="w-2/3">
              <label htmlFor="image">
                <img
                  src={
                    typeof image === "string"
                      ? `http://localhost:3000/${image}`
                      : URL.createObjectURL(image)
                  }
                  alt=""
                />
              </label>
              <input
                name="image"
                id="image"
                onChange={handleFileChange}
                type="file"
                class="hidden"
              />
            </div>
          </div>
          <div className="flex shadow rounded-xl justify-between">
            <p className="font-bold px-6 py-8">Category</p>

            <div className="w-2/3 flex flex-col gap-3">
              <div className="flex gap-6 text-lg">
                <div className="flex gap-2 items-center">
                  <label htmlFor="men">Men</label>
                  <input
                    onChange={onchangeCategory}
                    className="size-5"
                    type="radio"
                    name="firstLevelCategory"
                    id="men"
                    value="men"
                    checked={category?.parentCategory.name === "men"}
                  />
                </div>

                <div className="flex gap-3 items-center">
                  <label htmlFor="women">Women</label>
                  <input
                    onChange={onchangeCategory}
                    className="size-5"
                    type="radio"
                    name="firstLevelCategory"
                    id="women"
                    value="women"
                    checked={category?.parentCategory.name === "women"}
                  />
                </div>

                <div className="flex gap-2 items-center">
                  <label htmlFor="both">Both</label>
                  <input
                    onChange={onchangeCategory}
                    className="size-5"
                    type="radio"
                    value="both"
                    name="firstLevelCategory"
                    checked={category?.parentCategory.name === "both"}
                    id="both"
                  />
                </div>
              </div>
              <label htmlFor="category">Select caterogy</label>
              <div className="flex">
                <input
                  required
                  id="category"
                  onChange={onchangeCategory}
                  type="text"
                  value={category?.name}
                  name="name"
                  placeholder="new category"
                  className="mb-5 border-2 border-r-0 outline-none rounded-lg px-3 py-2 w-full"
                />
                <select
                  value={category?.name}
                  onChange={onchangeCategory}
                  name="name"
                  id=""
                  className="mb-5 border-2 border-l-0  outline-none rounded-lg px-3 py-3 "
                >
                  <option value="">Select category</option>

                  {categories.map((category) => (
                    <option value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex shadow rounded-xl justify-between">
            <p className="font-bold px-6 py-5">Pricing</p>
            <div className="w-2/3 flex gap-6">
              <div className="flex flex-col">
                <label htmlFor="">Price</label>
                <input
                  readOnly
                  name="Oldprice"
                  type="number"
                  className="border-2 outline-none rounded-lg px-3 py-5"
                  placeholder="Old Price"
                  value={data?.price}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">discount</label>
                <input
                  name="discount"
                  type="number"
                  className="border-2 outline-none rounded-lg px-3 py-5"
                  placeholder="Discount"
                  onChange={onChangeHandle}
                  value={data.discount}
                />
              </div>
            </div>
          </div>
          <div className="flex shadow rounded-xl justify-between">
            <label htmlFor="brand" className="font-bold px-6 py-8">
              Brand
            </label>
            <div className="w-2/3">
              <div className="flex">
                <input
                  id="brand"
                  required
                  onChange={onChangeHandle}
                  type="text"
                  value={data?.brand}
                  name="brand"
                  placeholder="Brand"
                  className="mb-5 border-2 border-r-0 outline-none rounded-lg px-3 py-2 w-full"
                />
                <select
                  value={data?.brand}
                  onChange={onChangeHandle}
                  name="brand"
                  id=""
                  className="mb-5 border-2 border-l-0  outline-none rounded-lg px-3 py-3  "
                >
                  <option value="">Select brand</option>
                  {brands.map((brand) => (
                    <option value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex shadow rounded-xl justify-between">
            <p className="font-bold px-6 py-8">Stock</p>
            <div className="flex flex-col">
              {stocks.map((stock, index) => (
                <div className="w-full">
                  <div className=" flex gap-5">
                    <div className="w-full flex flex-col">
                      <label htmlFor="size">Size</label>
                      <select
                        onChange={(e) => handleInputChange(index, e, "size")}
                        value={stock.size}
                        name="size"
                        id="size"
                        required
                        className=" border-2 outline-none rounded-lg px-3 py-2"
                      >
                        <option value="">Select size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="3XL">3XL</option>
                      </select>
                    </div>
                    <div className="w-full flex flex-col">
                      <label htmlFor="color">Color</label>
                      <select
                        onChange={(e) => handleInputChange(index, e, "color")}
                        required
                        value={stock.color}
                        name="color"
                        id="color"
                        className="mb-5 border-2 outline-none rounded-lg px-3 py-2 w-full"
                      >
                        <option value="">Select color</option>
                        <option value="white">white</option>
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                        <option value="yellow">yellow</option>
                        <option value="purple">purple</option>
                        <option value="black">black</option>
                      </select>
                    </div>

                    <div className="w-full flex flex-col">
                      <label htmlFor="">Quantity</label>
                      <input
                        onChange={(e) =>
                          handleInputChange(index, e, "quantity")
                        }
                        required
                        value={stock.quantity}
                        type="number"
                        className="mb-5 border-2 outline-none rounded-lg px-3 py-2 w-full"
                      />
                    </div>
                    <button onClick={() => subStock(stock._id)}>
                      <CiCircleRemove className="size-7" />
                    </button>
                  </div>
                </div>
              ))}
              <div
                className="px-4 py-2 rounded-full w-fit bg-#6366F1 text-white"
                onClick={addStock}
              >
                +
              </div>
            </div>
          </div>
          <ButtonSubmit title="Update" />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
