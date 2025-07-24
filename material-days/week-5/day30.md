<article class="day-block">

## Day 30 – Form Validation: Required Fields and Basic Error Messages

### What is Form Validation?

**Form validation** means checking the data that the user types into a form before the form is submitted.

You do it to make sure:

* The form is **not empty**
* The user typed something **valid**
* (Later) The email or password format is correct

### Step-by-Step: Required Field Check

Let’s validate a simple name input. If the user tries to submit without typing anything, we’ll show an error.

#### HTML:

```html
<form id="nameForm">
  <input type="text" id="nameInput" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>

<p id="message"></p>
```

#### JavaScript:

```js
let form = document.getElementById("nameForm");
let input = document.getElementById("nameInput");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the page from refreshing

  let name = input.value.trim(); // .trim() removes extra spaces

  if (name === "") {
    message.textContent = "❌ Please enter your name.";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Hello, " + name + "!";
    message.style.color = "green";
  }
});
```

### 🔍 Explanation:

* `input.value.trim()` – Gets the user input and removes any extra spaces.
* `if (name === "")` – Checks if the user typed anything.
* We change the text and color of the message accordingly.

### `.trim()` – Quick Tip

The `.trim()` method removes any **extra spaces** before and after the input.

```js
let name = "   Rajat   ";
let cleanName = name.trim(); // "Rajat"
```

This is useful when users accidentally type spaces and hit submit.

### Add Multiple Inputs with Validation

Let’s say you want to validate **name** and **email** fields:

#### HTML:

```html
<form id="userForm">
  <input type="text" id="name" placeholder="Name" />
  <input type="email" id="email" placeholder="Email" />
  <button type="submit">Submit</button>
</form>

<p id="errorMsg"></p>
```

#### JavaScript:

```js
let form = document.getElementById("userForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();

  if (name === "" || email === "") {
    errorMsg.textContent = "❌ All fields are required.";
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "✅ Form submitted!";
    errorMsg.style.color = "green";
  }
});
```

<div class="practice">

### 🔸 Practice Times

1. Create a form with `username` and `password` fields.

   * Show an error message if either field is empty on submit.
   * If both are filled, show a success message.
2. Bonus: Add a character counter that shows how many characters the user typed in a message input field.
3. Try removing `.trim()` and test the form with only spaces. See what happens.

</div>

#### You Now Know:

* How to prevent empty form submissions
* How to show custom error or success messages
* How `.trim()` helps clean up user input


</article>
