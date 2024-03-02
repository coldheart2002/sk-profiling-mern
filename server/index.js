//exports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Profile = require("./model/profileModel");
const app = express();
const dbURI = "mongodb://localhost:27017/sk-profiling";
// const dbURI =
//   "mongodb+srv://tampipininomharlito:NINOmharlito2002@cluster0.lk3hrsi.mongodb.net/";

//inits
const port = 3000;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("connected to database...");
    app.listen(port, () => {
      console.log(`server started at localhost:${port}...`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors());
app.use(express.json());

//routes

app.get("/profiles", (req, res) => {
  Profile.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/profiles/:id", (req, res) => {
  const id = req.params.id;
  Profile.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/profile", (req, res) => {
  const id = req.query.name;
  Profile.find({ lName: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.use((req, res) => {
  res.json({ message: "page not found" });
});
