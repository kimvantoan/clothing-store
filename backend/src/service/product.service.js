const Product = require("../model/product.model.js");
const Category = require("../model/category.model.js");
const fs = require("fs");
const create_product = async (reqData, image) => {
  let firstLevel = await Category.findOne({ name: reqData.firstLevelCategory });

  if (!firstLevel) {
    firstLevel = await new Category({
      name: reqData.firstLevelCategory,
      level: 1,
    }).save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: firstLevel._id,
  });

  if (!secondLevel) {
    secondLevel = await new Category({
      name: reqData.secondLevelCategory,
      level: 2,
      parentCategory: firstLevel._id,
    }).save();
  }

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discount: reqData.discount,
    quantity: reqData.quantity,
    brand: reqData.brand,
    colors: reqData.colors,
    stock:reqData.stock,
    image: image,
    sizes: reqData.sizes,
    category: secondLevel._id,
  });

  return await product.save();
};

const delete_product = async (productId) => {
  const product = await Product.findById(productId);

  fs.unlink(`src/uploads/${product.image}`, () => {});
  
  return await Product.findByIdAndDelete(productId);
};

const update_product = async (reqData, image) => {
  const product = await Product.findById(reqData.productId);

  const newProduct= await Product.findByIdAndUpdate(reqData.productId, { reqData, image });

  fs.unlink(`src/uploads/${product.image}`, () => {});

  return newProduct
};

const findProductById = async (productId) => {
  return await Product.findById(productId).populate("category").exec();
};

const findAllProduct = async () => {
  return await Product.find();
};

module.exports = {
  create_product,
  delete_product,
  update_product,
  findProductById,
  findAllProduct,
};
