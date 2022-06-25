const express = require("express");
const path = require("path");
// const sessionLogger = require("./middleware/logger");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});