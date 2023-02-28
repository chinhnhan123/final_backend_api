const mongoose = require("mongoose");
const { ADMIN, FARMER, TRADER } = require("../../constants/role");

const { Schema } = mongoose;

const AccountSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
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
      required: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
