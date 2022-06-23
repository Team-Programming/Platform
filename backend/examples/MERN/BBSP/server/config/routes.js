const MemberController = require("../controllers/MemberController");
const IncidentController = require("../controllers/IncidentController");
const GuestController = require("../controllers/GuestController");
const RunController = require("../controllers/RunController");
const LiftController = require("../controllers/LiftController");
const FeatureController = require("../controllers/FeatureController");
const DispatchController = require("../controllers/DispatchController");

module.exports = function (app) {
  // MEMBERS
  app.get("/api/index", MemberController.index);
  app.get("/api/member/all", MemberController.getMembers);
  app.post("/api/member/new", MemberController.createMember);
  app.get("/api/member/:id", MemberController.getMember);
  app.delete("/api/member/delete/:id", MemberController.deleteMember);

  // INCIDENTS
  app.get("/api/incident/all", IncidentController.getIncidents);
  app.post("/api/incident/new", IncidentController.createIncident);
  app.get("/api/incident/:id", IncidentController.getIncident);
  app.put("/api/incident/update/:id", IncidentController.updateIncident);
  app.delete("/api/incident/delete/:id", IncidentController.deleteIncident);

  // GUESTS
  app.get("/api/index", GuestController.index);
  app.get("/api/guest/all", GuestController.getGuests);
  app.post("/api/guest/new", GuestController.createGuest);
  app.get("/api/guest/:id", GuestController.getGuest);
  app.delete("/api/guest/delete/:id", GuestController.deleteGuest);

  // CONTACTS
  app.get("/api/index", GuestController.index);
  app.get("/api/guest/all", GuestController.getGuests);
  app.post("/api/guest/new", GuestController.createGuest);
  app.get("/api/guest/:id", GuestController.getGuest);
  app.delete("/api/guest/delete/:id", GuestController.deleteGuest);

  // RUNS
  app.get("/api/index", RunController.index);
  app.get("/api/run/all", RunController.getRuns);
  app.post("/api/run/new", RunController.createRun);
  app.get("/api/run/:id", RunController.getRun);
  app.delete("/api/run/delete/:id", RunController.deleteRun);

  // LIFTS
  app.get("/api/index", LiftController.index);
  app.get("/api/lift/all", LiftController.getLifts);
  app.post("/api/lift/new", LiftController.createLift);
  app.get("/api/lift/:id", LiftController.getLift);
  app.delete("/api/lift/delete/:id", LiftController.deleteLift);

  // FEATURES
  app.get("/api/index", FeatureController.index);
  app.get("/api/feature/all", FeatureController.getFeatures);
  app.post("/api/feature/new", FeatureController.createFeature);
  app.get("/api/feature/:id", FeatureController.getFeature);
  app.delete("/api/feature/delete/:id", FeatureController.deleteFeature);

  // DISPATCHES
  app.get("/api/index", DispatchController.index);
  app.get("/api/dispatch/all", DispatchController.getDispatches);
  app.post("/api/dispatch/new", DispatchController.createDispatch);
  app.get("/api/dispatch/:id", DispatchController.getDispatch);
  app.delete("/api/dispatch/delete/:id", DispatchController.deleteDispatch);

};
