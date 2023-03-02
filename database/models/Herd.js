const mongoose = require("mongoose");

const { Schema } = mongoose;

const PigsSchema = new Schema(
  {
    idAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    idCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Pigs = mongoose.model("Pigs", PigsSchema);

module.exports = Pigs;