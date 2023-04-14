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
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
      },
      comment: {
        type: String,
        required: true
      },
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  // tag:{
  //     type:String,
  //    default:"General"
  // }
});

module.exports = mongoose.model("Blog", FeedSchema);