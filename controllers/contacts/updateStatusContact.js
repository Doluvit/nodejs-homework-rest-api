const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");


const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (req.body.favorite === null || req.body.favorite === undefined) {
    throw HttpError(400, "Missing field favorite");
  }

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};


module.exports = { updateStatusContact: ctrlWrapper(updateStatusContact) };