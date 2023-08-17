const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");



const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "Contact deleted" });
};



module.exports = {
    removeContact: ctrlWrapper(removeContact)
};