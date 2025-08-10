## Day 54: Conditional Rendering in React

### 1. What is Conditional Rendering?

Conditional rendering means showing different UI elements depending on certain conditions or state.

React lets you control what gets rendered using JavaScript’s conditions.

### 2. Using `if` Statements

You can use `if` statements inside your component to decide what to render.

Example:

```javascript
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

### 3. Using Ternary Operator

For inline conditional rendering, use the ternary operator `condition ? true : false`.

Example:

```javascript
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}
```

### 4. Logical AND (`&&`) Operator

To render something only when a condition is true, use `&&`.

Example:

```javascript
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}
```

### 5. Practice

<div class="practice">

1. Create a `LoginControl.jsx` component that shows “Logout” button if logged in, otherwise shows “Login” button.
2. Create a `Message.jsx` component that displays a message only if the `show` prop is true.
3. Use ternary operators and `&&` in your components for conditional rendering.

</div>

### 6. Interview Tips

- Conditional rendering is done with JavaScript expressions inside JSX.
- Use `if`, ternary (`? :`), or logical AND (`&&`) to conditionally show UI.
- Understand how to render different components or elements based on props or state.
