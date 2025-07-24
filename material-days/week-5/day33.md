<article class="day-block">

## Day 33 – DOM Navigation and Traversing

### 🌱 What You’ll Learn

* How to navigate DOM trees
* Different types of sibling/parent/child selectors
* Understanding `children`, `parentElement`, `nextElementSibling`, etc.

<div class="section-break"></div>

### 📚 Theory

#### Accessing Parent, Children, and Siblings

```js
const element = document.querySelector(".card");

// Parent
console.log(element.parentElement);

// Children
console.log(element.children);

// First child
console.log(element.firstElementChild);

// Last child
console.log(element.lastElementChild);

// Siblings
console.log(element.previousElementSibling);
console.log(element.nextElementSibling);
```

#### `parentElement` vs `parentNode`

* `parentElement` returns the parent **element** node or `null`
* `parentNode` returns the parent **node**, which can also be a text node

#### `children` vs `childNodes`

* `children` returns only element nodes
* `childNodes` returns all types of nodes (including text, comment, etc.)

<div class="section-break"></div>

### 🧪 Examples

#### Example 1: Highlighting all children

```js
const list = document.querySelector("ul");
[...list.children].forEach((li) => {
  li.style.color = "tomato";
});
```

#### Example 2: Getting parent of a clicked element

```js
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const card = this.parentElement;
  card.classList.add("active");
});
```

<div class="section-break"></div>

### 🧠 Bonus Tips

* Avoid traversing too deep into DOM — keep it simple and readable
* Always check if `.parentElement`, `.nextElementSibling` exists before using it

<div class="section-break"></div>

<div class="practice">

### Practice

1. Create a list of 5 items and use JS to:

   * Highlight every even item
   * Add a class to last item
   * Log the parent of the list

2. Build a card with a button. On clicking the button:

   * Change the background of the parent `.card`
   * Add border to the next sibling of the card

3. Try selecting the first and last `li` of a nested `ul`

</div>

</article>
