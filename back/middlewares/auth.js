const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedeToken = jwt.verify(token, "SECRET_TOKEN");
    const userId = decodedeToken.userId;
    req.auth = {
      userId: userId,
    };
  } catch (error) {
    res.status(401).json({ error });
  }
};
