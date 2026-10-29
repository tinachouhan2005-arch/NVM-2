const todo = require('../data/data')

function fetchTodo(req,res){
    try{
        res.status(200).json({
            success:true,
            msg:"Todo data fetch successfully",
            data:todo
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:"Network Error",
            err:err.message
        })
    }
}

function singleTodo(req,res){
    try{
        let todoId = req.params.id;
        let singleTodo = todo.find(t => t.id === todoId)

        if(!singleTodo){
            return res.status(404).json({
                success:false,
                msg:`Todo id ${todoId} not found`
            })
        }
        res.status(200).json({
            success:true,
            data:singleTodo,
            msg:`Todo with id ${todoId} is fetch successfully`
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:"Network Error",
            err:err.message
        })
    }
}

//Create
function createTodo(req,res){
    try{
        let todoObj={
        todoItem:req.body.todoItem,
        id:Date.now().toString()
    }
    todo.unshift(todoObj)
    res.status(201).json({
        success:true,
        msg:`The new todo ${todoObj.todoItem} is successfully added`,
        data:todoObj
    })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network Error',
            err:err.message
        })
    }
}

//Update

function updatetTodo(req,res){
    try{
        let updateId = req.params.id
        let getIndex = todo.findIndex(t => t.id === updateId)

        if(getIndex === -1){
            return res.status(404).json({
                success:false,
                msg:`The todo is not found`                
            })
        }
        let obj =  todo.find(t => t.id === updateId)

        let updateObj ={
            ...obj,
            ...req.body,
            id:obj.id
        }
        todo[getIndex]=updateObj

        res.status(200).json({
            success:true,
            msg:'Todo is updated successfully',
            data:updateObj
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network Error',
            err:err.message
        })
    }
}

function deleteTodo(req,res){
    try{
        let removeId = req.params.id;
        let getIndex = todo.findIndex(t => t.id === removeId)

        if(getIndex === -1){
            return res.status(404).json({
                success:false,
                msg:`The todo with id ${removeId} is not found`
            })
        }
        let deleteTodo = todo.splice(getIndex,1)

        res.status(200).json({
            success:true,
            msg:'Todo is deleted successfully',
            data:deleteTodo
        })
    }catch(err){
        res.status(500).json({
            success:false,
            msg:'Network Error',
            err:err.message
        })
    }
}


module.exports={
    fetchTodo,
    singleTodo,
    createTodo,
    updatetTodo,
    deleteTodo
}