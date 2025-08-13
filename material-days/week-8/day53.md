## Day 53: Introduction to State and useState Hook

### 1. What is State in React?

- **State** is data that a component **manages itself** and can change over time.
- Unlike **props** (which come from parents and are read-only), **state is local and mutable** inside a component.
- State controls how the UI looks and behaves based on user actions or other factors.

<div class="section-break"></div>

### 2. Why Use State?

- To create **interactive components**.
- Examples:

  - A counter that increases when a button is clicked.
  - Showing/hiding parts of the UI.
  - Storing user input in a form.

<div class="section-break"></div>

### 3. Introducing `useState` Hook

React provides the **`useState` hook** to add state to function components.

Syntax:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

- `count` is the current state value.
- `setCount` is a function to update the state.
- Calling `setCount` triggers React to **re-render** the component with the updated value.

<div class="section-break"></div>

### 4. Rules for Using `useState`

- Call `useState` **inside** React function components or custom hooks only.
- You can have multiple `useState` calls for different pieces of state.
- The initial state can be any data type: number, string, array, object, etc.

<div class="section-break"></div>

### 5. Practice

<div class="practice">

1. Create a `Counter.jsx` component with a button to increase a number.
2. Initialize the state to 0 using `useState`.
3. On button click, increase the count by 1.
4. Use the `Counter` component inside `App.jsx`.

</div>

<div class="section-break"></div>

### 6. Interview Tips

- `useState` adds **state to functional components**.
- State updates cause **component re-renders**.
- The setter function **replaces** the old state.
- State is **local and isolated** to the component.

<div class="section-break"></div>