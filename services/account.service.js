const AccountRepository = require("../repositories/account.reponsitory");

const createAccount = async (data) => {
  try {
    const result = await AccountRepository.createAccount(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: Account.service.js:8 ~ createAccount ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");
    return err;
  }
};

const getAllAccount = async () => {
  try {
    const result = await AccountRepository.getAllAccount();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Account.service.js:27 ~ getAllAccount ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateAccount = async (id, data) => {
  try {
    const result = await AccountRepository.updateAccount(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Account.service.js:46 ~ updateAccount ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const findAccountById = async (id) => {
  try {
    const result = await AccountRepository.findAccountById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Account.service.js:84 ~ findAccountById ~ err:",
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
    const result = await AccountRepository.updateLockAccount(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.service.js:71 ~ updateLockAccount ~ err:",
      err
    );
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createAccount,
  getAllAccount,
  updateAccount,
  findAccountById,
  updateLockAccount,
};
