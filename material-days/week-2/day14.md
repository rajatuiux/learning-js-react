<article class="day-block">

## Day 14: Mini Project – To-Do List App

### 🟡 Project Goal

Build a To-Do List where the user can:

* Type a task
* Click “Add Task”
* See the task appear below
* Click on a task to remove it

<div class="section-break"></div>

### ✅ HTML Structure

Create a simple layout with:

```html
<h2>My To-Do List</h2>

<input id="taskInput" placeholder="Enter a task" />
<button id="addBtn">Add Task</button>

<ul id="taskList"></ul>
```

This includes:

* A heading
* An input field for entering tasks
* A button to add tasks
* An unordered list (`<ul>`) to hold the task items

<div class="section-break"></div>

### ✅ JavaScript Functionality

```jsx
// Select elements
let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Add click event to the button
addBtn.addEventListener("click", function () {
  // Get the value from input
  let taskText = taskInput.value;

  // Don’t add empty tasks
  if (taskText === "") return;

  // Create a new list item
  let li = document.createElement("li");
  li.textContent = taskText;

  // Add event to remove task on click
  li.addEventListener("click", function () {
    li.remove();
  });

  // Add the new item to the list
  taskList.appendChild(li);

  // Clear the input box
  taskInput.value = "";
});
```

<div class="section-break"></div>

### 🔹 How it works (Step-by-step)

1. **Click** event listener on the Add button
2. Gets the value from the input box
3. If not empty, it:

   * Creates a new `<li>`
   * Adds the text
   * Adds a **click** listener to the new `<li>` (for removing it)
   * Adds it to the `<ul>`
   * Clears the input field

<div class="section-break"></div>

### ✅ Optional CSS Styling (for better looks)

```css
  body {
    font-family: sans-serif;
    max-width: 400px;
    margin: 20px auto;
    padding: 10px;
  }

  input {
    padding: 8px;
    width: 70%;
  }

  button {
    padding: 8px 12px;
    margin-left: 10px;
  }

  ul {
    margin-top: 20px;
    padding: 0;
    list-style-type: none;
  }

  li {
    background-color: #f0f0f0;
    padding: 10px;
    margin-top: 5px;
    cursor: pointer;
  }

  li:hover {
    background-color: #ffe0e0;
  }

```

<div class="section-break"></div>

<div class="practice">

### 🔸 Bonus Ideas (Optional)

If you’re feeling confident, try adding these:

* Add a **"Clear All"** button to remove all tasks at once
* Save tasks to **localStorage** so they stay after page refresh (we’ll learn this later)
* Add a checkbox to mark tasks as “done” instead of deleting

</div>

<div class="section-break"></div>

### ✅ What You Practiced

* Reading input values
* Creating and appending elements dynamically
* Event listeners (click)
* Removing elements
* DOM manipulation basics
* Writing real code and combining everything you’ve learned so far

<div class="section-break"></div>

🎉 **Congrats! You’ve finished Week 2 with a complete project.**

</article>
