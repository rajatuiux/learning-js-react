## Day 55: Lists & Keys in React

### 1. Rendering Lists

When you want to display multiple items (like an array of data), you use **lists** in React.

You typically use JavaScript’s `.map()` method inside JSX to create multiple elements.

Example:

```javascript
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
}
```

### 2. What Are Keys?

React requires each item in a list to have a unique **key** prop.

Keys help React identify which items have changed, are added, or removed, improving performance.

### 3. Adding Keys to List Items

Modify the example to add keys:

```javascript
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
```

### 4. Choosing Keys

- Use **unique and stable** values for keys.
- Avoid using array index as key unless no better unique value is available.

### 5. Practice

<div class="practice">

1. Create a `TodoList.jsx` component that displays a list of to-do items from an array.
2. Assign proper keys to each item.
3. Modify the list by adding or removing items and observe how React updates efficiently.

</div>

### 6. Interview Tips

- Keys are required for list items to help React identify elements.
- Always use unique, stable keys, never array indexes if possible.
- Lists are rendered using `.map()` inside JSX.
