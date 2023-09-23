const express = require("express");

const router = express.Router();
const {getAllTeams, createTeam} = require("../controller/globalRanking.controller");

// // /global_rankings
router.get("/", getAllTeams);

// // /global_rankings
router.post("/", createTeam);
// router.delete("/", deleteGlobalRankings);
// router.put("/", editGlobalRankings)
module.exports = router;