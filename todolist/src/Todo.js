import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    }
  };

  const updateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingTaskIndex].text = editingText;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
    setNewTask('');
  };

  const startEditing = (index) => {
    setEditingTaskIndex(index);
    setEditingText(tasks[index].text);
  };

  const cancelEditing = () => {
    setEditingTaskIndex(null);
    setEditingText('');
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={newTask}
          style={{height: "50px"}}
          onChange={(e) => (setNewTask(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}
          disabled={ editingTaskIndex !== null ? true : false }
        />
        <button className="btn btn-primary" type="button" onClick={addTask} disabled={ editingTaskIndex !== null ? true : false }>
          Add
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{backgroundColor: index % 2 === 0 ? "lightgrey" : "#ffffff"}}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? 'text-muted' : ''
            }`}
          >
            <div className="form-check d-flex gap-3 align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id={`checkbox-${index}`}
                checked={task.completed}
                onChange={() => toggleTask(index)}
                disabled={editingTaskIndex !== null}
              />
              {editingTaskIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        updateTask();
                    }
                  }}
                />
              ) : (
                <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                  {task.completed ? <del>{task.text}</del> : task.text}
                </label>
              )}
            </div>
            <div style={{width: "120px"}} className='d-flex justify-content-between'>
              {editingTaskIndex === index ? (
                <button className="btn btn-success btn-sm" disabled={task.completed} onClick={updateTask}>
                  Save
                </button>
              ) : (
                <button className="btn btn-warning btn-sm" disabled={task.completed} onClick={() => startEditing(index)}>
                  Edit
                </button>
              )}
              {editingTaskIndex === index ? (
                    <button className="btn btn-secondary btn-sm" disabled={task.completed} type="button" onClick={cancelEditing}>
                        Cancel
                    </button>
                ) : (
                    <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>
                        Remove
                    </button>
                )}
            </div>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <div className="mt-3">
          <button className="btn btn-danger" onClick={removeAllTasks}>
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
