const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
} = require("./contacts");

const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resetVerifyEmail,
} = require("./users");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resetVerifyEmail,
};
