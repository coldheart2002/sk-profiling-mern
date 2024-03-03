import express from "express";
const router = express.Router();
import { Profile } from "../model/Profiles.js";

router.get("/", (req, res) => {
  Profile.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      if (result.length == []) {
        res.json({ message: "no data" });
      }
      res.json(result);
    })
    .catch((err) => res.json(err));
});

router.get("/search", (req, res) => {
  const id = req.query.name;
  Profile.find({ lName: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Profile.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

export const profiles = router;
