const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema(
  {
    Guest_Name: String,
    Responder_Name: String,
    Incident_Info: String,
    Responders: String,
    Guest_Gear: String,
    Features: String,
    Rescue_Equipment: String,
  },
  { timestamps: true }
);

mongoose.model("Incident", IncidentSchema);
