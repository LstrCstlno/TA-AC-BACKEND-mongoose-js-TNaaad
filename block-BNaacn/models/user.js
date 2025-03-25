var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    Email: {type:String, lowercase: true},
    age: {type: Number,default:0},
    password:{type:String, minimum: 5},
    createdAt: {type:Date, default:Date.now},
    favourites: {type:[Strings]}
},{timestamps: true});

var User = mongoose.model("User", addressSchema);
module.exports = User;