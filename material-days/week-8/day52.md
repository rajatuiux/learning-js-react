## Day 52: Default Props & PropTypes

### 1. Why Use Default Props?

Sometimes, a parent component **might forget to pass a prop**.
Without defaults, your component could show empty or broken UI.

**Default props** let you specify fallback values when no prop is given.

---

### 2. Setting Default Props in Function Components

You can set default values **directly in the function parameter list**:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
```

If `<Greeting />` is rendered without a `name` prop, it shows **Hello, Guest!**

---

### 3. What Are PropTypes?

**PropTypes** help you **check that the props passed to components have the correct type**.

This helps catch bugs during development by giving warnings in the console.

---

### 4. How to Use PropTypes

First, install the package (if you haven’t):

```bash
npm install prop-types
```

Then import and use it in your component:

```jsx
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired, // name must be a string and is required
};
```

---

### 5. Common PropTypes

| Type      | Description              | Example                               |
| --------- | ------------------------ | ------------------------------------- |
| `string`  | Text                     | `PropTypes.string`                    |
| `number`  | Numbers                  | `PropTypes.number`                    |
| `bool`    | Boolean (`true`/`false`) | `PropTypes.bool`                      |
| `array`   | Arrays                   | `PropTypes.array`                     |
| `object`  | Objects                  | `PropTypes.object`                    |
| `func`    | Functions                | `PropTypes.func`                      |
| `node`    | React nodes or elements  | `PropTypes.node`                      |
| `arrayOf` | Array of specific type   | `PropTypes.arrayOf(PropTypes.string)` |

---

### 6. Practice

<div class="practice">

1. Create a `Welcome.jsx` component with a `name` prop. Set a default value `"Friend"` if no `name` is passed.
2. Add PropTypes to ensure `name` is a required string.
3. Use `<Welcome />` in `App.jsx` with and without the `name` prop to test default and type checking.

</div>

<div class="section-break"></div>

### 7. Interview Tips

* Default props make components **more reliable** by providing fallback values.
* PropTypes catch bugs by **validating prop types** at runtime.
* Knowing PropTypes shows attention to **code quality and robustness**.

<div class="section-break"></div>
