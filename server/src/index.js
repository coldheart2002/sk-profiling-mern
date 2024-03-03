import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { auth } from "./routes/auth.js";
import { profiles } from "./routes/profiles.js";
import { port, dbURI } from "./private.js";

const app = express();

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("connected to database...");
    app.listen(port, () => {
      console.log(`server started at localhost:${port}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

//routes
app.use("/auth", auth);
app.use("/profiles", profiles);

app.use((req, res) => {
  res.json({ message: "page not found!" });
});
