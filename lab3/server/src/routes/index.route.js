const Router = require("express-promise-router").default;

const todosRouter = require("./todo.route");

const router = Router();

router.use("/api/todos", todosRouter);

module.exports = router;
