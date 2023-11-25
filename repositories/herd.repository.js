const HerdModel = require("../database/models/herd");

const createHerd = async (data) => {
  try {
    const Herd = await HerdModel.create(data);
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:9 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const getAllHerd = async (options, searchTerm) => {
  try {
    const where = {};
    if (searchTerm) {
      where.$or = [
        {
          "accountInfo.fullName": {
            $regex: `.*${searchTerm}.*`,
            $options: "i",
          },
        },
        {
          "categoryInfo.nameCategory": {
            $regex: `.*${searchTerm}.*`,
            $options: "i",
          },
        },
      ];
    }
    const { page, limit } = options;
    const skip = limit && page ? limit * (page - 1) : 0;
    const [data, totalRecords] = await Promise.all([
      HerdModel.aggregate([
        {
          $lookup: {
            from: "accounts",
            localField: "idAccount",
            foreignField: "_id",
            as: "accountInfo",
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "idCategory",
            foreignField: "_id",
            as: "categoryInfo",
          },
        },
        {
          $match: {
            ...where,
          },
        },
        { $skip: skip },
        { $limit: limit },
        {
          $project: {
            name: 1,
            quantity: 1,
            urlImage: 1,
            createdAt: 1,
            "accountInfo.email": 1,
            "accountInfo.fullName": 1,
            "accountInfo.address": 1,
            "accountInfo._id": 1,
            "categoryInfo.nameCategory": 1,
          },
        },
      ]),
      HerdModel.countDocuments(),
    ]);

    const hasNextPage = skip + data.length < totalRecords ? true : false;
    const totalPages = Math.ceil(totalRecords / limit);
    const result = {
      data,
      page,
      totalDocs: totalRecords,
      totalPages,
      hasNextPage,
    };
    return result;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:19 ~ err:", err);
  }
};

const getAllHerdByAccountId = async (idAccount) => {
  try {
    const Herd = await HerdModel.find({ idAccount: idAccount }).populate(
      "idAccount idCategory"
    );
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:19 ~ err:", err);
  }
};

const updateHerd = async (id, data) => {
  try {
    const Herd = await HerdModel.updateMany({ _id: id }, data);
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:29 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const deleteHerd = async (id) => {
  try {
    const Herd = await HerdModel.findOneAndRemove({ _id: id });
    return Herd;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.repository.js:50 ~ deleteHerd ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    console.log("🚀 ~ file err:", err);
  }
};

const findHerdById = async (id) => {
  try {
    const result = await HerdModel.findById({ _id: id }).populate("idCategory");
    return result;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:56 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createHerd,
  getAllHerdByAccountId,
  updateHerd,
  deleteHerd,
  findHerdById,
  getAllHerd,
};
