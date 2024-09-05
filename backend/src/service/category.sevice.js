const Category = require("../model/category.model.js");

const create_category = async (reqData) => {
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
  return secondLevel;
};

const findAllCategory = async () => {
  const category = await Category.find().populate("parentCategory");
  return category;
};

const delete_Category = async (id) => {
  await Category.findByIdAndDelete(id);
};
module.exports = { create_category, findAllCategory,delete_Category };
