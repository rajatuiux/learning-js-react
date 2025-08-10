<article class="day-block">

## Day 36 – Project: Character Counter App

### What You’ll Build

A live character counter that:

- Lets the user type a message
- Shows the number of characters typed
- Warns when a limit (like 100) is crossed

<div class="section-break"></div>

### 🛠 Project Structure

```
character-counter/
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
    <title>Character Counter</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Live Character Counter</h2>
      <textarea
        id="message"
        placeholder="Type your message..."
        rows="6"
      ></textarea>
      <p><span id="charCount">0</span>/100 characters</p>
      <p id="warning" class="warning"></p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

<div class="section-break"></div>

### Step 2: CSS – `style.css`

```css
body {
  font-family: sans-serif;
  background: #f4f4f4;
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
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 100%;
  padding: 10px;
  resize: none;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.warning {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}
```

<div class="section-break"></div>

### Step 3: JavaScript – `script.js`

```js
let messageBox = document.getElementById("message");
let charCount = document.getElementById("charCount");
let warning = document.getElementById("warning");

const MAX_CHARS = 100;

messageBox.addEventListener("input", function () {
  let currentLength = messageBox.value.length;
  charCount.textContent = currentLength;

  if (currentLength > MAX_CHARS) {
    warning.textContent = "❌ You have exceeded the character limit!";
    charCount.style.color = "red";
  } else {
    warning.textContent = "";
    charCount.style.color = "black";
  }
});
```

<div class="section-break"></div>

### 🔍 Explanation

- `messageBox.value.length`: counts characters typed
- The number is updated in `charCount` every time the user types
- When characters exceed 100, it shows a warning in red

<div class="section-break"></div>

### Concepts Practiced

- DOM element selection
- Real-time input handling with `input` event
- Dynamic UI updates
- Clean JavaScript project setup

<div class="section-break"></div>

### 🔸 Challenge (Optional)

- Add a remaining characters count like `100 - currentLength`
- Disable form submit if over limit
- Make limit customizable

<div class="section-break"></div>

<div class="practice">

### Practice

- Build and test the full character counter app
- Add the remaining character feature
- Try making the limit a user input value

</div>

</article>
