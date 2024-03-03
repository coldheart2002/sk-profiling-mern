import express from "express";
import bcrypt from "bcrypt";
import { User } from "../model/Users.js";

const router = express.Router();
const saltRounds = 10; // You can adjust this value

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await User.findOne({ username });

    if (result) {
      return res.json({ message: "user already exist" });
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      password: hashedPassword, // Save the hashed password
      // Include other fields if there are any
    });

    await user.save();
    res.json({ message: "user saved" });
  } catch (err) {
    res.send(err);
  }
});

router.post("/signin", async (req, res) => {
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

    res.json({ message: "login success", user });
  } catch (err) {
    res.json(err);
  }
});

export const auth = router;
