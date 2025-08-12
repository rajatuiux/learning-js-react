## Day 62: CSS in React

### 1. How to Add CSS in React

React supports multiple ways to style components:

* **External CSS files**
* **Inline styles**
* **CSS Modules**
* **Styled Components** (third-party library, advanced)

---

### 2. Using External CSS Files

* Create a `.css` file (e.g., `App.css`).
* Import it in your component:

```jsx
import "./App.css";

function App() {
  return <h1 className="title">Hello, React!</h1>;
}
```

* Define styles in `App.css`:

```css
.title {
  color: blue;
  font-size: 24px;
}
```

---

### 3. Inline Styles

* Use the `style` prop with a JavaScript object.
* Property names use **camelCase** instead of CSS hyphen-case.

Example:

```jsx
function StyledText() {
  return <p style={{ color: "red", fontWeight: "bold" }}>Inline Styled Text</p>;
}
```

---

### 4. CSS Modules (Scoped CSS)

* CSS Modules allow CSS to be scoped to a component, avoiding global conflicts.
* Rename CSS files as `ComponentName.module.css`.
* Import styles as an object:

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.primary}>Click me</button>;
}
```

* In `Button.module.css`:

```css
.primary {
  background-color: green;
  color: white;
}
```

---

### 5. Practice

<div class="practice">

1. Create an `App.css` file and style an `<h1>` with a class. Import and use it in `App.jsx`.
2. Create a `StyledButton.jsx` component and style it using inline styles.
3. Create a `Card.module.css` file with scoped styles and use it in a `Card.jsx` component.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Know how to apply CSS using external files and inline styles.
* Understand the benefits of CSS Modules for avoiding style conflicts.
* Inline styles are useful for dynamic styling but limited in features.
* Styled Components and other CSS-in-JS libraries exist for advanced use cases.

<div class="section-break"></div>
