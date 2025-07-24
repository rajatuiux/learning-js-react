<article class="day-block">

## Day 31 – Email and Password Validation

### What is Format Validation?

Format validation checks **how the input looks**, not just whether it’s empty.

For example:

* Is an email **in a valid format** like `user@example.com`?
* Is a password **at least 6 characters**?

### Part 1: Email Format Validation

You can use a **simple pattern check** to see if an email is valid.

#### 1. Use HTML built-in validation

```html
<input type="email" />
```

This only works when you **don’t prevent default**, so not always useful in JS handling.

#### 2. Use JavaScript + Regular Expression (Regex)

A **regular expression (regex)** is a pattern to match strings. This one works for basic email checks:

```js
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

> It checks that:
>
> * There's something before `@`
> * Then a domain (like gmail)
> * Then a `.com`, `.in`, etc.

### Part 2: Password Rules

You can create simple rules like:

* Password must not be empty
* Minimum length: 6 characters
* (Later you can add uppercase, numbers, etc.)

### Full Example: Validate Email + Password

#### HTML:

```html
<form id="loginForm">
  <input type="text" id="email" placeholder="Enter email" />
  <input type="password" id="password" placeholder="Enter password" />
  <button type="submit">Login</button>
</form>

<p id="formMsg"></p>
```

#### JavaScript:

```js
let form = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = emailInput.value.trim();
  let password = passwordInput.value;

  if (email === "" || password === "") {
    formMsg.textContent = "❌ All fields are required.";
    formMsg.style.color = "red";
    return;
  }

  if (!isValidEmail(email)) {
    formMsg.textContent = "❌ Please enter a valid email.";
    formMsg.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMsg.textContent = "❌ Password must be at least 6 characters.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "✅ Login successful!";
  formMsg.style.color = "green";
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### 🔍 What’s Happening Here:

* **`trim()`**: To remove extra spaces
* **`isValidEmail()`**: Uses regex to test email
* **Password check**: `password.length < 6`
* Uses `return` to stop further checking if any rule fails

### Bonus Tips

* Don't try to memorize the regex — just copy it for now.
* You can customize the error messages later to be friendlier.

<div class="practice">

### Practice Times

1. Create a form with:

   * `email`, `password`, `confirm password` inputs
   * Add a rule: password and confirm password must match
2. Create a form that shows a ✅ or ❌ next to each field **live while typing**
3. Try removing `type="password"` and see how the input behaves differently

</div>

#### You Now Know:

* How to validate if email format is correct
* How to check password rules like length
* How to display helpful error or success messages


</article>
