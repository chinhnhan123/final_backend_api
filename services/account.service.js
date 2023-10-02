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
      "🚀 ----------------------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.service.js:116 ~ checkPasswordSer ~ isValidPassword:",
      typeof isValidPassword
    );
    console.log(
      "🚀 ----------------------------------------------------------------------------------------🚀"
    );
    return isValidPassword;
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.reponsitory.js:123 ~ checkPasswordRes ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
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
      "🚀 ---------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.service.js:129 ~ createToken ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------🚀"
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
};
