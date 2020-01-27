/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");


module.exports = (req, res, next) => {
  
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret.jwtSecret)

    req.users = decoded.id
    next()
  } catch (err) {
  res.status(401).json({ you: 'shall not pass!' })
  }
};
