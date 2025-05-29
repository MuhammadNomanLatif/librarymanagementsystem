import User from "../models/user.js";

export const registerUser = (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
};
// READ ALL: GET /api/v1/users
export const getAllregisterUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
// READ ONE: GET /api/v1/users/:id
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};
// UPDATE (REPLACE): PUT /api/v1/users/:id
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, email: req.body.email },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User replaced", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE (PARTIAL): PATCH /api/v1/users/:id
export const updatePartialUerd=async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User updated", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete: Delete /api/v1/users/:id
export const delteUser= async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};