const mongoose = require("mongoose")

// const AnswerSchema = mongoose.Schema({
//   correct: {type: String, require: true},
//   fake1
// })

const QuestionSchema = mongoose.Schema({
  question: {type: String, require: true},
  correct: {type: String, require: true},
  fake1: {type: String, require: true},
  fake2: {type: String, require: true},
}, {timestamps: true})

mongoose.model("Question", QuestionSchema)
