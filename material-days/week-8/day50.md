## Day 50: Understanding JSX in React

### 1. What is JSX?

JSX stands for **JavaScript XML**. It’s a syntax extension that looks like HTML but is written inside JavaScript code.

React uses JSX to make writing UI easier and more readable.

For example:

```javascript
const element = <h1>Hello, JSX!</h1>;
```

This code creates a React element that will display an `<h1>` heading with the text "Hello, JSX!".

### 2. Why Use JSX?

- Makes your UI code easier to understand — it looks like HTML.
- Lets you write HTML-like syntax and embed JavaScript logic together.
- Under the hood, JSX is converted to `React.createElement()` calls that React understands.

### 3. JSX Rules to Remember

1. **One parent element**: JSX must return a single parent element wrapping all other elements.

```javascript
return (
  <div>
    <h1>Title</h1>
    <p>Description here</p>
  </div>
);
```

2. **Self-closing tags must be closed:**

```javascript
<img src="logo.png" />
```

3. **Use `className` instead of `class`:**

```javascript
<p className="text-bold">This is bold text</p>
```

4. **Embed JavaScript expressions inside curly braces `{}`:**

```javascript
const name = "Rajat";
return <h1>Hello, {name}!</h1>;
```

### 4. Embedding JavaScript in JSX

Inside JSX, you can use any valid JavaScript expression by wrapping it in `{}`.

Examples:

```javascript
<p>{2 + 2}</p>               // Displays 4
<p>{new Date().getFullYear()}</p> // Displays current year
<p>{user.name.toUpperCase()}</p>   // Displays user’s name in uppercase
```

### 5. Styling JSX Elements

You can add styles in two ways:

- **Inline styles** using an object with camelCase properties:

```javascript
<p style={{ color: "blue", fontSize: "20px" }}>Blue Text</p>
```

- **External CSS files** imported into your component:

```javascript
import "./App.css";
```

And then use class names with `className`:

```javascript
<p className="my-text">Styled text</p>
```

### 6. Practice

<div class="practice">

1. Create a new component called `ProfileCard.jsx` that shows your name and hobby using JSX.
2. Use inline styles to make your name blue.
3. Add a variable for your age and display it inside the JSX.

</div>

### 7. Interview Tips

- JSX is not mandatory but is the preferred way to write React UI.
- JSX gets converted to `React.createElement()` calls during compilation.
- Curly braces `{}` are used to embed JavaScript expressions inside JSX.
