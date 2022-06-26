const express = require("express");
const path = require("path");
// const sessionLogger = require("./middleware/logger");

const app = express();
const port = 3001;

let votingScores = {
    cats: 30,
    dogs: 0
}

// Start listening for HTTP requests on port 3001
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use(express.json());

app.get('/voting-scores', (req, res) => {
    res.json(votingScores)
})



// app.use(express.static(path.join(__dirname, "../client/build")));

