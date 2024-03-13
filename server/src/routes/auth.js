import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/Users.js";

const router = express.Router();
const saltRounds = 10;

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await User.findOne({ username });

    if (result) {
      return res.json({ message: "username already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.json({ message: "user saved" });
  } catch (err) {
    console.log(err);
    res.json({ message: "validation failed", err });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "user doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "password doesn't match" });
    }

    const token = jwt.sign({ id: user._id }, "secret");

    res.json({ token, userId: user._id, message: "logged in successfully" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

export const auth = router;
