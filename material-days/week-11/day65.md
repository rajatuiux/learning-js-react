## Day 65: useRef Hook

### 1. What is `useRef`?

* `useRef` is a React Hook that lets you **create a mutable object** that persists across renders.
* It can hold any value in its `.current` property.
* Common uses:

  * Accessing DOM elements directly.
  * Storing mutable values without causing re-renders.

<div class="section-break"></div>

### 2. Using `useRef` to Access DOM Elements

Example:

```js
import React, { useRef } from "react";

function TextInputFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

<div class="section-break"></div>

### 3. Using `useRef` to Store Mutable Values

* Unlike state, changing `.current` **does not trigger a re-render**.
* Useful for storing values that need to persist but don’t affect UI.

Example:

```js
function Timer() {
  const countRef = useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log("Count:", countRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Open console to see count</div>;
}
```

<div class="section-break"></div>

### 4. Key Points

* `useRef` is different from `useState` because it does **not cause re-renders**.
* Mostly used for:

  * Accessing/manipulating DOM nodes.
  * Storing mutable values.

<div class="section-break"></div>

### 5. Practice

<div class="practice">

1. Create a `FocusInput.jsx` component that focuses an input field when a button is clicked using `useRef`.
2. Create a component that counts seconds using `useRef` without re-rendering.
3. Compare behavior with using `useState` for the same count.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Know the difference between `useState` and `useRef`.
* Understand how to use refs to access DOM elements safely.
* `useRef` is useful for preserving mutable values without causing re-renders.

<div class="section-break"></div>
