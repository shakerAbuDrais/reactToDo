/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <Header />
            </div>
            <div>
                <Form
                input={input}
                todos={todos}
                setTodos={setTodos}
                setInput={setInput}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                />
            </div>
            <div>
                <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
            </div>
        </div>
    </div>
  );
};

export default App;
