import { bookValidationSchema } from "../Validations/bookValidation.js";

export const validateBook = (req, res, next) => {
  console.log("validate book called",req);
  const { error } = bookValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
