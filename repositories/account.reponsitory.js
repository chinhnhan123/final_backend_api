const AccountModel = require("../database/models/Account");

const createAccount = async (data) => {
  try {
    const Account = await AccountModel.create(data);
    return Account;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.reponsitory.js:8 ~ createAccount ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------------🚀"
    );
    return err;
  }
};

const getAllAccount = async () => {
  try {
    const Account = await AccountModel.find();
    // .sort({ createdAt: -1 });
    return Account;
  } catch (err) {
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.reponsitory.js:28 ~ getAllAccount ~ err:",
      err
    );
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );

    return err;
  }
};

const updateAccount = async (id, data) => {
  try {
    const Account = await AccountModel.updateMany(id, data);
    return Account;
  } catch (err) {
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.reponsitory.js:48 ~ updateAccount ~ err:",
      err
    );
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    return err;
  }
};

const findAccountById = async (id) => {
  try {
    const result = await AccountModel.findOne({ _id: id });
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.reponsitory.js:86 ~ findAccountById ~ err:",
      err
    );
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );

    return err;
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
    return err;
  }
};

const findAccountByEmail = async (email) => {
  try {
    const result = await AccountModel.findOne({ email: email });
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.reponsitory.js:86 ~ findAccountById ~ err:",
      err
    );
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    return err;
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
