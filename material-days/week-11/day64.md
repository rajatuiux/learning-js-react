## Day 64: Simple Project 1 – To-Do List App

### 1. Project Overview

* Build a simple **To-Do List** app to practice React basics.
* Features:

  * Add new tasks
  * Display tasks in a list
  * Mark tasks as completed
  * Delete tasks

---

### 2. Components Needed

* `App.jsx` — Main component managing state and rendering others
* `TodoInput.jsx` — Input field to add new tasks
* `TodoList.jsx` — Displays the list of tasks
* `TodoItem.jsx` — Represents a single task with complete/delete options

---

### 3. Managing State

* Use `useState` in `App.jsx` to hold an array of tasks.
* Each task is an object with:

  * `id` (unique)
  * `text` (task description)
  * `completed` (boolean)

---

### 4. Basic Code Structure Example

```jsx
// App.jsx
import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleComplete(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
```

---

### 5. Practice

<div class="practice">

1. Build the `TodoInput.jsx` component with an input and button to add tasks.
2. Build the `TodoList.jsx` component that maps over tasks and renders `TodoItem`s.
3. Build the `TodoItem.jsx` component to show task text with a checkbox and delete button.
4. Implement toggling and deleting tasks via props functions.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Managing lists and state updates is common in React projects.
* Practice breaking UI into small reusable components.
* Use unique keys when rendering lists.
* Understand how to update arrays immutably.

<div class="section-break"></div>
