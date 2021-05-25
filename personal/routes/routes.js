const router = require("express").Router();

function routes() {
  const users = require("./users");
  console.log('reached in routes');
  router.use("/users", users);

  return router;
}
module.exports = routes();
