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
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
