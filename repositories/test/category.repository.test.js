const mongoose = require("mongoose");
const database = require("../../database/connect");
const Category = require("../../database/models/category");
const CategoryRepository = require("../../repositories/category.repository");
beforeEach(async () => {
  await database.connectDatabase();
});

afterEach(async () => {
  await database.DisconnnectDB();
});

const mockCategory = {
  nameCategory: "heo nai",
  kilogram: 70,
  description: "de sinh heo con",
  daysToRaisePigs: 150,
};

describe("Good case: Unit test for category", () => {
  it("Should create a new category", async () => {
    const category = await CategoryRepository.createCategory(mockCategory);

    expect(category.nameCategory).toEqual(mockCategory.nameCategory);
    expect(category.kilogram).toEqual(mockCategory.kilogram);
    expect(category.description).toEqual(mockCategory.description);
    expect(category.daysToRaisePigs).toEqual(mockCategory.daysToRaisePigs);
  });
  it("Should read a category", async () => {
    const category = await CategoryRepository.findCategoryByName(
      mockCategory.nameCategory
    );

    expect(category.nameCategory).toEqual(mockCategory.nameCategory);
    expect(category.kilogram).toEqual(mockCategory.kilogram);
    expect(category.description).toEqual(mockCategory.description);
    expect(category.daysToRaisePigs).toEqual(mockCategory.daysToRaisePigs);
  });
  // it("Should update a category", async () => {
  //   const category = await CategoryRepository.updateCategory(
  //     "63f0722f250404b4694b7045",
  //     mockCategory
  //   );
  //   expect(category.nameCategory).toEqual(mockCategory.nameCategory);
  //   expect(category.kilogram).toEqual(mockCategory.kilogram);
  //   expect(category.description).toEqual(mockCategory.description);
  //   expect(category.daysToRaisePigs).toEqual(mockCategory.daysToRaisePigs);
  // });
});
