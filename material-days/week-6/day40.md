<article class="day-block">

## Day 40 – Mini Project: Smart Sign-Up Form

### What You’ll Build

- Checks if the **username is available**
- Shows a **password strength meter**
- Validates **email format**
- Prevents submission if any field is invalid
- Uses real-time feedback for a smoother UX

<div class="section-break"></div>

### 🛠 Project Structure

```plaintext
smart-signup-form/
│
├── index.html
├── style.css
└── script.js
```

<div class="section-break"></div>

### Step 1: Build the HTML Structure

#### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smart Sign-Up Form</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Create Your Account</h2>
      <form id="signupForm">
        <input type="text" id="username" placeholder="Username" />
        <p id="userFeedback" class="feedback"></p>

        <input type="email" id="email" placeholder="Email" />
        <p id="emailFeedback" class="feedback"></p>

        <input type="password" id="password" placeholder="Password" />
        <div id="strengthBar" class="bar"></div>
        <p id="passFeedback" class="feedback"></p>

        <button type="submit">Sign Up</button>
      </form>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

<div class="section-break"></div>

### Step 2: Add Styling with CSS

#### `style.css`

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
  width: 360px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.feedback {
  font-size: 0.8rem;
  margin: 5px 0 10px;
}

.bar {
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  margin: 8px 0;
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
```

<div class="section-break"></div>

### Step 3: JavaScript Logic for Real-Time Validation

#### `script.js`

```js
let form = document.getElementById("signupForm");
let username = document.getElementById("username");
let userFeedback = document.getElementById("userFeedback");

let email = document.getElementById("email");
let emailFeedback = document.getElementById("emailFeedback");

let password = document.getElementById("password");
let strengthBar = document.getElementById("strengthBar");
let passFeedback = document.getElementById("passFeedback");

let takenUsernames = ["admin", "rajat", "test123", "user1"];

username.addEventListener("input", function () {
  let val = username.value.trim().toLowerCase();
  if (val === "") {
    userFeedback.textContent = "";
    return;
  }
  if (takenUsernames.includes(val)) {
    userFeedback.textContent = "❌ Username already taken";
    userFeedback.style.color = "red";
  } else {
    userFeedback.textContent = "✅ Username is available";
    userFeedback.style.color = "green";
  }
});

email.addEventListener("input", function () {
  let val = email.value.trim();
  let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  if (val === "") {
    emailFeedback.textContent = "";
    return;
  }
  emailFeedback.textContent = isValid ? "✅ Valid email" : "❌ Invalid email";
  emailFeedback.style.color = isValid ? "green" : "red";
});

password.addEventListener("input", function () {
  let val = password.value;
  let strength = getStrength(val);

  strengthBar.className = "bar"; // Reset
  passFeedback.textContent = "";

  if (val.length === 0) return;

  if (strength === "weak") {
    strengthBar.classList.add("weak");
    passFeedback.textContent = "Weak password";
    passFeedback.style.color = "red";
  } else if (strength === "medium") {
    strengthBar.classList.add("medium");
    passFeedback.textContent = "Medium strength";
    passFeedback.style.color = "orange";
  } else if (strength === "strong") {
    strengthBar.classList.add("strong");
    passFeedback.textContent = "Strong password";
    passFeedback.style.color = "green";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let userTaken = takenUsernames.includes(username.value.trim().toLowerCase());
  let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  let strongPass = getStrength(password.value) === "strong";

  if (userTaken || !emailValid || !strongPass) {
    alert("Please fix the errors before submitting.");
    return;
  }

  alert("✅ Account created successfully!");
});

function getStrength(pwd) {
  let hasLower = /[a-z]/.test(pwd);
  let hasUpper = /[A-Z]/.test(pwd);
  let hasNumber = /\d/.test(pwd);
  let hasSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(pwd);
  let len = pwd.length;

  if (len < 6) return "weak";
  if (hasLower && hasUpper && hasNumber && hasSpecial && len >= 8)
    return "strong";
  if ((hasLower || hasUpper) && hasNumber && len >= 6) return "medium";
  return "weak";
}
```

<div class="section-break"></div>

### 🔄 What You Practiced

- DOM manipulation & event listeners
- Username availability logic
- Email format validation
- Password strength checker
- Real-time feedback UX
- Prevent form submission on failed validation

<div class="section-break"></div>

<div class="practice">

### Practice

Try these enhancements:

- Store user data using `localStorage`
- Add a "confirm password" field
- Toggle password visibility (eye icon)
- Show animated success message or redirect to login

</div>

🎉 **Congrats! You’ve completed Week 6.** You now have multiple projects that simulate **real product features**.

</article>
