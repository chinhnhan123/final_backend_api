const AccountService = require("../services/account.service");
const handleUploadImage = require("../utilities/uploadImage");

const getAllAccount = async (req, res) => {
  try {
    const Account = await AccountService.getAllAccount();
    res.status(200).send(Account);
  } catch (error) {
    res.sendStatus(500);
  }
};

const totalAccountVIP = async (req, res) => {
  try {
    const Account = await AccountService.totalAccountVIP();
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 ~ file: Account.controller.js:8 ~ getAllAccount ~ error:",
      error
    );

    res.sendStatus(500);
  }
};

const totalAccountFarmer = async (req, res) => {
  try {
    const Account = await AccountService.totalAccountFarmer();
    console.log(
      "🚀 ~ file: account.controller.js:35 ~ totalAccountFarmer ~ Account:",
      Account
    );
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 ~ file: Account.controller.js:8 ~ getAllAccount ~ error:",
      error
    );

    res.sendStatus(500);
  }
};

const totalAccountTrader = async (req, res) => {
  try {
    const Account = await AccountService.totalAccountTrader();
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 ~ file: Account.controller.js:8 ~ getAllAccount ~ error:",
      error
    );

    res.sendStatus(500);
  }
};

const findAccountById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.sendStatus(400);
    const Account = await AccountService.findAccountById(id);
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 ~ file: Account.controller.js:22 ~ findAccountByName ~ error:",
      error
    );

    res.sendStatus(500);
  }
};

const createAccount = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const Account = await AccountService.createAccount(req.body);
    if (!Account) return res.sendStatus(500);
    return res.status(200).send(Account);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateVIPAccount = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const Account = await AccountService.updateVIPAccount(req.params.id);
    res.status(200).send(Account);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateAccount = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateAccount = await AccountService.updateAccount(
      req.params.id,
      req.body
    );
    return res.status(200).send(updateAccount);
  } catch (error) {
    console.log(
      "🚀 ~ file: Account.controller.js:73 ~ updateAccount ~ error:",
      error
    );
    res.sendStatus(500);
  }
};

const updateLockAccount = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body.lockAccount;
    const Account = await AccountService.updateLockAccount(id, data);
    res.status(200).send(Account);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateAvatar = async (req, res) => {
  try {
    if (!req.params.id || !req.body) return res.sendStatus(400);
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    } else {
      img = req.body.img;
    }
    console.log(
      "🚀 ~ file: account.controller.js:81 ~ updateAvatar ~ img:",
      img
    );
    const Account = await AccountService.updateAvatar(req.params.id, img);
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 ~ file: account.controller.js:89 ~ updateAvatar ~ error:",
      error
    );
    res.sendStatus(500);
  }
};

module.exports = {
  createAccount,
  getAllAccount,
  updateAccount,
  findAccountById,
  updateLockAccount,
  updateAvatar,
  updateVIPAccount,
  totalAccountVIP,
  totalAccountFarmer,
  totalAccountTrader,
};
