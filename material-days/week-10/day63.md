## Day 63: Creating Reusable Components

### 1. What Are Reusable Components?

* Reusable components are **self-contained, modular pieces of UI** that can be used in multiple places.
* They help **avoid code duplication** and make apps easier to maintain.

---

### 2. Designing Reusable Components

* Components should have a **single responsibility** (do one thing well).
* Use **props** to customize behavior and appearance.
* Keep them **stateless** if possible, or manage state internally if needed.

---

### 3. Example: Button Component

```jsx
function Button({ text, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}
```

Usage:

```jsx
<Button text="Submit" onClick={() => alert("Submitted!")} style={{ backgroundColor: "blue", color: "white" }} />
<Button text="Cancel" onClick={() => alert("Cancelled!")} style={{ backgroundColor: "gray", color: "black" }} />
```

---

### 4. Composing Components

* Components can use **other components** inside them.
* This helps build complex UIs by combining simple reusable parts.

Example:

```jsx
function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Card 1" content="This is card 1 content." />
      <Card title="Card 2" content="This is card 2 content." />
    </div>
  );
}
```

---

### 5. Practice

<div class="practice">

1. Create a reusable `Alert.jsx` component that accepts `message` and `type` (e.g., "success", "error") as props. Style it differently based on `type`.
2. Use the `Alert` component multiple times in `App.jsx` with different messages and types.
3. Create a reusable `InputField.jsx` component with `label`, `value`, and `onChange` props.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Reusability improves code maintainability and consistency.
* Passing props makes components flexible.
* Composing components helps build complex UIs from simple parts.

<div class="section-break"></div>
