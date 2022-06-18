const express = require("express");
const path = require("path");
// access app object
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});