## Day 58: Component Lifecycle in Functional Components

### 1. What is Component Lifecycle?

The **component lifecycle** refers to the different stages a React component goes through:

- Mounting: When the component is created and added to the DOM.
- Updating: When the component’s props or state change.
- Unmounting: When the component is removed from the DOM.

### 2. Lifecycle in Functional Components

In functional components, **React Hooks** like `useEffect` help manage lifecycle events.

### 3. Using `useEffect` to Mimic Lifecycle Methods

| Lifecycle Phase                | `useEffect` Usage                                   |
| ------------------------------ | --------------------------------------------------- |
| Mount (componentDidMount)      | `useEffect(() => { /* run once */ }, [])`           |
| Update (componentDidUpdate)    | `useEffect(() => { /* run on changes */ }, [deps])` |
| Unmount (componentWillUnmount) | Return a cleanup function inside `useEffect`        |

Example:

```javascript
import { useEffect } from "react";

function MyComponent({ prop }) {
  useEffect(() => {
    console.log("Component mounted or prop changed:", prop);

    return () => {
      console.log("Component will unmount or prop changed cleanup");
    };
  }, [prop]);

  return <div>{prop}</div>;
}
```

- The effect runs after first render and whenever `prop` changes.
- The cleanup runs before unmount or before the next effect.

### 4. Practice

<div class="practice">

1. Create a component that logs messages to the console when it mounts and unmounts.
2. Create a component that watches a prop and logs whenever it changes using `useEffect`.

</div>

### 5. Interview Tips

- Understand how `useEffect` replaces lifecycle methods in functional components.
- Know the significance of the dependency array and cleanup function.
