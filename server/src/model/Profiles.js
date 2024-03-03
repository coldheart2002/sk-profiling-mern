import mongoose from "mongoose";
const profileSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    mName: {
      type: String,
    },
    lName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    civilStatus: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
    },
    sex: {
      type: String,
      required: true,
    },
    educationalAttainment: {
      type: String,
      required: true,
    },
    isRegisteredVoter: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//model
export const Profile = mongoose.model("profiles", profileSchema);
