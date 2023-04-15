const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { 
      type: "String",
      required: true
    },
    email: { 
      type: "String",
      required: true,
      unique: true
    },
    password: { 
      type: "String",
      required: true,
      minLength: 5
    },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    blogs: [{type: mongoose.Types.ObjectId, ref:"Blog", required:true}]
  },
  { timestaps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// const User = mongoose.model("User", userSchema);

// module.exports = User;
module.exports = mongoose.model("User", userSchema);