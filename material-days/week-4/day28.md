<!-- <article class="day-block">

## Day 28: DOM Events – Making Webpages Interactive

### What Are Events?

**Events** are **actions** that happen in the browser — like:

* A user **clicks** a button
* A user **types** in a text field
* The page **loads**
* A user **moves their mouse**

JavaScript lets you **listen** for these events and **respond** when they happen.

### Common Event Types

| Event Type  | Triggered When...        |
| ----------- | ------------------------ |
| `click`     | User clicks an element   |
| `mouseover` | Mouse moves over an item |
| `keydown`   | User presses a key       |
| `submit`    | A form is submitted      |
| `input`     | Text input changes       |

### Adding an Event Listener

We use `addEventListener()` to **tell JavaScript to watch for an event**.

#### Syntax

```js
element.addEventListener("eventType", functionToRun);
```

#### Example: Button Click

```html
<button id="myBtn">Click Me</button>
```

```js
let btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
  alert("You clicked the button!");
});
```

> When the button is clicked, the anonymous function runs and shows an alert.

#### Arrow Function Version

```js
btn.addEventListener("click", () => {
  alert("Clicked!");
});
```

### Changing Content with Events

```html
<p id="message">Old text</p>
<button id="changeBtn">Change Text</button>
```

```js
let message = document.getElementById("message");
let button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  message.textContent = "Text changed!";
});
```

> `.textContent` changes the text inside an element.

### More Examples

#### Input Event

```html
<input type="text" id="nameInput" placeholder="Type your name" />
<p id="display"></p>
```

```js
let input = document.getElementById("nameInput");
let display = document.getElementById("display");

input.addEventListener("input", () => {
  display.textContent = "Hello, " + input.value;
});
```

> The text updates as you type.

#### Mouseover Event

```html
<div id="hoverBox">Hover over me</div>
```

```js
let box = document.getElementById("hoverBox");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "lightblue";
});
```

### Removing Event Listeners

You can also remove an event if needed.

```js
function greet() {
  alert("Hello!");
  btn.removeEventListener("click", greet); // removes it after one click
}

btn.addEventListener("click", greet);
```

### Best Practice: Keep Functions Separate

Instead of writing the function inside the event listener, write it outside:

```js
function sayHello() {
  alert("Hi!");
}

btn.addEventListener("click", sayHello);
```

It’s easier to read, reuse, and remove later.

<div class="practice">

### 🧠 Practice Times

1. Create a button that logs "Button clicked!" to the console.
2. Create an input field and show live character count as the user types.
3. Create a div and change its background color when mouse hovers over it.
4. Create a form with a name input and a submit button. When submitted, prevent default and show an alert with the entered name.

</div>

#### You Now Know

* What events are
* How to use `addEventListener()` to handle them
* How to respond to clicks, typing, mouse movements
* How to update DOM content based on user actions


</article> -->
