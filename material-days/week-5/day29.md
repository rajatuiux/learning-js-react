<article class="day-block">

## Day 29 – Handling Forms and User Input (Part 1)

### What is a Form?

In HTML, a **form** is used to **collect user input** — like names, emails, passwords, etc.

#### Example:

```html
<form>
  <input type="text" />
  <button>Submit</button>
</form>
```

But just adding HTML isn't enough —

We need **JavaScript** to **get the data** and **control what happens when it’s submitted.**

### Basic Steps to Handle a Form with JavaScript

1. Get a reference to the form and its inputs
2. Listen for the `submit` event
3. Prevent the default form submission
4. Access the values entered by the user
5. Do something with those values (like show them or validate them)

### Example: Simple Form Submission

#### HTML:

```html
<form id="myForm">
  <input type="text" id="username" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>

<p id="output"></p>
```

#### JavaScript:

```js
let form = document.getElementById("myForm");
let input = document.getElementById("username");
let output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  let name = input.value;
  output.textContent = "Hello, " + name + "!";
});
```

#### 🔍 Breakdown of the Code:

* `event.preventDefault()` – Stops the form from refreshing the page (which is default behavior).
* `input.value` – Gets the actual value the user typed in.
* `output.textContent = "Hello, " + name` – Displays a message on the page using the typed value.

### Tip: `value` Only Works on Input Fields

For `<input>`, `<textarea>`, and `<select>`, you get what the user typed with `.value`.

### Setting Input Values with JavaScript

You can also set values from JavaScript:

```js
input.value = "Rajat"; // Sets the input to this value
```

### Other Input Types You’ll Encounter

| Input Type       | HTML Element                                       |
| ---------------- | -------------------------------------------------- |
| Text             | `<input type="text">`                              |
| Password         | `<input type="password">`                          |
| Email            | `<input type="email">`                             |
| Number           | `<input type="number">`                            |
| Radio / Checkbox | `<input type="radio">` / `<input type="checkbox">` |
| Textarea         | `<textarea></textarea>`                            |
| Select/Dropdown  | `<select><option></option></select>`               |

We'll explore most of these in the coming days.

<div class="practice">

### 🔸 Practice Challenges

1. Create a form with a **name** and **email** input. When the form is submitted:

   * Prevent default
   * Print both values inside a `<p>`
2. Create a form with just an input. When the user types and submits:

   * If input is empty, show: `"Please enter something!"`
   * Otherwise, show: `"You entered: [value]"`

</div>

#### You Now Know:

* How forms work in HTML
* How to use JavaScript to prevent default behavior
* How to get values from input fields
* How to display them dynamically


</article>
