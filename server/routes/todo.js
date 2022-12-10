const express = require('express');
const { getAllTodo, postCreateTodo } = require('../controllers/todo');
const router = express.Router({mergeParams:true});


// testing with model post and get
const todo = require("../models/todo");



// both at GET api/todo

// to get all todo
router.get('/',getAllTodo);

// to post todo to server...
//  POST api/todo
router.post('/',(req,res)=>{
    todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) => {
            res.status(400)
                .json({ message: 'Failed to add todo', error: err.message })
        })
});

router.put('/:id',(req,res)=>{
    const { id } = req.params;
    todo.findByIdAndUpdate(id,req.body)
        .then((result) => res.json({message:"Updated succefully"},result))
        .catch((err)=>{
            res.status(400)
                .json( {message: 'Failed to Update todo', error: err.message })
        })
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    todo.findByIdAndDelete(id)
        .then((result)=> res.json({message:"Deleted Succesfully",result}))
        .catch((err)=>{
            res.status(400)
                .json({message: 'Failed to Delete todo', error: err.message })
        })
});

module.exports = router;