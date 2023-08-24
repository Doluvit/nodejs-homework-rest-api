const { ctrlWrapper } = require("../../helpers");
const { Contact } = require("../../models/contact");


const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }).skip(skip).limit(limit);
  console.log(result)
  res.status(200).json(result);
};


module.exports = { listContacts: ctrlWrapper(listContacts) }; 