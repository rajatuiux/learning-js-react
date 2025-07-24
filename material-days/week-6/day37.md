<article class="day-block">

## Day 37 – Project: Word Counter App

### What You’ll Build

A live **word counter** that:

* Lets the user type in a text area
* Shows how many **words** are typed
* Shows how many **words are left** (e.g., 50 words max)
* Gives a warning when the limit is exceeded

<div class="section-break"></div>

### 🛠 Project Structure

```
word-counter-app/
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
    <title>Word Counter</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h2>Word Counter</h2>
      <textarea
        id="textInput"
        placeholder="Start typing..."
        rows="6"
      ></textarea>
      <p>Words: <span id="wordCount">0</span> / 50</p>
      <p id="warningMsg" class="warning"></p>
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
  background: #eef2f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 2rem;
  width: 360px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
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
let textInput = document.getElementById("textInput");
let wordCount = document.getElementById("wordCount");
let warningMsg = document.getElementById("warningMsg");

const MAX_WORDS = 50;

textInput.addEventListener("input", function () {
  let text = textInput.value.trim();

  // Split words by space and filter out empty strings
  let words = text.split(/\s+/).filter(word => word.length > 0);
  let count = words.length;

  wordCount.textContent = count;

  if (count > MAX_WORDS) {
    warningMsg.textContent = "❌ Word limit exceeded!";
    wordCount.style.color = "red";
  } else {
    warningMsg.textContent = "";
    wordCount.style.color = "black";
  }
});
```

<div class="section-break"></div>

### 🔍 Explanation

* `text.split(/\s+/)`: splits the text by one or more spaces
* `.filter(word => word.length > 0)`: removes empty words caused by double spaces
* `count > MAX_WORDS`: triggers the limit warning

<div class="section-break"></div>

### 🔸 Practice Challenge (Optional)

* Show a “words remaining” count (`MAX_WORDS - currentCount`)
* Prevent typing more words once limit is reached (advanced)
* Add a submit button and disable it when over the limit

<div class="section-break"></div>

<div class="practice">

### Practice

* Build and test the full word counter app
* Show remaining word count
* Try disabling further typing beyond the limit

</div>

</article>
