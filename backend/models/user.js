import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);
userSchema.methods.encryptPassword = async function (password) {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
};
// 👇 Optional: add method to compare password
userSchema.methods.comparePassword  = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

// sign jwt token

userSchema.methods.accessToken = async function () {
  const token = jwt.sign(
    { id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

export default User;
