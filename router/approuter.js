let todoController = require("../controller/appcontroller")

let express = require('express')


let router = express.Router();

router.get('/',todoController.fetchTodo)
router.get('/:id',todoController.singleTodo)
router.post('/',todoController.createTodo)
router.patch('/:id',todoController.updatetTodo)
router.delete('/:id',todoController.deleteTodo)

module.exports = router