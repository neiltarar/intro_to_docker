const express = require("express");
const path = require("path");
// const sessionLogger = require("./middleware/logger");

const app = express();
const port = 3001;

let votingScores = {
    cats: 0,
    dogs: 0
}

// Start listening for HTTP requests on port 3001
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use(express.json());

app.get('/get-scores', (req, res) => {
    res.json(votingScores)
})

app.post('/update-scores', (req, res) => {
    const {cats, dogs} = req.body
    console.log(req.body)
    votingScores = req.body
    // votingScores = req.body
    res.json({
        message: {
            catVotes: cats,
            dogVotes: dogs
        }
    })
})

// app.use(express.static(path.join(__dirname, "../client/build")));

