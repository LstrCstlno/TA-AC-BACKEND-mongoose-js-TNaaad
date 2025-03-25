var express = require('express');
var mongoose = require(`mongoose`)

var app = express();

const connectDB = async () => {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/your_database_name');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}
};

connectDB();

app.get(`/`, (req,res)=> {
    res.send(`Hello World!`);
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})