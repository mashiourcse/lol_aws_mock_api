const TournamentRanking = require("../models/TournamentRanking.model");
const {v4: uuidv4} = require("uuid");

const getAllTournamentRanking = async(req,res)=>{
    try {
        
        const tournamentRanking = await TournamentRanking.find();
        
        if(tournamentRanking){
            res.status(201).json( { 
                message: "get all tournament ranking",
                data: tournamentRanking
            })
        }else{
            res.status(404).json({
                message: "tournament ranking not found"
            })
        }
        

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getOneTournamentRanking = async (req, res) => {
    const { tournament_id } = req.params;
    const { stage } = req.query;
  
    try {
      const tournamentRanking = await TournamentRanking.findOne({
        tournament_id,
        stage
      });
  
      if (tournamentRanking) {
        res.status(200).json({
          message: `Get tournament ranking for tournament ID ${tournament_id} and stage ${stage}`,
          data: tournamentRanking
        });
      } else {
        res.status(404).json({
          message: "Tournament ranking not found"
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };
  

const createTournamentRanking = async(req,res)=>{

  
  
  try {
      const generatedUUID = uuidv4();
        // const newRanking = new TournamentRanking({
        //     tournament_id: 324234324,
        //     tournament_name: "LCK WINTER FINAL",
        //     stage: 'final',
        //     rankings: [
        //       {
        //         team_id: '100205573495116443',
        //         team_code: 'GEN',
        //         team_name: 'Gen.G',
        //         rank: 1,
        //       },
        //       {
        //         team_id: '98767991877340524',
        //         team_code: 'T1',
        //         team_name: 'T1',
        //         rank: 2,
        //       },
             
        //     ],
        //   });

        const newRanking = new TournamentRanking({
          tournament_id: req.body.tournament_id, 
          tournament_name: req.body.tournament_name,
          stage: req.body.stage || 'final', // Use the provided stage or default to 'final'
          rankings: req.body.rankings || [] // Use the provided rankings or default to an empty array
        });
        
          newRanking.save((err) => {
            if (err) {
              console.error('Error saving ranking:', err);
              res.status(404).json({
                message: "error saving rankings"
            })
            } else {
                res.status(201).json( { 
                    message: "get all tournament ranking",
                    data: newRanking
                })
                console.log('Ranking data saved successfully.');
            }
          });
          
        

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteAllTournamentRankings = async (req, res) => {
    try {
      const result = await TournamentRanking.deleteMany({});
      
      if (result.deletedCount > 0) {
        res.status(200).json({
          message: "All tournament rankings have been deleted successfully",
          deletedCount: result.deletedCount
        });
      } else {
        res.status(404).json({
          message: "No tournament rankings found to delete"
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Failed to delete tournament rankings",
        error: error.message
      });
    }
  };
  
module.exports = {getAllTournamentRanking, createTournamentRanking, getOneTournamentRanking, deleteAllTournamentRankings};