var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:String,
    discription: String,
    tags: [String],
    createdAt: {type:Date, default: Date.now},
    likes: {type: Number, default: 0}
})

var Article = mongoose.model("Article", addressSchema);
module.exports = Article;