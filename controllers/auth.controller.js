const AccountService = require("../services/account.service");

const register = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    if (!phoneNumber || !password) return res.status(422).send("Required !!!!");
    const findAccount = await AccountService.findAccountByPhone(phoneNumber);
    if (findAccount) return res.status(400).send("Account already exists");
    const createAccount = await AccountService.createAccount(req.body);
    if (!createAccount) return res.status(500).send("Internal server error");
    return res.status(200).send(createAccount);
  } catch (error) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: auth.controller.js:12 ~ register ~ error:", error);
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    if (!phoneNumber || !password) return res.status(422).send("Required !!!!");
    const findAccount = await AccountService.findAccountByPhone(phoneNumber);
    console.log(
      "🚀 --------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: auth.controller.js:29 ~ login ~ findAccount:",
      findAccount
    );
    console.log(
      "🚀 --------------------------------------------------------------------🚀"
    );

    if (!findAccount) return res.status(400).send("Account does not exists");
    const payload = {
      phoneNumber: findAccount.phoneNumber,
      fullName: findAccount.fullName,
      role: findAccount.role,
    };
    const passwordValid = await AccountService.checkPasswordSer(
      phoneNumber,
      password
    );

    if (!passwordValid) {
      return res.status(400).send("Password is incorrect");
    }

    const handleToken = await AccountService.createToken(payload);
    res.cookie("AccessToken", handleToken, { httpOnly: true });
    return res
      .status(200)
      .send({ handleToken, message: "login successful!!!!!" });
  } catch (err) {
    return err;
  }
};

const logout = async (req, res) => {
  try {
    await res.clearCookie("AccessToken");
    return res.status(200).send("Logout successful!!!!!");
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: auth.controller.js:52 ~ logout ~ error:", error);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  register,
  login,
  logout,
};
