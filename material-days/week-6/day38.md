<article class="day-block">

## Day 38 – Project: Real-Time Username Availability Checker

### What You’ll Build

A live checker that:

* Takes input for a **username**
* Checks instantly if it’s already taken
* Gives visual feedback like:

  * ✅ Available
  * ❌ Already taken
* Uses a **mock list of taken usernames**

<div class="section-break"></div>

### 🛠 Project Structure

```
username-checker/
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
    <title>Username Checker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Choose a Username</h2>
      <input type="text" id="usernameInput" placeholder="Enter username" />
      <p id="feedbackMsg" class="feedback"></p>
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
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 2rem;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.feedback {
  font-size: 0.9rem;
  margin-top: 6px;
}
```

<div class="section-break"></div>

### Step 3: JavaScript – `script.js`

```js
let usernameInput = document.getElementById("usernameInput");
let feedbackMsg = document.getElementById("feedbackMsg");

// Simulated database of taken usernames
let takenUsernames = ["rajat", "admin", "test123", "user1", "guest"];

usernameInput.addEventListener("input", function () {
  let entered = usernameInput.value.trim().toLowerCase();

  if (entered === "") {
    feedbackMsg.textContent = "";
    return;
  }

  if (takenUsernames.includes(entered)) {
    feedbackMsg.textContent = "❌ Username already taken.";
    feedbackMsg.style.color = "red";
  } else {
    feedbackMsg.textContent = "✅ Username is available.";
    feedbackMsg.style.color = "green";
  }
});
```

<div class="section-break"></div>

### 🔍 Explanation

* `takenUsernames` simulates usernames already registered.
* `.toLowerCase()` ensures the check is case-insensitive.
* Checks live while user types using `input` event.
* Displays colored messages immediately.

<div class="section-break"></div>

### 🔸 Optional Challenges

* Add a delay (`setTimeout`) to simulate server request.
* Allow only usernames with minimum 4 characters.
* Add a submit button and disable it if username is taken.

<div class="section-break"></div>

<div class="practice">

### Practice

* Build the username checker
* Simulate server delay
* Add submit button with logic

</div>

</article>
