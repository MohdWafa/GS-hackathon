const db = require("../models");
const Task = db.tasks;

exports.create = (req, res) => {
  // if (!req.body.question) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  const task = new Task({
    Questions: req.body.Questions,
    question: req.body.question,
    info: req.body.info,
    options: req.body.options
  });

  task
    .save(task)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the task."
      });
    });
};

exports.getAll = (req, res) => {
  Task.find({}, 'Questions.question.options.answer Questions.question.options.state Questions.info', function(err, someValue){
    if(err) return next(err);
    res.send(someValue);
  });
};

