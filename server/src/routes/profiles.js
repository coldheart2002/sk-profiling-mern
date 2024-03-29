import express from "express";
const router = express.Router();
import { Profile } from "../model/Profiles.js";

router.get("/", (req, res) => {
  Profile.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      if (result.length === 0) {
        return res.json({ message: "no data available", result });
      }
      res.json({ message: "all profiles fetched successfully", result });
    })
    .catch((err) => res.json(err));
});

router.get("/chartData", (req, res) => {
  const filterDataLength = (profiles, key, value) => {
    return profiles.filter((profile) => profile[key] == value).length;
  };

  Profile.find()
    .then((profiles) => {
      const dataLength = profiles.length;

      const singleCount = filterDataLength(profiles, "civilStatus", "s");
      const marriedCount = filterDataLength(profiles, "civilStatus", "m");
      const civilStatusData = [singleCount, marriedCount];

      const maleCount = filterDataLength(profiles, "sex", "m");
      const femaleCount = filterDataLength(profiles, "sex", "f");
      const sexData = [maleCount, femaleCount];

      const jhsCount = filterDataLength(
        profiles,
        "educationalAttainment",
        "junior high school"
      );
      const shsCount = filterDataLength(
        profiles,
        "educationalAttainment",
        "senior high school"
      );
      const collegeCount = filterDataLength(
        profiles,
        "educationalAttainment",
        "college"
      );
      const educationData = [jhsCount, shsCount, collegeCount];

      const notVoters = filterDataLength(
        profiles,
        "isRegisteredVoter",
        "not registered"
      );
      const skVoters = filterDataLength(
        profiles,
        "isRegisteredVoter",
        "sk election"
      );
      const nationalVoters = filterDataLength(
        profiles,
        "isRegisteredVoter",
        "national election"
      );
      const votersData = [notVoters, skVoters, nationalVoters];

      const result = {
        dataLength,
        civilStatusData,
        sexData,
        educationData,
        votersData,
      };

      res.json({
        message: "chart data fetched successfully",
        result,
      });
    })
    .catch((err) => res.json(err));
});

router.post("/new", (req, res) => {
  const profile = new Profile(req.body);

  profile
    .save()
    .then(() => {
      res.json({ message: "data saved successfully" });
    })
    .catch((err) => res.json({ message: "all fields are required", err }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Profile.findById(id)
    .then((result) =>
      res.json({ message: "profile fetched successfully", result })
    )
    .catch((err) => res.json(err));
});

router.post("/:id", (req, res) => {
  const { id } = req.params;

  Profile.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then(() => {
      res.json({ message: "profile updated successfully" });
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Profile.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: "profile deleted successfully" });
    })
    .catch((err) => res.json(err));
});

router.get("/search", (req, res) => {
  const id = req.query.name;
  Profile.find({ lName: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

export const profiles = router;
