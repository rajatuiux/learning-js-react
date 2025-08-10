## Day 61: CSS in React

### 1. How to Add CSS in React?

You can style React components in several ways:

- **External CSS files**
- **Inline styles**
- **CSS Modules**
- **Styled Components** (advanced)

### 2. Using External CSS Files

Create a CSS file (e.g., `App.css`), write styles, and import it into your component:

```css
/* App.css */
.title {
  color: blue;
  font-size: 24px;
}
```

Import and use it in your component:

```javascript
import "./App.css";

function App() {
  return <h1 className="title">Hello, styled with CSS!</h1>;
}
```

### 3. Inline Styles

Add styles directly in JSX as an object:

```javascript
function App() {
  return <h1 style={{ color: "red", fontSize: "20px" }}>Inline Styled</h1>;
}
```

Note: Style properties use **camelCase** instead of kebab-case.

### 4. CSS Modules (Scoped CSS)

CSS Modules scope styles to components, preventing conflicts.

Create a CSS module file like `Button.module.css`:

```css
/* Button.module.css */
.button {
  background-color: green;
  color: white;
}
```

Import it in your component:

```javascript
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click me</button>;
}
```

### 5. Practice

<div class="practice">

1. Create an external CSS file and style your `App.jsx` heading.
2. Add inline styles to a paragraph element in your component.
3. Create a CSS Module for a button component and style it.

</div>

### 6. Interview Tips

- Know different ways to add CSS in React.
- Understand how CSS Modules help scope styles.
- Remember to use camelCase for inline style properties.
