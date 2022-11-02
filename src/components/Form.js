/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({
  input, setInput, todos, setTodos, editTodo, setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? {
      title,
      id,
      completed,
    } : todo));
    setTodos(newTodo);
    setEditTodo(null);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { title: input, completed: false, id: uuidv4() },
      ]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" className="task-input" placeholder='Enter a ToDo' value={input} onChange={onInputChange} />
        <button className="botton-add" type="submit">
            {editTodo ? 'OK' : 'Add'}
        </button>
    </form>);
};

export default Form;