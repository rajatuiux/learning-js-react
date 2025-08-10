## Day 63: Simple Project 1 – To-Do List App

### 1. Project Overview

We will build a simple **To-Do List** app that lets users:

- Add tasks
- View the list of tasks
- Mark tasks as complete (optional)

This project uses **state**, **events**, **lists**, and **conditional rendering**.

### 2. Step-by-Step Instructions

#### a. Setup State

```javascript
import { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
```

#### b. Add New Task Handler

```javascript
function handleAddTask() {
  if (newTask.trim() === "") return;
  setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  setNewTask("");
}
```

#### c. Render Input and Button

```javascript
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
```

#### d. Display Task List

```javascript
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

### 3. Optional: Mark Tasks Completed

Add a checkbox to mark tasks done, and style completed tasks differently.

### 4. Practice

<div class="practice">
1. Build the To-Do List app using the code steps above.  
2. Try adding tasks and see them appear in the list.  
3. (Optional) Add feature to mark tasks as completed.  
</div>

### 5. Interview Tips

- This project uses core React concepts: state, events, and lists.
- Be able to explain how state updates and renders UI changes.
- Practice explaining your code clearly.
