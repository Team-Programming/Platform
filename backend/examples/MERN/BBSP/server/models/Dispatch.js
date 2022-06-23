const mongoose = require("mongoose");

const DispatchSchema = new mongoose.Schema(
  {
    Number: Number,
    Status: String,
    Type: String,
    Run: String,
    Location: String,
    Originator: String,
    Responder: String,
    Equipment: String
  },
  { timestamps: true }
);

mongoose.model("Dispatch", DispatchSchema);
