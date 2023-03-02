const AccountService = require("../services/account.service");

const getAllAccount = async (req, res) => {
  try {
    const Account = await AccountService.getAllAccount();
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Account.controller.js:8 ~ getAllAccount ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const findAccountById = async (req, res) => {
  try {
    const id = req.params.id;
    const Account = await AccountService.findAccountById(id);
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Account.controller.js:22 ~ findAccountByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
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
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Account.controller.js:43 ~ createAccount ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateAccount = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateAccount = await BookServices.updateAccount(
      req.params.id,
      req.body
    );
    return res.status(200).send(updateAccount);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Account.controller.js:73 ~ updateAccount ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateLockAccount = async (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body.lockAccount;
    const Account = await AccountService.updateLockAccount(id, data);
    res.status(200).send(Account);
  } catch (error) {
    console.log(
      "🚀 -----------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: account.controller.js:94 ~ updateLockAccount ~ error:",
      error
    );
    console.log(
      "🚀 -----------------------------------------------------------------------🚀"
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
};
