import Joi from 'joi';

export const bookValidationSchema = Joi.object({
  title: Joi.string().min(1).required(),
  author: Joi.string().min(1).required(),
  isbn: Joi.string().min(5).required(),
  available: Joi.boolean(),
});
