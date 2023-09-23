const express = require("express");

const router = express.Router();

const {getAllTournamentRanking, getOneTournamentRanking, createTournamentRanking, updateTournamentRanking, deleteAllTournamentRankings} = require("../controller/tournamentRanking.controller");

// /tournament_ranking : GET
router.get("/", getAllTournamentRanking);

// // /tournament_ranking:id : GET
 router.get("/:tournament_id", getOneTournamentRanking);

// /tournament_ranking :POST
 router.post("/", createTournamentRanking);

// // /tournament_ranking:id PATCH
// router.patch("/:id", updateTournamentRanking);

// // /tournament_ranking:id DELETE
// router.delete("/:id", deleteTournamentRanking);

// // /tournament_ranking:id DELETE
 router.delete("/", deleteAllTournamentRankings);
module.exports = router;