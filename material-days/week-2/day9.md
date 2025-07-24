<article class="day-block">

## Day 9: Selecting Elements

To change anything on the webpage using JavaScript (like text, color, or size), you must first **select the element**. Think of this like **pointing at something** on the page and saying: “This! I want to work with this!”

<div class="section-break"></div>

### 🟡 Ways to Select Elements in JavaScript

JavaScript provides multiple built-in methods to find and select elements from the HTML document.

Here are the most common and useful ones:

| Method                     | What it selects                                                               |
| -------------------------- | ----------------------------------------------------------------------------- |
| `getElementById()`         | Selects **1 element** by its `id` (only one ID allowed per page)              |
| `getElementsByClassName()` | Selects **multiple elements** by their class name (returns a collection)      |
| `getElementsByTagName()`   | Selects all elements by a given HTML tag (like `p`, `div`, `li`)              |
| `querySelector()`          | Selects the **first match** using CSS selectors (like `.class`, `#id`, `tag`) |
| `querySelectorAll()`       | Selects **all matches** using CSS selectors (returns a list of elements)      |

<div class="section-break"></div>

### 🔹 1. `getElementById()`

```html
<p id="myPara">Hello!</p>
```

```jsx
let para = document.getElementById("myPara");
console.log(para.textContent); // Output: Hello!
```

This finds the element with `id="myPara"` and stores it in a variable `para`.

<div class="section-break"></div>

### 🔹 2. `getElementsByClassName()`

```html
<p class="note">Note 1</p>
<p class="note">Note 2</p>
```

```jsx
let notes = document.getElementsByClassName("note");
console.log(notes[0].textContent); // Output: Note 1
```

Returns a list of elements. You access them like an array using `[0]`, `[1]`, etc.

<div class="section-break"></div>

### 🔹 3. `getElementsByTagName()`

```html
<p>First</p>
<p>Second</p>
```

```jsx
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length); // 2
```

<div class="section-break"></div>

### 🔹 4. `querySelector()`

```html
<p class="greeting">Hi</p>
```

```jsx
let firstGreeting = document.querySelector(".greeting");
console.log(firstGreeting.textContent); // Hi
```

Selects the **first element** that matches the CSS selector `.greeting`

You can use:

* `#id` → selects by id
* `.class` → selects by class
* `tag` → selects by tag

<div class="section-break"></div>

### 🔹 5. `querySelectorAll()`

```html
<p class="greeting">Hi 1</p>
<p class="greeting">Hi 2</p>
```

```jsx
let allGreetings = document.querySelectorAll(".greeting");
console.log(allGreetings.length); // 2
console.log(allGreetings[1].textContent); // Hi 2
```

<div class="section-break"></div>

### ✅ Which One Should I Use?

| Use case               | Best method          |
| ---------------------- | -------------------- |
| One element with `id`  | `getElementById()`   |
| First matching element | `querySelector()`    |
| All matching elements  | `querySelectorAll()` |

If you're not sure, start with `querySelector()` or `querySelectorAll()` — they’re the most flexible and modern.

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try these:

1. Create an HTML page with:

   * A heading (`<h1>`)
   * A paragraph with a class
   * A div with an ID
2. Use JavaScript to:

   * Select the heading and change its text
   * Select the paragraph using class name and change its color
   * Select the div using `querySelector()` and add a border

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 9!**

Now you understand how to:

* Select elements by ID, class, tag, or CSS selector
* Choose the best method depending on your use case
* Start interacting with parts of the web page dynamically

</article>