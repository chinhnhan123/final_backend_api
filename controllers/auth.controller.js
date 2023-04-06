const AccountService = require("../services/account.service");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(422).send("Required !!!!");
    const findAccount = await AccountService.findAccountByEmail(email);
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
    const { email, password } = req.body;
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: auth.controller.js:27 ~ login ~ password:",
      typeof password
    );
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    if (!email || !password) return res.status(422).send("Required !!!!");
    const findAccount = await AccountService.findAccountByEmail(email);
    if (!findAccount) return res.status(400).send("Account does not exists");
    const payload = {
      id: findAccount._id,
      email: findAccount.email,
      fullName: findAccount.fullName,
      role: findAccount.role,
    };

    const passwordValid = await AccountService.checkPasswordSer(
      email,
      password
    );

    if (!passwordValid) {
      return res.status(400).send("Password is incorrect");
    }

    const handleToken = await AccountService.createToken(payload);
    res.cookie("AccessToken", handleToken, { httpOnly: true });
    return res
      .status(200)
      .send({ handleToken, payload, message: "login successful!!!!!" });
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
