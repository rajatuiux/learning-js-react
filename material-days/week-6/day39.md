<article class="day-block">

## Day 39 – Project: Password Strength Meter

### What You’ll Build

A form that:

* Lets the user type a password
* Checks how strong it is:

  * Weak: only letters or very short
  * Medium: letters + numbers
  * Strong: includes symbols, uppercase, lowercase, and is long
* Shows strength in color (red/orange/green)
* Updates in real-time as the user types

<div class="section-break"></div>

### 🛠 Project Structure

```
password-strength-meter/
│
├── index.html
├── style.css
└── script.js
```

<div class="section-break"></div>

### Step 1: HTML – `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Strength Meter</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Create a Password</h2>
      <input type="password" id="passwordInput" placeholder="Enter password" />
      <div id="strengthBar" class="bar"></div>
      <p id="strengthText"></p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

<div class="section-break"></div>

### Step 2: CSS – `style.css`

```css
body {
  font-family: Arial, sans-serif;
  background: #f3f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: #fff;
  padding: 2rem;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.bar {
  height: 10px;
  width: 100%;
  background: #ddd;
  border-radius: 5px;
  margin-top: 10px;
}

.bar.weak {
  background: red;
}

.bar.medium {
  background: orange;
}

.bar.strong {
  background: green;
}

#strengthText {
  font-size: 0.9rem;
  margin-top: 5px;
}
```

<div class="section-break"></div>

### Step 3: JavaScript – `script.js`

```js
let passwordInput = document.getElementById("passwordInput");
let strengthBar = document.getElementById("strengthBar");
let strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", function () {
  let pwd = passwordInput.value;

  let strength = getStrength(pwd);

  // Reset styles
  strengthBar.className = "bar";
  strengthText.textContent = "";

  if (pwd.length === 0) return;

  if (strength === "weak") {
    strengthBar.classList.add("weak");
    strengthText.textContent = "Weak password";
    strengthText.style.color = "red";
  } else if (strength === "medium") {
    strengthBar.classList.add("medium");
    strengthText.textContent = "Medium strength";
    strengthText.style.color = "orange";
  } else if (strength === "strong") {
    strengthBar.classList.add("strong");
    strengthText.textContent = "Strong password";
    strengthText.style.color = "green";
  }
});

function getStrength(password) {
  let hasLower = /[a-z]/.test(password);
  let hasUpper = /[A-Z]/.test(password);
  let hasNumber = /\d/.test(password);
  let hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  let length = password.length;

  if (length < 6) return "weak";
  if (hasLower && hasUpper && hasNumber && hasSpecial && length >= 8) return "strong";
  if ((hasLower || hasUpper) && hasNumber && length >= 6) return "medium";

  return "weak";
}
```

<div class="section-break"></div>

### 🔍 Explanation

* The `getStrength()` function checks:

  * If password has lowercase, uppercase, number, special characters
  * And how long it is
* Based on the strength, the **bar changes color** and **text appears**
* Everything updates live using the `input` event

<div class="section-break"></div>

### 🔸 Optional Challenges

* Disable a “Submit” button until the password is strong
* Add tooltips explaining how to make a strong password
* Let users toggle password visibility

<div class="section-break"></div>

<div class="practice">

### Practice

* Build the password strength meter
* Customize strength rules
* Improve design and UX

</div>

</article>
