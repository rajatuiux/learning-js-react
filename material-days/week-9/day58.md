## Day 58: useEffect Basics

### 1. What is `useEffect`?

* `useEffect` is a React Hook that lets you perform **side effects** in function components.
* Side effects include things like:

  * Fetching data from an API
  * Setting up subscriptions or timers
  * Manually changing the DOM
* It runs **after the component renders**.

---

### 2. Basic Syntax of `useEffect`

```jsx
import React, { useEffect } from "react";

function Example() {
  useEffect(() => {
    // Code here runs after every render
    console.log("Component rendered or updated");
  });

  return <div>Check the console</div>;
}
```

---

### 3. Controlling When `useEffect` Runs (Dependency Array)

You can pass a second argument — an array of dependencies — to control when the effect runs.

* Empty array `[]`: effect runs **only once**, after the first render (like `componentDidMount`).

```jsx
useEffect(() => {
  console.log("Runs once on mount");
}, []);
```

* If you put variables in the array, effect runs when those variables **change**.

```jsx
useEffect(() => {
  console.log("Runs when count changes:", count);
}, [count]);
```

* No array: effect runs **after every render**.

---

### 4. Cleaning Up Effects

If your effect creates a subscription or timer, you can **clean it up** by returning a function.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(timer); // Cleanup on unmount or before next effect
}, []);
```

---

### 5. Practice

<div class="practice">

1. Create a component `Timer.jsx` that logs “Tick” every second using `setInterval` inside `useEffect`.
2. Clean up the timer when the component unmounts.
3. Create a counter state and update it every second. Display the count.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* `useEffect` manages side effects in functional components.
* Dependency array controls when effects run.
* Always clean up subscriptions or timers to avoid memory leaks.
* Think of it as combination of lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

<div class="section-break"></div>
