const Product = require("../model/product.model.js");
const Category = require("../model/category.model.js");

const create_product = async (reqData) => {
  let firstLevel = await Category.findOne({ name: reqData.firstLevelCategory });

  if (!firstLevel) {
    firstLevel =await new Category({ name: reqData.firstLevelCategory, level: 1 }).save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: firstLevel._id,
  });

  if (!secondLevel) {
    secondLevel =await new Category({
      name: reqData.secondLevelCategory,
      level: 2,
      parentCategory: firstLevel._id,
    }).save();
  }

  console.log(secondLevel);
  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discountedPrice: reqData.discountedPrice,
    quantity: reqData.quantity,
    brand: reqData.brand,
    color: reqData.color,
    image: reqData.image,
    size: reqData.size,
    category: secondLevel._id
  });

  return await product.save();
};

const delete_product = async (productId) => {
  return await Product.findByIdAndDelete(productId);
};

const update_product = async (productId, reqData) => {
  return await Product.findByIdAndUpdate(productId, reqData);
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
