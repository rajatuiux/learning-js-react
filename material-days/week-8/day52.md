## Day 52: State (useState) in React

### 1. What is State?

**State** is data that **changes over time** inside a component.

Unlike props, which come from outside, state is managed **within the component** and can be updated.

State lets your UI respond to user actions, API calls, or time changes.

### 2. Using `useState` Hook

React provides the `useState` hook to add state to functional components.

Basic syntax:

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count is the state variable, setCount updates it

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- `count` is the current state value (initially 0).
- `setCount` is a function to update the state.
- When `setCount` is called, React re-renders the component with new state.

### 3. Rules of `useState`

- Call `useState` **only inside** React functional components or custom hooks.
- You can use multiple `useState` hooks for different state variables.
- Don’t modify the state variable directly; always use the setter function.

### 4. Example: Toggle Button

```javascript
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}
```

### 5. Practice

<div class="practice">

1. Create a `Counter.jsx` component that shows a number starting at 0 and a button to increment it.
2. Create a `ToggleSwitch.jsx` component that switches between “ON” and “OFF” text when clicked.
3. Use both components inside `App.jsx`.

</div>

### 6. Interview Tips

- State holds **dynamic data** inside components.
- `useState` returns a pair: the current state and a setter function.
- React re-renders components automatically when state updates.
- Never mutate state directly; always use the setter function.
