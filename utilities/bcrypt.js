const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const hashed = await bcrypt.hash(password, parseInt(process.env.SALT));
    return hashed;
  } catch (error) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: bcrypt.js:9 ~ hashPassword ~ error:", error);
    console.log("🚀 -----------------------------------------------------🚀");
    return error;
  }
};

const checkPassword = async (password, encryptedPW) => {
  try {
    const isValidPassword = await bcrypt.compare(password, encryptedPW);
    return isValidPassword;
  } catch (error) {
    console.log("🚀 -------------------------------------------------------🚀");
    console.log("🚀 ~ file: bcrypt.js:20 ~ checkPassword ~ error:", error);
    console.log("🚀 -------------------------------------------------------🚀");
    return error;
  }
};

module.exports = {
  hashPassword,
  checkPassword,
};
