<article class="day-block">

## Day 11: Events – Listening to User Actions

### 🟡 What is an Event?

An **event** is something that **happens** on a webpage — like:

* A button is clicked
* A key is pressed
* A mouse is moved
* A form is submitted

JavaScript can **listen** for these events and then **run some code** in response.

This is how we make pages **interactive**.

<div class="section-break"></div>

### ✅ Basic Event Listener

```jsx
element.addEventListener("event", functionToRun);
```

You need:

* The **element** (like a button or input)
* The **event type** (like `"click"` or `"input"`)
* A **function** that runs when the event happens

<div class="section-break"></div>

### 🔹 Example: Button Click

```html
<button id="myBtn">Click Me</button>
```

```jsx
let button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

**Explanation:**

* `getElementById("myBtn")`: selects the button
* `"click"`: the event we’re watching for
* `function() { ... }`: what should happen when clicked (here, show a popup)

<div class="section-break"></div>

### ✅ Common Event Types

| Event Name    | What It Does                          |
| ------------- | ------------------------------------- |
| `"click"`     | When user clicks an element           |
| `"mouseover"` | When mouse moves over an element      |
| `"mouseout"`  | When mouse moves away from an element |
| `"input"`     | When user types in an input field     |
| `"submit"`    | When a form is submitted              |
| `"keydown"`   | When a key is pressed                 |
| `"dblclick"`  | When user double-clicks               |

<div class="section-break"></div>

### 🔹 Example: Change Text on Click

```html
<h2 id="title">Hello!</h2>
<button id="changeBtn">Change Text</button>
```

```jsx
let btn = document.getElementById("changeBtn");
let title = document.getElementById("title");

btn.addEventListener("click", function () {
  title.textContent = "You clicked the button!";
});
```

<div class="section-break"></div>

### 🔹 Example: Detect Input

```html
<input id="nameInput" placeholder="Type your name..." />
<p id="greet"></p>
```

```jsx
let input = document.getElementById("nameInput");
let greet = document.getElementById("greet");

input.addEventListener("input", function () {
  greet.textContent = "Hi " + input.value;
});
```

**Explanation:**

* The `input` event fires **every time the user types**
* We update the paragraph’s content to greet the user

<div class="section-break"></div>

### 🔹 Prevent Default Behavior

Some elements (like forms or links) do something automatically — like **refreshing the page** on submit.

You can stop that using:

```jsx
event.preventDefault();
```

**Example:**

```html
<form id="myForm">
  <input />
  <button type="submit">Submit</button>
</form>
```

```jsx
let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from reloading the page
  alert("Form submitted!");
});
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try this:

1. Create a button that changes the background color of the page when clicked.
2. Create an input field that updates a heading live as you type.
3. Create a form and show a message when it's submitted without refreshing the page.
4. Add `mouseover` and `mouseout` events to change an element’s color when hovered.

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 11!**

You now understand:

* What events are
* How to add event listeners
* How to handle clicks, typing, and submissions

</article>
