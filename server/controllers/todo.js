const { json } = require("express");
const todo = require("../models/todo");

exports.getAllTodo = (req, res) => {
    // res.send('hello todo list')
    todo.find()
        .then((result) => res.json(result))
        .catch((err) => {
            res.status(404)
                , json({ message: "TODO NOT FOUND", error: err.message })
        })
};

exports.postCreateTodo = (req, res) => {
    todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) => {
            res.status(400)
                .json({ message: 'Failed to add todo', error: err.message })
        })
}