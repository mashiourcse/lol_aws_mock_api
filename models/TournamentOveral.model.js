const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    
  id: {
    type: Number,
    required: true
  },
    team_id: {
    type: String,
    required: true
  },
  team_code: {
    type: String,
    required: true
  },
  team_name: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  rating_score: {
    type: Number,
    required: true
  }
});

const tournamentRankingSchema = new mongoose.Schema({
  tournament_id: {
    type: Number,
    required: true
  },

  tournament_name: {
    type: String,
    required: true
  },
  
  rankings: [teamSchema]
});

const TournamentOveralRanking = mongoose.model('TournamentOveralRanking', tournamentRankingSchema);

module.exports = TournamentOveralRanking;
