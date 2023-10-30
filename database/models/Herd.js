const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;

const PigsSchema = new Schema(
  {
    idAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    name: {
      type: String,
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
    urlImage: String,
  },
  { timestamps: true }
);

PigsSchema.plugin(mongoosePaginate);

const Pigs = mongoose.model("Pigs", PigsSchema);

module.exports = Pigs;
