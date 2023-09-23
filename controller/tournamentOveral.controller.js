const tournament = require("../models/TournamentOveral.model");
const fs = require('fs');

const {v4: uuidv4} = require("uuid");

const getAllTournaments = async(req,res)=>{
    try {
        
        const tournaments = await tournament.find();
        
        if(tournaments){
            res.status(201).json( { 
                message: "get all tournaments",
                data: tournaments
            })
        }else{
            res.status(404).json({
                message: "tournaments not found"
            })
        }
        

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const createTournament = async (req, res) => {
    try {
      // Read the tournament data from the request or a JSON file
      const tournamentData = req.body; // Assuming the request body contains tournament data
      // const tournamentData = JSON.parse(fs.readFileSync('tournament.json')); // Alternatively, read from a JSON file
  
      const newTournament = new tournament(tournamentData);
  
      await newTournament.save();
  
      res.status(201).json({
        message: "Tournament created successfully",
        data: newTournament
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

// const updateUser = async(req, res)=>{
//    try {
//     const updateOneUser = await User.updateOne( {id: req.params.id}, { $set: {name: req.body.name, age: req.body.age}});

//     if(updateOneUser){
//         const afterUpdateUser = await User.find({id: req.params.id});
//         res.status(201).json( {
//             message: "User data updated",
//             data: afterUpdateUser
//         })
//     }else{
//         res.status(404).json( {
//             message: "User not found"
//         })
//     }
    
//    } catch (error) {
//     res.status(500).json({
//         message: error.message
//     })
//    }
// }

const deleteTournament = async(req, res)=>{
    try {
        const deleteTournament = await tournament.deleteMany({});
        if(deleteTournament){

            res.status(201).json({
                message: "Tournament deleted",
                
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = {getAllTournaments, createTournament, deleteTournament};