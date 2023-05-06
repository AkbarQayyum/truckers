const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);
  if (authHeader) {
    const token = authHeader;

    const user = jwt.verify(token, process.env.SECRET);
    console.log(user);
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = verifyUser;
