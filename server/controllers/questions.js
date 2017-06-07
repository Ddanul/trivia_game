let mongoose = require("mongoose")
let Question = mongoose.model("Question")

module.exports = {

  add_question: (req, res) => {
    console.log("controller question", req.body)
    let new_question = new Question(req.body)
    new_question.save()
    .then(() => {res.json(true)})
    .catch(err => {
      console.log("Question save error", err)
      res.status(500).json(err)
    })
  },
  all_questions: (req, res) => {
    console.log("getting questions")
    Question.aggregate([{$sample:{size:3}}])
    .then(question => {res.json(question)})
    .catch(err => {
      console.log("Question find error", err)
      res.status(50).json(err)
    })
  }
}
