const mongoose = require("mongoose");

const LandSchema = new mongoose.Schema({
  location:{
    type:String,
    required:true
  },
  price:{
    type: String,
    required: true
  },
  approval:{
    type: String,
    default: false
  }
});

module.exports = mongoose.model("Land", LandSchema);