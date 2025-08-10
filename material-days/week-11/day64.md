## Day 64: `useRef` Hook

### 1. What is `useRef`?

`useRef` is a React Hook that lets you **create a mutable reference** that persists across renders.

Common uses:

- Accessing DOM elements directly.
- Storing mutable values that don’t cause re-renders when changed.

### 2. Accessing DOM Elements

Example: Focus an input when a button is clicked.

```javascript
import { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
```

- `inputRef` points to the DOM node of the input.
- Calling `inputRef.current.focus()` sets focus to the input.

### 3. Storing Mutable Values

You can store values that persist without causing re-renders.

```javascript
function Timer() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current++;
    console.log("Count:", countRef.current);
  }

  return <button onClick={handleClick}>Increase Count</button>;
}
```

### 4. Practice

<div class="practice">

1. Create a component with an input and a button to focus the input using `useRef`.
2. Create a timer component that uses `useRef` to keep track of count without re-rendering.

</div>

### 5. Interview Tips

- `useRef` gives you a way to access DOM nodes in functional components.
- Useful for storing mutable values without triggering re-renders.
- Know difference between `useRef` and `useState`.
