var express = require("express");
var mongoose = require(`mongoose`);
var app = express();
mongoose.connect("mongodb://127.0.0.1:27017/test").catch(error => handleError(error));


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

