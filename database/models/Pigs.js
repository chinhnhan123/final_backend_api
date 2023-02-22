const mongoose = require("mongoose");

const { Schema } = mongoose;

const PigsSchema = new Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    idCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
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
