## Day 56: Forms in React

### 1. Controlled Components

In React, form elements like `<input>`, `<textarea>`, and `<select>` can be **controlled components**. This means React controls their values via state.

### 2. Handling Input with State

Example of a controlled input:

```javascript
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

- The input’s value comes from the `name` state.
- When the user types, `handleChange` updates the state.
- On form submit, `handleSubmit` prevents default behavior and uses the state.

### 3. Handling Multiple Inputs

For forms with many inputs, use a single state object:

```javascript
const [formData, setFormData] = useState({ username: "", email: "" });

function handleChange(event) {
  const { name, value } = event.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}
```

Make sure inputs have `name` attributes matching the keys.

### 4. Practice

<div class="practice">

1. Create a `LoginForm.jsx` component with inputs for username and password, controlled by state.
2. Add form submission handling that logs the input values.
3. Add a reset button that clears all inputs.

</div>

### 5. Interview Tips

- Controlled components use React state to manage form input values.
- Always prevent default form submission behavior with `event.preventDefault()`.
- Understand how to handle multiple form inputs with one state object.
