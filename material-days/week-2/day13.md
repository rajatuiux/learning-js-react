<article class="day-block">

## Day 13: Creating and Removing Elements in the DOM

<div class="section-break"></div>

### 🟡 Why Create Elements with JavaScript?

Sometimes you want to:

- Add a new item to a list when the user submits a form
- Add a new message or notification
- Create buttons, images, cards, etc. dynamically

JavaScript lets you **create new elements**, set their content or style, and then **add them to the page**.

<div class="section-break"></div>

### ✅ 1. Creating an Element

```js
let newElement = document.createElement("tagname");
```

**Example:**

```js
let newDiv = document.createElement("div");
newDiv.textContent = "I was created using JavaScript!";
```

> This just creates the element in memory — it’s not visible on the page yet.

<div class="section-break"></div>

### ✅ 2. Adding the Element to the Page

You must add the element to an **existing element** using `.appendChild()` or `.append()`.

```js
document.body.appendChild(newDiv);
```

You can also append to any element — like a section, a list, or a div.

**Complete Example:**

```html
<div id="container"></div>
```

```js
let container = document.getElementById("container");

let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph.";

container.appendChild(newPara);
```

<div class="section-break"></div>

### ✅ 3. Creating a List Item

```html
<ul id="todoList"></ul>
```

```js
let ul = document.getElementById("todoList");

let li = document.createElement("li");
li.textContent = "Buy groceries";

ul.appendChild(li);
```

<div class="section-break"></div>

### ✅ 4. Removing Elements

To remove an element from the DOM, you can use `.remove()`

```js
let item = document.querySelector("li");
item.remove(); // This deletes it from the page
```

You can also use:

```js
item.parentNode.removeChild(item); // older method, still works
```

<div class="section-break"></div>

### ✅ 5. Creating Elements with Attributes or Classes

You can add attributes like `id`, `class`, `style`, etc.

```js
let div = document.createElement("div");
div.textContent = "Styled Box";
div.classList.add("box"); // adds class
div.setAttribute("id", "uniqueBox"); // sets id
div.style.color = "red"; // inline styling
```

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try this:

1. Add a button that adds a new `<li>` item to an existing list each time you click it.
2. Make each new list item removable when clicked.
3. Add an input field and create a new paragraph with that text on submit.
4. Style each new element with a class you define in CSS.

</div>

<div class="section-break"></div>

✅ You now know how to:

- Create HTML elements using JavaScript
- Set their content and style
- Add them to the page
- Remove them when needed

</article>
