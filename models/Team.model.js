const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
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
    }
  });

  const team = mongoose.model('team', teamSchema);
  module.exports = team;