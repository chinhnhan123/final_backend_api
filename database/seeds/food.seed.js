const mongoose = require("mongoose");
const FoodModel = require("../models/Food");
const database = require("../connect");

const food = [
  new FoodModel({
    nameFood: "Cornmeal",
    description: "bột ngô nhiều vitamin",
  }),
  new FoodModel({
    nameFood: "Bread flour",
    description: "bột ngô nhiều vitamin",
  }),
];

(async () => {
  await database.connectDatabase();
})();

food.map(async (data, index) => {
  // eslint-disable-next-line no-unused-vars
  data.save((_err, result) => {
    if (index === food.length) {
      // eslint-disable-next-line no-console
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
