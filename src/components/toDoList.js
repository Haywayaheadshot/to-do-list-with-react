import React, { useState } from 'react';
import './toDoList.css';
import deleteBtn from '../images/icons/delete-btn.png';
import editBtn from '../images/icons/edit-btn.png';

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (todo, ev) => {
    // check keys if you want
    if (ev.keyCode === '13') {
      const newTodo = {
        id: Math.random(),
        todo,
      };

      setList([...list, newTodo]);

      setInput('');
    }
  };

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo,
    };

    setList([...list, newTodo]);

    setInput('');
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="to-do-list-whole">
      <h1 className="header">To Do List</h1>
      <input
        className="input-new-task"
        placeholder="Enter Task"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" className="add-task-button" onClick={() => addTodo(input)}>Add</button>
      <ul className="tasks-ul">
        {list.map((todo) => (
          <li className="Task-li" key={todo.id}>
            <section>
              <input type="checkbox" />
            </section>
            <section>
              {todo.todo}
            </section>
            <section className="task-buttons-div">
              <button className="task-buttons" type="button"><img className="edit-btn" src={editBtn} alt="Edit Task" /></button>
              <button className="task-buttons" type="button" onKeyDown={() => handleKeyDown(todo)} onClick={() => deleteTodo(todo.id)}><img className="delete-btn" src={deleteBtn} alt="Delete Task" /></button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
