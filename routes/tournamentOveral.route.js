const express = require("express");

const router = express.Router();
const {getAllTournaments, createTournament, deleteTournament} = require("../controller/tournamentOveral.controller");

// // /team_rankings
router.get("/", getAllTournaments);

// // /team_rankings
router.post("/", createTournament);

 router.delete("/", deleteTournament);
// router.put("/", editGlobalRankings)
module.exports = router;