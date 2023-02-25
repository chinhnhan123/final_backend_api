const Category = require("./api/category");
const Stage = require("./api/stage");
const food = require("./api/food");
const guide = require("./api/guide");
const medicine = require("./api/medicine");
function route(app) {
  app.use("/api/category", Category);
  app.use("/api/stage", Stage);
  app.use("/api/food", food);
  app.use("/api/guide", guide);
  app.use("/api/medicine", medicine);
}

module.exports = route;
