const mongoose = require("mongoose");
const CategoryModel = require("../models/Category");
const database = require("../connect");

const category = [
  new CategoryModel({
    nameCategory: "heo nai",
    kilogram: 70,
    description: "de sinh heo con",
    daysToRaisePigs: 150,
  }),
  new CategoryModel({
    nameCategory: "heo rung",
    kilogram: 90,
    description: "thịt ngon và đắt",
    daysToRaisePigs: 190,
  }),
];

(async () => {
  await database.connectDatabase();
})();

category.map(async (data, index) => {
  // eslint-disable-next-line no-unused-vars
  data.save((_err, result) => {
    if (index === category.length) {
      // eslint-disable-next-line no-console
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
