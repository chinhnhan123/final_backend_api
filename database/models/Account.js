const mongoose = require("mongoose");
const { ADMIN, FARMER, TRADER } = require("../../constants/role");

const { Schema } = mongoose;

const AccountSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [ADMIN, FARMER, TRADER],
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    lockAccount: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
