const db = require("../models");
const User = db.users;

exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User({
    email: req.body.email,
    score: req.body.score
  });

  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.findMaxScorers = (req, res) => {
  User.find().sort({score:-1}).limit(3).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  });
};

