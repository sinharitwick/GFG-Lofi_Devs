const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  ],
  comments: [
    {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
  ],
  // tag:{
  //     type:String,
  //    default:"General"
  // }
});

module.exports = mongoose.model("Blog", FeedSchema);