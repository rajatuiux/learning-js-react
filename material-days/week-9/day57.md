## Day 57: Forms in React

### 1. What Are Forms in React?

* Forms collect user input like text, numbers, and selections.
* React handles form inputs using **controlled components** — where React state controls the input value.

<div class="section-break"></div>

### 2. Controlled Components

* In a controlled component, the form input’s value is stored in **React state**.
* The input’s value is set via the state, and changes update the state.

Example:

```js
import React, { useState } from "react";

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

<div class="section-break"></div>

### 3. Why Use Controlled Components?

* You can **access input values instantly** in React state.
* Enables **validation, conditional UI, or formatting** while typing.
* Keeps React state as the single source of truth.

<div class="section-break"></div>

### 4. Handling Multiple Inputs

For multiple inputs, use a state object:

```js
const [formData, setFormData] = useState({ username: "", email: "" });

function handleChange(event) {
  const { name, value } = event.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
}
```

Inputs:

```js
<input name="username" value={formData.username} onChange={handleChange} />
<input name="email" value={formData.email} onChange={handleChange} />
```

<div class="section-break"></div>

### 5. Practice

<div class="practice">

1. Create a `LoginForm.jsx` component with inputs for username and password.
2. Use controlled components and state to handle input values.
3. On submit, alert the entered username and password.
4. Add basic validation: disable submit if any field is empty.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Controlled components keep form data in React state.
* Use `onChange` to update state on input changes.
* Handle form submission with `onSubmit` and prevent default behavior.
* Managing multiple inputs often involves an object in state.

<div class="section-break"></div>
