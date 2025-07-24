<article class="day-block">

## Day 35 – Mini Project: “Welcome Back” App (Form + localStorage)

### What You’ll Build

An app that:

* Asks for the user’s **name**
* Shows a **welcome message** when submitted
* **Saves the name in localStorage**
* Shows “Welcome back, \[Name]!” when the user returns

<div class="section-break"></div>

### 🛠 Project File Structure

```
welcome-back-app/
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
    <title>Welcome Back App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2 id="greeting">Welcome!</h2>

      <form id="nameForm">
        <input type="text" id="nameInput" placeholder="Enter your name" />
        <button type="submit">Save</button>
      </form>

      <button id="clearBtn">Clear Saved Name</button>
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
  background: #eef1f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 2rem;
  width: 320px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#clearBtn {
  background: #ff4d4d;
}
```

<div class="section-break"></div>

### Step 3: JavaScript – `script.js`

```js
let form = document.getElementById("nameForm");
let nameInput = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");
let clearBtn = document.getElementById("clearBtn");

// Check if name is already saved
let savedName = localStorage.getItem("username");

if (savedName) {
  greeting.textContent = "Welcome back, " + savedName + "!";
  form.style.display = "none";
} else {
  greeting.textContent = "Welcome!";
}

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  localStorage.setItem("username", name);
  greeting.textContent = "Welcome back, " + name + "!";
  form.style.display = "none";
});

// Clear saved name
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("username");
  location.reload(); // Reload the page to reset everything
});
```

<div class="section-break"></div>

### 🔍 Explanation

* `localStorage.getItem("username")` — Checks if a name was saved from before.
* If yes, it **hides the form** and shows: “Welcome back, \[name]!”
* If not, it **shows the form** to collect the name and **saves it**
* `location.reload()` — Refreshes the page to reset the app once name is cleared.

<div class="section-break"></div>

### 🔸 Bonus Ideas

1. Add a timestamp or “last visited” message.
2. Add a dark/light mode toggle using localStorage.
3. Add a “change name” feature instead of hiding the form.

<div class="section-break"></div>

<div class="practice">

### Practice

* Build and style the full Welcome Back App
* Try adding any one of the bonus features

</div>

<div class="section-break"></div>

### You Now Know

* How to build a real interactive form app
* How to persist data with `localStorage`
* How to build a simple, clean UI with real UX behavior

🎉 That’s the end of **Week 5**!

</article>
