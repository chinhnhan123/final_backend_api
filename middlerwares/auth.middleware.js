const { verifyToken } = require("../utilities/jwt");
const { ADMIN, FARMER, TRADER } = require("../constants/role");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = await req.cookies.AccessToken;
    if (!token) return res.sendStatus(400).send("Not login");
    next();
  } catch (error) {
    return error;
  }
};

const checkRoleAdmin = async (req, res, next) => {
  try {
    const token = await req.cookies.AccessToken;
    const verifyToken = await verifyToken(token);
    if (verifyToken.role !== ADMIN)
      return res.sendStatus(403).send("Forbidden");
    next();
  } catch (error) {
    return error;
  }
};

const checkRoleTrader = async (req, res, next) => {
  try {
    const token = await req.cookies.AccessToken;
    const verifyToken = await verifyToken(token);
    if (verifyToken.role !== TRADER)
      return res.sendStatus(403).send("Forbidden");
    next();
  } catch (error) {
    return error;
  }
};

const checkRoleFarmer = async (req, res, next) => {
  try {
    const token = await req.cookies.AccessToken;
    const verifyToken = await verifyToken(token);
    if (verifyToken.role !== FARMER)
      return res.sendStatus(403).send("Forbidden");
    next();
  } catch (error) {
    return error;
  }
};

module.exports = {
  isLoggedIn,
  checkRoleAdmin,
  checkRoleFarmer,
  checkRoleTrader,
};
