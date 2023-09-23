require("dotenv").config();

const dev = {

    app: {
        port: process.env.PORT || 4000
    },
    db: {
        url: "mongodb+srv://masure22:atlasnowthismoment@cluster0.sarrc.mongodb.net/lol_aws_hackathon" 
    }
}

module.exports = dev;