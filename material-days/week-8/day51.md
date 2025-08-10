## Day 51: Props in React

### 1. What Are Props?

**Props** (short for “properties”) are a way to pass data **from a parent component to a child component** in React.

Think of props as function arguments but for components.

They let components be dynamic and reusable by accepting different data.

### 2. How Props Work

If you have a component like this:

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

You can pass the `name` prop when you use `<Greeting />`:

```javascript
<Greeting name="Rajat" />
```

The `Greeting` component receives `{name: "Rajat"}` as `props` and displays “Hello, Rajat!”.

### 3. Props are Read-Only

Inside the child component, you **cannot modify** the props.

They are **read-only** — used only to display or control what the component renders.

### 4. Destructuring Props

To make code cleaner, you can use JavaScript **destructuring**:

```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 5. Passing Multiple Props

You can pass many props to a component:

```javascript
function UserCard({ name, age, hobby }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}
```

Usage:

```javascript
<UserCard name="Rajat" age={27} hobby="Reading" />
```

### 6. Practice

<div class="practice">

1. Create a component `Welcome.jsx` that accepts a `name` prop and displays “Welcome, {name}!”
2. Create a `UserProfile.jsx` component that takes `name`, `age`, and `city` as props and displays them.
3. Use these components inside `App.jsx` and pass different values for props.

</div>

### 7. Interview Tips

- Props pass data **down** from parent to child components.
- Props are **immutable** inside the child component.
- Understand how to use destructuring for props.
- Passing props is how React apps communicate between components.
