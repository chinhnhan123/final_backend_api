const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    nameCategory: {
      type: String,
      required: true,
    },
    kilogram: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    daysToRaisePigs: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
