const Address = require("../model/address.model.js");
const { findUserById } = require("./user.service.js");

const create_address = async (userId, reqData) => {
  const user = await findUserById(userId);

  const address = await new Address({
    user: user._id,
    mobile: reqData.mobile,
    zipCode: reqData.zipCode,
    state: reqData.state,
    lastname: reqData.lastname,
    firstname: reqData.firstname,
    city: reqData.city,
    streetAddress: reqData.streetAddress,
  }).save();

  user.address.push(address);

  await user.save();

  return address;
};

const update_address = async (idAddress, reqData) => {
  const address = await Address.findByIdAndUpdate(idAddress, reqData);

  return await address.save();
};

const remove_address = async (reqData) => {
  const address = await find_Address_By_Id(reqData._id);
  
  await Address.findByIdAndDelete(address._id);

  return address;
};

const find_All_Address_ByUserId = async (userId) => {
  const addresses = await Address.find({ user: userId });

  return addresses;
};

const find_Address_By_Id = async (id) => {
  const address = await Address.findById(id);

  return address;
};

module.exports = {
  find_Address_By_Id,
  find_All_Address_ByUserId,
  update_address,
  create_address,
  remove_address,
};
