const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");



const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(result);
};


module.exports = { updateContact: ctrlWrapper(updateContact) };