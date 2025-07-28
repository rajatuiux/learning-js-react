<article class="day-block">

## Day 12: Forms and User Input

<div class="section-break"></div>

### 🟡 What are Forms?

Forms are HTML elements that **collect user input**, like:

- Names
- Emails
- Passwords
- Feedback

JavaScript lets us:

- **Read** what the user typed
- **Validate** it
- **Prevent the page from reloading**
- **Do something** with that data (like show a message or send it to a server)

<div class="section-break"></div>

### ✅ Basic Form Structure

```html
<form id="myForm">
  <input type="text" id="nameInput" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>
```

<div class="section-break"></div>

### ✅ Getting Input Value

To **get what the user typed**, use `.value`

```js
let input = document.getElementById("nameInput");
console.log(input.value); // gives the current value
```

> `.value` = the content typed inside an input field

<div class="section-break"></div>

### ✅ Handling Form Submit

If you don’t prevent it, submitting a form **refreshes the page** (which we don’t want during JavaScript practice).

Use `event.preventDefault()` to stop that:

```js
let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stops form from reloading the page

  let name = document.getElementById("nameInput").value;
  console.log("Submitted name:", name);
});
```

<div class="section-break"></div>

### ✅ Show the Name on the Page

Add a message using JavaScript:

```html
<p id="output"></p>
```

```js
let output = document.getElementById("output");
output.textContent = "Hello, " + name + "!";
```

<div class="section-break"></div>

### ✅ Accessing Other Input Types

##### 🔹 Text input

```js
document.querySelector("input").value;
```

##### 🔹 Checkbox

```js
document.querySelector("input[type='checkbox']").checked;
```

##### 🔹 Radio button

```js
document.querySelector("input[name='gender']:checked").value;
```

##### 🔹 Dropdown (select)

```js
document.querySelector("select").value;
```

<div class="section-break"></div>

### ✅ Example: Full Mini Form

```html
<form id="signupForm">
  <input type="text" id="username" placeholder="Username" />
  <input type="email" id="email" placeholder="Email" />
  <button type="submit">Sign Up</button>
</form>
<p id="message"></p>
```

```js
let form = document.getElementById("signupForm");
let message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  message.textContent = `Thanks ${user}, we've sent a confirmation to ${email}`;
});
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try this:

1. Create a form with name and email fields.
2. Show a thank-you message when submitted.
3. Add a checkbox (e.g., terms & conditions). Only allow form submit if checked.
4. Add a dropdown menu (like choosing a city). Show selected value when submitted.

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 12!**

Now you understand how to:

- Get user input with `.value`
- Handle and prevent form submission
- Work with different types of inputs

</article>
