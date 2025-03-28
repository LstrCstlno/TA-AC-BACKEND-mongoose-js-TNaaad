var express = require("express");
var app = express();
var mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/sample").catch(err => err?err : "connected")
// ;
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Connected to MongoDB');
    } catch (error) {
        handleError(error);
    }
}

connect();






var User = require("./models/user");

app.use(express.json());

app.post("/user", (req, res) => {
    var user = User.create(req.body);
})

app.get("/user", (req, res) => {
    async function find() {
        find = await User.find({});
        res.json(find)
}
find()
})

app.get("/user/:id", (req,res) => {
    var id = req.params.id;
    async function findID() {
        find = await User.findById(id);
        res.json(find)
    }
    findID();
})

app.put("/user/:id", (req,res) => {
    var id = req.params.id;
    async function update() {
        update = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.json(update)
    }
    update();
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})


// {
//     "name" : "me",
//     "email" : "mememe",
//     "sports" : ["this", "that"]
// }