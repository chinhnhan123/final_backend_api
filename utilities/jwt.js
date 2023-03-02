const jwt = require("jsonwebtoken");

const createTokenJwt = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  } catch (error) {
    console.log("🚀 ----------------------------------------------------🚀");
    console.log("🚀 ~ file: jwt.js:8 ~ createTokenJwt ~ error:", error);
    console.log("🚀 ----------------------------------------------------🚀");
    return error;
  }
};

const verifyToken = async (token) => {
  try {
    const verify = await jwt.verify(token, process.env.SECRET_KEY);
    return verify;
  } catch (error) {
    console.log("🚀 --------------------------------------------------🚀");
    console.log("🚀 ~ file: jwt.js:20 ~ verifyToken ~ error:", error);
    console.log("🚀 --------------------------------------------------🚀");
    return error;
  }
};

module.exports = {
  createTokenJwt,
  verifyToken,
};
