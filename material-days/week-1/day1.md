<article class="day-block">

## Day 1: What is JavaScript + Variables

### 🟡 What is JavaScript?

- JavaScript is a **programming language** that helps make web pages interactive.
- It can do things like:

  - Show popups
  - Handle button clicks
  - Validate forms
  - Create dropdown menus and image sliders

- JavaScript runs **inside your browser** using a JavaScript engine (like V8 in Chrome).

### 🟡 Why do we need JavaScript?

- HTML creates the **structure** of a web page
- CSS adds **styling** to it
- JavaScript adds **interactivity and behavior**

> Think of a web page like a human:
>
> - HTML = bones and structure
> - CSS = clothes and looks
> - JavaScript = brain and actions

<div class="section-break"></div>

### 🟡 What are Variables?

- Variables are **containers** for storing information (like a name, a number, or a message).
- You can create variables to store values and use them later.

> Think of variables like jars with labels — you can name the jar and put something inside.

#### ✅ Declaring Variables: `let`, `const`, `var`

```js
let name = "Rajat"; // can be changed later
const age = 25; // cannot be changed once set
var city = "Delhi"; // old way, avoid using
```

<div class="small-grey-block">

##### 🔹 `let`

- Used for variables that **can change**
- Block-scoped (works only inside the current block)

</div>
<div class="small-grey-block">

##### 🔹 `const`

- Used for constants — values that **should not change**
- Must be initialized when declared
- Also block-scoped

</div>
<div class="small-grey-block">

##### 🔹 `var` (not recommended)

- Old keyword
- Not block-scoped → causes unexpected bugs

</div>

<div class="section-break"></div>

#### ✅ Naming Rules

- Use **letters, numbers**, `$`, or `_`
- Cannot start with a number
- Use **camelCase**: `myName`, `totalPrice`
- Be meaningful: `let score = 100;` not `let x = 100;`

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try these in your browser console or VS Code:

1. Create a variable to store your name using `let`
2. Store your age using `const`
3. Try changing the `const` value and see the error

```js
let name = "Rajat";
const age = 25;
age = 30; // This will give an error because 'const' cannot be changed
```

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 1!**

- You now know what JavaScript is
- Why it's used
- How to store values in variables

</article>
