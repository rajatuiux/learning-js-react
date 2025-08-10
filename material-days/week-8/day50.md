## Day 50: JSX Basics & Expressions

### 1. What is JSX?

JSX (**JavaScript XML**) is a syntax extension for JavaScript used in React to describe the UI.

- Looks like HTML but works inside JavaScript.
- Makes code **more readable** and **easier to write**.
- Compiled to `React.createElement()` under the hood.

**Example:**

```jsx
const element = <h1>Hello, JSX!</h1>;
```

### 2. Why JSX?

- Allows mixing **HTML-like syntax** with JavaScript logic.
- Industry standard for writing React components.
- Helps with **syntax highlighting** and catching errors early.

<div class="section-break"></div>

### 3. Embedding Expressions in JSX

You can write JavaScript expressions inside `{ }`.

```jsx
const name = "Rajat";
const element = <h1>Hello, {name}!</h1>;
```

**Examples of valid expressions:**

```jsx
<h1>{2 + 2}</h1>
<p>{new Date().toLocaleDateString()}</p>
<p>{name.toUpperCase()}</p>
```

<div class="section-break"></div>

### 4. JSX Rules

1. **One parent element** must wrap everything.

```jsx
// Correct
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

2. **Use `className` instead of `class`**.
3. **Close all tags** (`<img />`, `<br />`).
4. JavaScript expressions go inside `{}`.

<div class="section-break"></div>

### 5. JSX and Functions

You can use JSX inside functions to return UI.

```jsx
function Greeting() {
  const user = "Rajat";
  return <h2>Welcome, {user}!</h2>;
}
```

<div class="practice">

#### Practice

1. Create a `Profile.jsx` component that displays your name, age, and today’s date using JSX.
2. Make a `MathBox.jsx` component that shows results of some calculations in JSX.
3. Create a `Weather.jsx` component that displays the temperature from a variable.

</div>

<div class="section-break"></div>

### 6. Interview Tips

- JSX is **syntactic sugar** for `React.createElement()`
- You **must** wrap multiple JSX elements in a single parent.
- Curly braces `{}` are used for embedding **JavaScript expressions**.
- JSX helps with **code maintainability** and **readability**.
