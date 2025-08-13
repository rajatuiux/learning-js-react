## Day 55: Conditional Rendering in React

### 1. What is Conditional Rendering?

* Conditional rendering means **showing or hiding parts of the UI based on conditions**.
* Like `if` statements in JavaScript, React lets you display different elements depending on state, props, or any logic.

<div class="section-break"></div>

### 2. Using `if` Statements

You can use normal JavaScript `if` statements **inside your component function** to decide what to return.

```js
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}
```

<div class="section-break"></div>

### 3. Using the Ternary Operator

Inside JSX, you can use the ternary operator to choose what to render:

```js
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
```

<div class="section-break"></div>

### 4. Using Logical AND (`&&`)

If you want to conditionally render something **or nothing**, use `&&`:

```js
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

If `unreadMessages.length` is 0, the message won’t show.

<div class="section-break"></div>

### 5. Practice

<div class="practice">

1. Create a `LoginControl.jsx` component with a boolean state `isLoggedIn`.
2. Render “Welcome back!” if logged in, “Please sign up.” if not.
3. Add a button to toggle `isLoggedIn` state.
4. Use `if`, ternary, or `&&` for conditional rendering.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Conditional rendering helps build **dynamic UIs**.
* Use `if`, ternary (`? :`), or logical `&&` operators based on the case.
* Return valid JSX or `null` (to render nothing).

<div class="section-break"></div>
