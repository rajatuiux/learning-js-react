## Day 53: Handling Events in React

### 1. What are Events in React?

Events are actions triggered by the user, like clicking a button, typing in an input, or submitting a form.

React lets you handle these events using event handlers (functions) attached to JSX elements.

### 2. Adding Event Handlers

In React, you add event handlers as **camelCase** props, e.g., `onClick`, `onChange`.

Example:

```javascript
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 3. Passing Event Handlers

You can also pass inline functions:

```javascript
<button onClick={() => alert("Clicked!")}>Click Me</button>
```

### 4. Event Object

Event handlers receive an **event object** containing details about the event.

Example:

```javascript
function Input() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}
```

### 5. Preventing Default Behavior

To stop default browser behavior (like form submission), use `event.preventDefault()`.

```javascript
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 6. Practice

<div class="practice">

1. Create a `ClickLogger.jsx` component that logs “Button clicked” in the console when clicked.
2. Create a `TextInput.jsx` component that logs the current input value whenever it changes.
3. Create a simple form component that alerts the user on submit and prevents page reload.

</div>

### 7. Interview Tips

- Event handlers in React use camelCase like `onClick`.
- Always remember to prevent default behavior when needed.
- Event handlers receive an event object with details.
- You can pass inline or named functions as handlers.
