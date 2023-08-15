const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .message(
      "Invalid phone number format. Please use the format (XXX) XXX-XXXX."
    ),
});

module.exports = { addSchema };
