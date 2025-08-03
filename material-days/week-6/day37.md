<article class="day-block">

## Day 37 – Project: Word Counter App (Improved Explanation)

### What You’ll Build

A live **word counter** that:

* Lets the user type in a text area
* Shows how many **words** are typed
* Shows how many **words are left** (e.g., 50 words max)
* Gives a warning when the limit is exceeded
* Optionally: prevents typing more than max words and disables submit

<div class="section-break"></div>

### 🧠 Why This Matters (Beginner-friendly)

When building forms or content editors, users often need to know how long their input is. Counting **words** is more user-friendly than characters in many cases (e.g., comments, bios, summaries). This app helps you practice:

* Reading typed input
* Breaking text into meaningful units (words)
* Updating UI live as user types
* Enforcing limits and giving clear feedback

<div class="section-break"></div>

### 🛠 Project Structure (same folder idea)

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
      <textarea id="textInput" placeholder="Start typing..." rows="6"></textarea>
      <p>
        Words: <span id="wordCount">0</span> / <span id="max">50</span>
        • Remaining: <span id="remaining">50</span>
      </p>
      <p id="warningMsg" class="warning"></p>
      <button id="submitBtn">Submit</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

<div class="section-break"></div>

### Step 2: CSS – `style.css` (kept simple)

```css
body { font-family: Arial, sans-serif; background: #eef2f7; display: flex; justify-content: center; align-items: center; height: 100vh; }
.container { background: white; padding: 2rem; width: 360px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
textarea { width: 100%; padding: 12px; font-size: 1rem; border-radius: 5px; border: 1px solid #ccc; resize: none; }
.warning { color: red; font-size: 0.9rem; margin-top: 5px; }
button { padding: 10px 15px; margin-top: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
button:disabled { background: #999; cursor: not-allowed; }
```

<div class="section-break"></div>

### Step 3: JavaScript – `script.js` with detailed explanation

```js
const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const remaining = document.getElementById("remaining");
const warningMsg = document.getElementById("warningMsg");
const submitBtn = document.getElementById("submitBtn");

const MAX_WORDS = 50;

// helper to count words: split by spaces / newlines and remove empty parts
function getWords(text) {
  // trim removes extra spaces at start/end
  // \s+ means any whitespace (space, tab, newline) repeated
  return text.trim().split(/\s+/).filter(word => word.length > 0);
}

function update() {
  const text = textInput.value;
  const words = getWords(text); // array of actual words
  const count = words.length;

  wordCount.textContent = count;
  const left = MAX_WORDS - count;
  remaining.textContent = left >= 0 ? left : 0;

  if (count > MAX_WORDS) {
    warningMsg.textContent = "❌ Word limit exceeded!";
    wordCount.style.color = "red";
    submitBtn.disabled = true; // stop submission if over limit
  } else {
    warningMsg.textContent = "";
    wordCount.style.color = "black";
    submitBtn.disabled = false;
  }
}

textInput.addEventListener("input", update);

// Optional: prevent typing after limit (hard stop) – advanced
textInput.addEventListener("keydown", function (e) {
  const words = getWords(textInput.value);
  if (words.length >= MAX_WORDS &&
      // allow backspace, arrow keys, delete, etc.
      !["Backspace", "ArrowLeft", "ArrowRight", "Delete"].includes(e.key)) {
    e.preventDefault();
  }
});

// Initial update in case there's pre-filled text
update();
```

<div class="section-break"></div>

### 🔍 Detailed Explanation (Step-by-step)

1. `text.trim()` removes extra spaces at the beginning or end so they don’t count as words.
2. `.split(/\s+/)` breaks the string into pieces wherever there is **one or more whitespace** (space, tab, newline). That gives raw word candidates.
3. `.filter(word => word.length > 0)` removes any empty strings (can happen if someone types double spaces).
4. `count > MAX_WORDS` checks if user went over the limit.
5. `submitBtn.disabled` prevents action when over limit (you can remove this if you just want warning).
6. The `keydown` listener prevents typing new words once the limit is reached but still allows navigation and deletion.

<div class="section-break"></div>

### 🧪 Extra Practice Ideas

* Show the longest word typed so far.
* Highlight repeated words (e.g., if the same word appears more than once).
* Add a "Clear" button that resets everything.
* Save the text in `localStorage` so it’s still there on refresh.

<div class="section-break"></div>

<div class="practice">

### Practice

* Build the app exactly as above.
* Try removing the hard stop and allow typing but keep warning only.
* Add a minimum word requirement before enabling submit.

</div>

<div class="section-break"></div>

### ✅ You Now Know

* How to count words correctly from free text input.
* How to handle extra spaces and avoid counting empty items.
* How to give live feedback: words used, remaining, limit exceeded.
* A simple way to stop over-typing and protect UI with disabling.

</article>
