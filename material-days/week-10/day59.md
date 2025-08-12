## Day 59: Component Lifecycle in Functional Components

### 1. What is Component Lifecycle?

* Lifecycle means **different stages a component goes through** from creation to removal.
* Class components have lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
* Functional components use **Hooks** like `useEffect` to manage lifecycle behavior.

---

### 2. Lifecycle Stages in Functional Components

| Stage      | What Happens                                      | How to Handle in Functional Components                          |
| ---------- | ------------------------------------------------- | --------------------------------------------------------------- |
| Mounting   | Component is created and added to the DOM         | `useEffect` with empty dependency array `[]` runs once on mount |
| Updating   | Component re-renders due to state or props change | `useEffect` with specific dependencies                          |
| Unmounting | Component is removed from the DOM                 | Cleanup function returned from `useEffect`                      |

---

### 3. Example: Using `useEffect` for Lifecycle

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component will unmount");
    };
  }, []); // Runs once on mount, cleans on unmount

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // Runs on count updates

  return <div>Count: {count}</div>;
}
```

---

### 4. Key Points

* `useEffect(() => { ... }, [])` → Runs once after first render (mount).
* Cleanup function inside `useEffect` runs before unmounting or before next effect run.
* Effects with dependencies run when those dependencies change.

---

### 5. Practice

<div class="practice">

1. Create a component `LifecycleDemo.jsx` that logs messages on mount, update, and unmount using `useEffect`.
2. Add a button to toggle showing or hiding `LifecycleDemo` in `App.jsx`.
3. Observe console logs when mounting, updating state, and unmounting.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Functional components use `useEffect` to mimic class lifecycle methods.
* Remember to clean up side effects in `useEffect` to avoid memory leaks.
* Understand when effects run based on dependency arrays.

<div class="section-break"></div>
