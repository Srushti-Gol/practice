const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
  
module.exports = { getTodos, createTodo, deleteTodo };

