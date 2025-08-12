## Day 56: Lists and Keys in React

### 1. What Are Lists in React?

* Lists are used to **display multiple similar items** in the UI, like tasks, users, or products.
* React lets you render lists by **mapping over arrays** to return JSX elements.

---

### 2. Rendering Lists Using `.map()`

Example:

```jsx
function GroceryList() {
  const items = ['Apples', 'Bananas', 'Oranges'];

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

This renders a `<ul>` with three list items.

---

### 3. Why Are Keys Important?

* Keys help React **identify which items have changed, added, or removed**.
* They help **optimize rendering** by uniquely identifying list elements.
* Keys should be **unique and stable** (avoid using array index as keys when possible).

---

### 4. Adding Keys to List Items

You add a `key` prop inside `.map()` for each element:

```jsx
{items.map(item => (
  <li key={item}>{item}</li>
))}
```

---

### 5. Using IDs as Keys

If list items have IDs, use those as keys for better stability:

```jsx
const todos = [
  { id: 1, task: 'Wash dishes' },
  { id: 2, task: 'Do laundry' },
];

function TodoList() {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
```

---

### 6. Practice

<div class="practice">

1. Create a `TodoList.jsx` component.
2. Use an array of tasks and render them as list items with `.map()`.
3. Add unique keys to each `<li>`.
4. Add a new task to the array and verify it renders.

</div>

<div class="section-break"></div>

### 7. Interview Tips

* Keys help React **track list elements efficiently**.
* Always provide a **unique key** prop.
* Avoid using **array indexes** as keys when possible.
* `.map()` is the standard way to render lists in React.

<div class="section-break"></div>

