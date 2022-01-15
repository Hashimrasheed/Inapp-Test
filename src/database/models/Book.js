var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    bookNumber: { type: Number },
    title: { type: String },
    description: { type: String },
    auther: { type: String },
    price: { type: Number },
    shelfNumber: { type: Number },
    publishedOn: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
