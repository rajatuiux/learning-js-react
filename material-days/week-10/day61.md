## Day 61: React Developer Tools & Debugging

### 1. What Are React Developer Tools?

* React Developer Tools is a **browser extension** available for Chrome and Firefox.
* It helps you **inspect React component trees**, **view props and state**, and **debug** React apps easily.

<div class="section-break"></div>

### 2. Installing React Developer Tools

* Visit the browser’s extension store:

  * [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* Install and enable it.
* Open DevTools and you will see a **React tab** when inspecting React apps.

<div class="section-break"></div>

### 3. Features of React Developer Tools

* **Component Tree:** Explore your React component hierarchy.
* **Props & State:** View and edit component props and state in real-time.
* **Hooks:** Inspect current hook values.
* **Profiler:** Analyze performance and rendering behavior.
* **Highlight Updates:** See which components re-render.

<div class="section-break"></div>

### 4. Debugging Tips with React DevTools

* Check if props and state have the expected values.
* Identify unnecessary re-renders causing performance issues.
* Trace data flow from parent to child components.
* Use the Profiler to optimize slow components.

<div class="section-break"></div>

### 5. Console Debugging in React

* Use `console.log()` to print variables, props, or state.
* You can debug event handlers or lifecycle hooks by logging messages.
* Example:

```js
function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
```

<div class="section-break"></div>

### 6. Practice

<div class="practice">

1. Install React Developer Tools in your browser.
2. Open your React app and explore the component tree.
3. Select a component and view its props and state.
4. Add `console.log` statements in a component to log state changes.
5. Use React DevTools Profiler to analyze performance.

</div>

<div class="section-break"></div>

### 7. Interview Tips

* Familiarity with React DevTools is important for real-world debugging.
* Understanding how to inspect props, state, and hooks helps troubleshoot issues.
* Profiling helps improve app performance by spotting unnecessary renders.

<div class="section-break"></div>
