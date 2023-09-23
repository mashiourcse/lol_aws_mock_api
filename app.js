const express = require('express');
const cors = require("cors");
const app = express();
require("./config/db");
const userRouter = require("./routes/users.route");
const tournamentRankingRouter= require("./routes/tournamentRanking.route");
const global_rankingsRouter = require("./routes/globalTeamRanking.route");
const tournamentOveralRouter = require("./routes/tournamentOveral.route");

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json())



app.get("/", (req,res)=>{

    res.sendFile( __dirname +"/./views/index.html");
})

//app.use("/api/users",userRouter);
app.use("/tournament_rankings",tournamentRankingRouter)
app.use("/global_rankings", global_rankingsRouter)
app.use("/team_rankings", tournamentOveralRouter)

app.use((req, res, next)=>{
    res.status(404).json({ message: "route not found."})
})

// server error handler
app.use(( err, req, res, next)=>{
    res.status(500).json({ message: "something is broke."})
})

module.exports = app;