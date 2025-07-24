<article class="day-block">

## Day 10: Changing Text, HTML, and Styles with JavaScript

Once you've selected an element using the DOM, you can do **three main things** with it:

1. Change its **text**
2. Change its **HTML content**
3. Change its **style (CSS)**

Let’s go through all of them in a very beginner-friendly way.

<div class="section-break"></div>

### 🔹 1. Changing Text

You use `.textContent` to change the **plain text** inside an element.

#### Example:

**HTML:**

```html
<p id="greet">Hello!</p>
```

**JavaScript:**

```jsx
let para = document.getElementById("greet");
para.textContent = "Hi there!";
```

#### What happens?

* The text inside `<p>` changes from "Hello!" to "Hi there!"
* `.textContent` only handles **plain text** — no formatting (like bold or italics)

<div class="section-break"></div>

### 🔹 2. Changing HTML Content

You use `.innerHTML` to change the **HTML inside an element**. This allows you to include **tags** like `<b>`, `<i>`, etc.

#### Example:

```jsx
para.innerHTML = "<b>Hi there!</b>";
```

#### Output:

This will show bold text: **Hi there!**

<div class="section-break"></div>

### 🔹 3. Changing Styles

You can use `.style` to change **CSS directly from JavaScript**.

#### Syntax:

```jsx
element.style.property = "value";
```

#### Example:

```jsx
para.style.color = "blue";              // changes text color
para.style.fontSize = "24px";           // makes the text bigger
para.style.backgroundColor = "lightyellow"; // background color
```

> Note: Use **camelCase** instead of dashes (`-`) for CSS properties in JavaScript.
>
> * CSS → `font-size`
> * JS → `fontSize`

<div class="section-break"></div>

### 🔹 4. Add / Remove Classes

Classes are reusable styles defined in CSS.

You can use `.classList` in JavaScript to add or remove those classes.

#### HTML:

```html
<p class="greet" id="greet">Welcome</p>
```

#### CSS:

```css
.big {
  font-size: 32px;
  color: red;
}
```

#### JavaScript:

```jsx
let para = document.getElementById("greet");

para.classList.add("big");    // Adds the 'big' class
para.classList.remove("big"); // Removes the 'big' class
```

#### Why use classList?

It’s better than using `.style` when you want to:

* Add multiple styles at once
* Keep your code cleaner and separate styles in CSS files

<div class="section-break"></div>

### 🔹 Bonus: Toggle Class

```jsx
para.classList.toggle("big");
```

* If the class exists, it removes it
* If it doesn’t, it adds it

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try this:

1. Create an HTML page with a heading, paragraph, and a button.
2. Use JavaScript to:

   * Change the heading text to "JavaScript is fun!"
   * Make the paragraph text bold using `.innerHTML`
   * Change the background color of the body
   * Add a class to the button that changes its color and size

</div>

<div class="section-break"></div>

✅ You’ve now learned how to:

* Update text and HTML inside elements
* Change styles using JavaScript
* Add and remove CSS classes

</article>
