const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  name: {type: String, require: true},
}, {timestamps: true})

mongoose.model("User", UserSchema)
