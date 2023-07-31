import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  fullName: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
