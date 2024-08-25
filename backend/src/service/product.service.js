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
  reqData.stock = JSON.parse(reqData.stock);

  const sizes = reqData.stock?.map((item) => item.size);
  const colors = reqData.stock?.map((item) => item.color);
  const quantity = reqData.stock?.reduce((acc, cur) => {
    return acc + parseFloat(cur.quantity);
  }, 0);

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    quantity: quantity,
    brand: reqData.brand,
    colors: colors,
    stock: reqData.stock,
    image: image,
    sizes: sizes,
    category: secondLevel._id,
  });
  return await product.save();
};

const delete_product = async (productId) => {
  const product = await Product.findById(productId);

  fs.unlink(`src/uploads/${product.image}`, () => {});

  return await Product.findByIdAndDelete(productId);
};

const update_product = async (productId, reqData, image) => {
  reqData.stock = JSON.parse(reqData.stock);
  reqData.category = JSON.parse(reqData.category);

  const product = await Product.findById(productId);
  const newProduct = await Product.findByIdAndUpdate(product._id, {
    ...reqData,
    image: image,
  });
  return newProduct;
};

const findProductById = async (productId) => {
  return await Product.findById(productId).populate({
    path: "category",
    populate: {
      path: "parentCategory",
    },
  });
};

const findAllProduct = async () => {
  return await Product.find().populate("category");
};

module.exports = {
  create_product,
  delete_product,
  update_product,
  findProductById,
  findAllProduct,
}; 
