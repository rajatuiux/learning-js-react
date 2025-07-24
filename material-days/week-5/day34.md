<article class="day-block">

## Day 34 – DOM Manipulation Deep Dive

### 🌱 What You’ll Learn

* How to create, insert, and delete elements dynamically
* Use `createElement`, `append`, `prepend`, `remove`, etc.
* Modify content using `textContent`, `innerHTML`, and `innerText`

<div class="section-break"></div>

### 📚 Theory

#### Creating and Inserting Elements

```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";

document.body.appendChild(newDiv); // adds at the end
// or
const container = document.querySelector(".container");
container.prepend(newDiv); // adds at the beginning
```

#### Removing Elements

```js
const item = document.querySelector(".item");
item.remove();
```

#### `textContent` vs `innerText` vs `innerHTML`

* `textContent`: Gets/sets plain text (including hidden)
* `innerText`: Gets/sets text *as rendered* (excludes hidden)
* `innerHTML`: Gets/sets HTML code inside the element

```js
const box = document.querySelector(".box");
box.textContent = "New text";
box.innerHTML = "<strong>Bold text</strong>";
```

<div class="section-break"></div>

### 🧪 Examples

#### Example 1: Add items to a list dynamically

```js
const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "Item 6";
list.appendChild(newItem);
```

#### Example 2: Delete a card when clicking a delete button

```js
const delBtn = document.querySelector(".delete");
delBtn.addEventListener("click", function () {
  this.parentElement.remove();
});
```

<div class="section-break"></div>

### 🧠 Bonus Tips

* Always create elements with `createElement` and attach with `appendChild`
* Avoid using `innerHTML` for user-generated content (XSS risk)

<div class="section-break"></div>

<div class="practice">

### Practice

1. Create a button that adds a new paragraph below it every time it’s clicked.
2. Make a delete button that removes its parent `div.card`.
3. Build a list using JS only: generate an array of 5 names and render `<li>` for each.
4. Try changing content of an element using all 3: `textContent`, `innerText`, `innerHTML`

</div>

</article>
