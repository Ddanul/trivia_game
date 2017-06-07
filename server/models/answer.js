const mongoose = require("mongoose")

const AnswerSchema = mongoose.Schema({
  correct: {type: String, require: true},
  fake1: {type: String, require: true},
  fake2: {type: String, require: true},
}, {timestamps: true})

mongoose.model("Answer", AnswerSchema)
