let users = require('./../controllers/users')
let questions = require('./../controllers/questions')

module.exports = function(app){
  app.post('/login', users.login)
  app.get("/login_status", users.check_status)
  app.get("/logout", users.logout)
  app.post('/add_question', questions.add_question)
  app.get('/all_questions', questions.all_questions)
}
