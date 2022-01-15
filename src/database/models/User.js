var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String },
    password: { type: String },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
