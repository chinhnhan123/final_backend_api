const mongoose = require("mongoose");

const { Schema } = mongoose;

const GuideSchema = new Schema(
  {
    idStage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stage",
    },
    idCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    idFood: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
    idMedicine: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine",
      },
    ],
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Guide = mongoose.model("Guide", GuideSchema);

module.exports = Guide;
