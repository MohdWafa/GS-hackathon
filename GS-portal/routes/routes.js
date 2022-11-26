module.exports = app => {
  const users = require("../controllers/controller.js");

  var router = require("express").Router();

  router.post("/", users.create);

  router.get("/scores", users.findMaxScorers);

  app.use('/api/users', router);
}
