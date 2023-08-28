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
};
