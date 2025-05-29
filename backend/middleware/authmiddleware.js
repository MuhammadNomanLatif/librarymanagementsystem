import User from "../models/user.js";
import jwt from "jsonwebtoken";

const verifyToken = async (req, res) => {
  console.log(req, req.headers.authorization);
};
export default verifyToken;
