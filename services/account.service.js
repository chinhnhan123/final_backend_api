const AccountRepository = require("../repositories/account.reponsitory");
const { hashPassword, checkPassword } = require("../utilities/bcrypt");
const { createTokenJwt } = require("../utilities/jwt");

const createAccount = async (data) => {
  try {
    const hashedPW = await hashPassword(data.password);
    data.password = hashedPW;
    const result = await AccountRepository.createAccount(data);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
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
    console.log("🚀 ~ file err:", err);
  }
};

const totalAccountVIP = async () => {
  try {
    const result = await AccountRepository.totalAccountVIP();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Account.service.js:27 ~ getAllAccount ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const totalAccountFarmer = async () => {
  try {
    const result = await AccountRepository.totalAccountFarmer();
    console.log(
      "🚀 ~ file: account.service.js:51 ~ totalAccountFarmer ~ result:",
      result
    );
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const totalAccountTrader = async () => {
  try {
    const result = await AccountRepository.totalAccountTrader();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Account.service.js:27 ~ getAllAccount ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
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
    console.log("🚀 ~ file err:", err);
  }
};

const findAccountById = async (id) => {
  try {
    const result = await AccountRepository.findAccountById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ~ file: Account.service.js:84 ~ findAccountById ~ err:",
      err
    );
    console.log("🚀 ~ file err:", err);
  }
};

const updateLockAccount = async (id, data) => {
  try {
    const result = await AccountRepository.updateLockAccount(id, data);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateVIPAccount = async (id) => {
  try {
    const result = await AccountRepository.updateVIPAccount(id);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateAvatar = async (id, data) => {
  try {
    const result = await AccountRepository.updateAvatar(id, data);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const findAccountByEmail = async (Email) => {
  try {
    const result = await AccountRepository.findAccountByEmail(Email);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const checkPasswordSer = async (email, password) => {
  try {
    const result = await AccountRepository.findAccountByEmail(email);
    const isValidPassword = await checkPassword(password, result.password);
    console.log(
      "🚀 ~ file: account.service.js:92 ~ checkPasswordSer ~ isValidPassword:",
      isValidPassword
    );
    return isValidPassword;
  } catch (error) {
    console.log(
      "🚀 ~ file: account.service.js:95 ~ checkPasswordSer ~ error:",
      error
    );
    return error;
  }
};

const createToken = async (payload) => {
  try {
    const token = createTokenJwt(payload);
    return token;
  } catch (error) {
    console.log(
      "🚀 ~ file: account.service.js:111 ~ createToken ~ error:",
      error
    );
    return error;
  }
};

module.exports = {
  createAccount,
  getAllAccount,
  updateAccount,
  findAccountById,
  updateLockAccount,
  findAccountByEmail,
  checkPasswordSer,
  createToken,
  updateAvatar,
  updateVIPAccount,
  totalAccountVIP,
  totalAccountFarmer,
  totalAccountTrader,
};
