module.exports = app => {
  const tasks = require("../controllers/taskcontrollers.js");

  var router = require("express").Router();

  router.post("/", tasks.create);

  router.get("/getAll", tasks.getAll);

  app.use('/api/tasks', router);
}
