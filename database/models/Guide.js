const mongoose = require("mongoose");

const { Schema } = mongoose;

const GuideSchema = new Schema(
  {
    idStage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stage",
      required: true,
    },
    idCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    idFood: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true,
      },
    ],
    idMedicine: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine",
        required: true,
      },
    ],
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Guide = mongoose.model("Guide", GuideSchema);

module.exports = Guide;
