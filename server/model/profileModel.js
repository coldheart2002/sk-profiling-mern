const mongoose = require("mongoose");
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
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
