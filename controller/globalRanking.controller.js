const team = require("../models/Team.model");
const fs = require('fs');

const {v4: uuidv4} = require("uuid");

// const getAllTeams = async(req,res)=>{
//     try {
        
//         const teams = await team.find();
        
//         if(teams){
//             res.status(201).json( { 
//                 message: "get all teams",
//                 data: teams
//             })
//         }else{
//             res.status(404).json({
//                 message: "teams not found"
//             })
//         }
        

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

const getAllTeams = async (req, res) => {
  try {
      const limit = parseInt(req.query.num);  // Limit to 20 teams
      //  const limit = parseInt(req.body.num);
      // Fetch 20 teams using the limit
      const teams = await team.find().limit(limit);

      if (teams && teams.length > 0) {
          res.status(200).json({
              message: "Successfully retrieved 20 teams",
              data: teams
          });
      } else {
          res.status(404).json({
              message: "No teams found"
          });
      }
  } catch (error) {
      res.status(500).json({
          message: error.message
      });
  }
};

// const getAllTeams = async (req, res) => {
//   try {
//       let limit = parseInt(req.params.num, 10);  // Parse the limit from req.params.num

//       // Check if the parsed limit is a valid number
//       if (isNaN(limit) || limit <= 0) {
//           return res.status(400).json({
//               message: "Invalid limit provided"
//           });
//       }

//       // Fetch teams based on the provided limit
//       const teams = await team.find().limit(limit);

//       if (teams && teams.length > 0) {
//           res.status(200).json({
//               message: `Successfully retrieved ${limit} teams`,
//               data: teams
//           });
//       } else {
//           res.status(404).json({
//               message: "No teams found"
//           });
//       }
//   } catch (error) {
//       res.status(500).json({
//           message: error.message
//       });
//   }
// };


const createTeam = async (req, res) => {
  try {
    // Read the teams from a JSON file
    const teamsData = fs.readFileSync('teams.json');
    const teams = JSON.parse(teamsData);

    const createdTeams = [];

    // Iterate over each team and save it to the database
    for (const teamData of teams) {
      const newTeam = new team({
        team_id: uuidv4(),
        team_code: teamData.team_code,
        team_name: teamData.team_name,
        rank: Number(teamData.rank)
      });
      
      await newTeam.save();
      createdTeams.push(newTeam);
    }

    res.status(201).json({
      message: "Teams enlisted successfully",
      data: createdTeams
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

// const deleteUser = async(req, res)=>{
//     try {
//         const deleteUser = await User.deleteOne({ id: req.params.id});
//         if(deleteUser){
//         const updatedUsers = await User.find();
//             res.status(201).json({
//                 message: "User deleted",
//                 data: updatedUsers
//             })
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }
module.exports = {getAllTeams, createTeam};