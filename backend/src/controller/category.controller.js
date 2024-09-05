const {
  create_category,
  findAllCategory,
  delete_Category,
} = require("../service/category.sevice");

const createCategory = async (req, res) => {
  try {
    await create_category(req.body);
    res.status(201).json({ success: true, message: "Created" });
  } catch (error) {
    console.log(error);
  }
};
const getCategory = async (req, res) => {
  try {
    const category = await findAllCategory();
    res.status(200).json({ success: true, category });
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (req, res) => {
  try {
    await delete_Category(req.body.id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCategory, getCategory, deleteCategory };
