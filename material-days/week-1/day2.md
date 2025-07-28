<article class="day-block">

## Day 2: Data Types + Type Conversion

### 🟡 What are Data Types?

- A **data type** means the kind of value a variable is holding.
- JavaScript uses **dynamic typing** — it figures out the type automatically.
- Two main categories:

  - **Primitive types** (basic values)
  - **Non-primitive types** (objects, arrays — covered later)

<div class="section-break"></div>

### 🟡 Most Common Data Types (Primitive)

| Type        | Example       | Explanation                        |
| ----------- | ------------- | ---------------------------------- |
| `String`    | "Hello"       | Text, always inside quotes         |
| `Number`    | 42, 3.14      | Numbers with or without decimals   |
| `Boolean`   | true, false   | Yes/No, On/Off                     |
| `Undefined` | let x;        | Declared but no value assigned yet |
| `Null`      | let y = null; | Intentionally empty                |

<div class="small-grey-block">

#### 🔹 String

```js
let name = "Rajat";
```

- Text wrapped in quotes
- Strings can be combined using `+`

```js
let greeting = "Hello, " + name;
console.log(greeting); // Hello, Rajat
```

</div>

<div class="small-grey-block">

#### 🔹 Number

```js
let age = 25;
let price = 9.99;
```

- You can do math: `+`, `-`, `*`, `/`

</div>

<div class="small-grey-block">

#### 🔹 Boolean

```js
let isOnline = true;
let isLoggedIn = false;
```

- Only `true` or `false`
- Useful in conditions

</div>

<div class="small-grey-block">

#### 🔹 Undefined

```js
let score;
console.log(score); // undefined
```

- Variable declared but not assigned a value

</div>
<div class="small-grey-block">

#### 🔹 Null

```js
let selectedItem = null;
```

- Assigned as intentionally empty
- Different from `undefined`

</div>

<div class="section-break"></div>

### 🟡 Checking the Data Type

Use `typeof` keyword:

```js
typeof "hello"; // "string"
typeof 99; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (weird bug)
```

<div class="section-break"></div>

### 🟡 Type Conversion (Changing types)

<div class="small-grey-block">

##### 🔹 String to Number

```js
let str = "123";
let num = Number(str);
console.log(num); // 123
```

</div>
<div class="small-grey-block">

##### 🔹 Number to String

```js
let age = 25;
let strAge = String(age);
console.log(strAge); // "25"
```

</div>
<div class="small-grey-block">

##### 🔹 Anything to Boolean

```js
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("abc"); // true
```

> ✅ Rule: `0`, `""`, `null`, `undefined`, `NaN` → **false**
> Everything else → **true**

</div>

<div class="section-break"></div>

<div class="practice">

### 🔸 Practice Time

Try these small tasks:

1. Create a variable that stores your birth year as a number
2. Convert it to a string using `String()`
3. Try `typeof` on a boolean value
4. Try converting `"abc"` to a number → what happens?

</div>

<div class="section-break"></div>

✅ **You’ve completed Day 2!**

</article>
