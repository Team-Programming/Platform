const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
  {
    Latitude: Number,
    Longitude: Number
  },
  { timestamps: true }
);

mongoose.model("Location", LocationSchema);
