## Day 57: useEffect Basics

### 1. What is `useEffect`?

`useEffect` is a React Hook that lets you perform **side effects** in function components.

Side effects include things like:

- Fetching data from an API
- Setting up a subscription or timer
- Manually changing the DOM

### 2. Basic Usage of `useEffect`

```javascript
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means run once after initial render

  return <h1>Count: {count}</h1>;
}
```

- The function passed to `useEffect` runs **after** the component renders.
- The empty array `[]` means it runs only once (like `componentDidMount`).
- Returning a function cleans up when the component unmounts or before re-running.

### 3. Dependency Array

- You can specify dependencies in the array, so the effect runs when those values change:

```javascript
useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]);
```

### 4. Practice

<div class="practice">

1. Create a `Clock.jsx` component that shows the current time and updates every second using `useEffect`.
2. Create a component that fetches and displays user data from a fake API when mounted (you can use `https://jsonplaceholder.typicode.com/users/1`).

</div>

### 5. Interview Tips

- `useEffect` handles side effects in functional components.
- Dependency array controls when the effect runs.
- Cleanup function prevents memory leaks or unwanted effects.
