import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    fName: {
      type: String,
      required: true,
      maxLength: [20, "First name can't be longer than 20 characters"],
    },
    lName: {
      type: String,
      required: true,
      maxLength: [20, "First name can't be longer than 20 characters"],
    },
    email: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      maxLength: [20, "First name can't be longer than 20 characters"],
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      maxLength: [15, "First name can't be longer than 20 characters"],
    },
    address: {
      type: String,
      required: true,
      maxLength: [100, "First name can't be longer than 20 characters"],
      default: "n/a",
    },
    dob: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin_User", AdminUserSchema);
