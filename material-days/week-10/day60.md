## Day 60: Lifting State Up

### 1. What is Lifting State Up?

* Sometimes, **two or more components need to share the same data** or state.
* Instead of duplicating state, React recommends **moving the shared state up** to the closest common parent.
* This process is called **"lifting state up"**.

<div class="section-break"></div>

### 2. Why Lift State Up?

* Ensures **single source of truth** for shared data.
* Keeps components **in sync**.
* Avoids bugs caused by duplicated or inconsistent state.

<div class="section-break"></div>

### 3. Example of Lifting State Up

Suppose two components need to know if a checkbox is checked.

#### Step 1: Move the state to the parent component

```js
function Parent() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div>
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      <Display isChecked={isChecked} />
    </div>
  );
}
```

#### Step 2: Pass state and setter down as props

```js
function Checkbox({ isChecked, setIsChecked }) {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
}

function Display({ isChecked }) {
  return <p>The checkbox is {isChecked ? "checked" : "unchecked"}.</p>;
}
```

<div class="section-break"></div>

### 4. Key Points

* The parent owns the state.
* Child components receive **state and setter functions** as props.
* Children **notify the parent** of changes via setter functions.

<div class="section-break"></div>

### 5. Practice

<div class="practice">

1. Create a parent component `ToggleApp.jsx` that manages a boolean state `isOn`.
2. Create two child components:

   * `ToggleSwitch.jsx` — displays a toggle button and changes `isOn` state.
   * `ToggleStatus.jsx` — shows whether the toggle is ON or OFF.
3. Pass state and setter to child components via props.
4. Use `ToggleApp` in `App.jsx`.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Lifting state up helps **share state between sibling components**.
* State is moved to the **closest common ancestor**.
* Components communicate via **props and callbacks**.

<div class="section-break"></div>

