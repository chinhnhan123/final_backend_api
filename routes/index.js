const Category = require("./category");
function route(app) {
  app.use("/category", Category);
}

module.exports = route;
