## Day 54: Handling Events in React

### 1. What Are Events in React?

- Events are **user interactions** like clicks, typing, submitting forms.
- React allows you to handle these events to make your UI interactive.

<div class="section-break"></div>

### 2. Handling Events Syntax

- React uses **camelCase** event names: `onClick`, `onChange`, etc.
- You pass a **function** as the event handler, **not a function call**.

Example:

```js
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

<div class="section-break"></div>

### 3. Inline Event Handlers

You can also define handlers inline:

```js
<button onClick={() => alert("Clicked!")}>Click Me</button>
```

<div class="section-break"></div>

### 4. The Event Object

- Event handlers receive an **event object** that contains info about the event.
- For example, in inputs, you can get the current value with `event.target.value`.

Example:

```js
function Input() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} />;
}
```

<div class="section-break"></div>

### 5. Common React Events

| Event          | Description                  |
| -------------- | ---------------------------- |
| `onClick`      | When an element is clicked   |
| `onChange`     | When input value changes     |
| `onSubmit`     | When a form is submitted     |
| `onMouseEnter` | Mouse pointer enters element |
| `onKeyDown`    | When a key is pressed        |

<div class="section-break"></div>

### 6. Practice

<div class="practice">

1. Create `ClickLogger.jsx` with a button logging “Button was clicked” on click.
2. Create `InputLogger.jsx` with an input logging its value on every change.
3. Use both inside `App.jsx`.

</div>

<div class="section-break"></div>

### 7. Interview Tips

- Event handlers in React use **camelCase**.
- Always pass a **function reference**, not a call.
- Use the event object to get info about the event.
- Event handling makes UIs interactive and dynamic.

<div class="section-break"></div>
