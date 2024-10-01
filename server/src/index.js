import express from "express";
import mongoose from "mongoose";
import mongodb from "mongodb";
import cors from "cors";
import { auth } from "./routes/auth.js";
import { profiles } from "./routes/profiles.js";
import { port, dbURI } from "./setup.js";

const app = express();

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to Database...");
    app.listen(port, () => {
      console.log(`Server: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", auth);
app.use("/api/profiles", profiles);

app.use((req, res) => {
  res.json({ message: "page not found!" });
});
