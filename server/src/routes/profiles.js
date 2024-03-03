import express from "express";
const router = express.Router();
import { Profile } from "../model/Profiles.js";

router.get("/", (req, res) => {
  Profile.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      if (result.length == []) {
        res.json(result);
      }
      res.json(result);
    })
    .catch((err) => res.json(err));
});

router.post("/create", (req, res) => {
  const profile = new Profile(req.body);

  profile
    .save()
    .then(() => {
      res.json({ message: "data saved successfully" });
    })
    .catch((err) => res.json(err));
});

router.post("/update/:id", (req, res) => {
  const { id } = req.params;

  Profile.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then(() => {
      res.json({ message: "data updated successfully" });
    })
    .catch((err) => res.json(err));
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  Profile.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: "data deleted successfully" });
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
