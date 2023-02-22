const mongoose = require("mongoose");

const { Schema } = mongoose;

const GuideFoodSchema = new Schema(
  {
    idGuide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
    },
    idFood: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const GuideFood = mongoose.model("GuideFood", GuideFoodSchema);

module.exports = GuideFood;
