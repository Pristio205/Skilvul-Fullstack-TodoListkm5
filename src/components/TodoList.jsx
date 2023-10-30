import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, removeTodo, toggleTodo } from '../redux/reducers/todoReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function TodoList() {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState('');
  const { todos } = useSelector((state) => state.todoReducer);
  const [visibilityFilter, setVisibilityFilter] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: inputTodo,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setInputTodo('');
  };

  const handleEdit = (id, newText) => {
    dispatch(editTodo({ id, title: newText }));
  };

  const handleRemove = (id) => {
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (!todoToRemove.isDone) {
      dispatch(removeTodo(id));
    }
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleFilterChange = (filter) => {
    setVisibilityFilter(filter);
  };

  const filteredTodos =
    visibilityFilter === 'all'
      ? todos
      : visibilityFilter === 'active'
      ? todos.filter((todo) => !todo.isDone)
      : todos.filter((todo) => todo.isDone);

  return (
    <div className="todo-container">
      <div className="title">
        <h1>What's the plan for today?</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="add-container">
          <input
            type="text"
            name="todo"
            placeholder="What to do"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            required
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </div>
      </form>
      <div className="filter-buttons">
        <button
          className={visibilityFilter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          ALL
        </button>
        <button
          className={visibilityFilter === 'active' ? 'active' : ''}
          onClick={() => handleFilterChange('active')}
        >
          ACTIVE
        </button>
        <button
          className={visibilityFilter === 'complete' ? 'active' : ''}
          onClick={() => handleFilterChange('complete')}
        >
          COMPLETED
        </button>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <li key={item.id} className={item.isDone ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={() => handleToggle(item.id)}
            />
            <span>{item.title}</span>
            <div className="buttons">
            {!item.isDone && (
              <button
                className="edit-button"
                onClick={() => handleEdit(item.id, prompt('Enter new text:'))}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
            {!item.isDone && (
              <button className="remove-button" onClick={() => handleRemove(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
