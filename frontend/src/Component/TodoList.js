import React from 'react';
import axios from 'axios';

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.title}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
