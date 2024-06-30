import React from 'react';
import axios from 'axios';
import './style.css';

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://practice-k7rg.onrender.com/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          {todo.title}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
