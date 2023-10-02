const AccountModel = require("../database/models/Account");

const createAccount = async (data) => {
  try {
    const Account = await AccountModel.create(data);
    return Account;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const getAllAccount = async () => {
  try {
    const Account = await AccountModel.find();
    // .sort({ createdAt: -1 });
    return Account;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateAccount = async (id, data) => {
  try {
    const Account = await AccountModel.updateMany(id, data);
    return Account;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const findAccountById = async (id) => {
  try {
    const result = await AccountModel.findOne({ _id: id });
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateLockAccount = async (id, data) => {
  try {
    const Account = await AccountModel.updateOne(
      { _id: id },
      { $set: { lockAccount: data } }
    );
    return Account;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const findAccountByEmail = async (email) => {
  try {
    const result = await AccountModel.findOne({ email: email });
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createAccount,
  getAllAccount,
  updateAccount,
  updateLockAccount,
  findAccountById,
  findAccountByEmail,
};
