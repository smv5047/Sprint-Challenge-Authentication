const router = require('express').Router();
const usersModel = require("./users-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.post('/register', async (req, res, next) => {
  // implement registration
  const { username, password } = req.body 

  if(username && password) {
  try {
    const user = await usersModel.add(req.body)

    res.status(201).json(user)
  } catch (err) {
    next()
  }} else {
    res.status(401).json({message: "Please include a username and password"})
  }
});

router.post('/login', (req, res) => {
  // implement login
  try {
    const { username, password } = req.body;

    const user = await userModel.findBy({ username }).first();
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username
        },
        secret.jwt,
        { expiresIn: "3d" }
      );
      res.status(200).json({ token, message: `Welcome ${user.username}` });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    console.log("err-reg", err);
    next();
  }
});

module.exports = router;
