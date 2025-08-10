## Day 62: Reusable Components

### 1. What Are Reusable Components?

Reusable components are React components designed to be used multiple times across your app, often with different data.

They help avoid code duplication and make your app easier to maintain.

### 2. How to Make Components Reusable?

- Use **props** to pass data dynamically.
- Avoid hardcoding values inside the component.
- Keep components focused on a single responsibility.

### 3. Example: Reusable Button Component

```javascript
function Button({ text, onClick, style }) {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}
```

Use the `Button` component with different props:

```javascript
<Button text="Save" onClick={handleSave} style={{ backgroundColor: "green" }} />
<Button text="Cancel" onClick={handleCancel} style={{ backgroundColor: "red" }} />
```

### 4. Benefits of Reusable Components

- Easier to maintain and update.
- Consistent UI across the app.
- Promotes better organization and modularity.

### 5. Practice

<div class="practice">

1. Create a reusable `Card` component that accepts `title`, `content`, and `footer` props.
2. Use the `Card` component multiple times with different content in `App.jsx`.
3. Add a reusable `Button` component as shown above and use it in your cards.

</div>

### 6. Interview Tips

- Understand how props make components reusable.
- Be able to explain component modularity benefits.
- Know how to create flexible, customizable components.
