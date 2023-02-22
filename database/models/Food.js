const mongoose = require("mongoose");

const { Schema } = mongoose;

const FoodSchema = new Schema(
  {
    nameFood: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    urlImage: String,
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
