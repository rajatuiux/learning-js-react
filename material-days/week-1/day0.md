### DOM terminology

| Terminology                | Syntax Example                                   | Practical Tip / Challenge                                                                |
| -------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `.append()`                | `element.append(newNode)`                        | Adds at the **end** of the element. Can insert **text, elements, or both**.              |
| `.prepend()`               | `element.prepend(newNode)`                       | Adds at the **start** of the element.                                                    |
| `.after()`                 | `element.after(newNode)`                         | Inserts **after** the element (outside of it).                                           |
| `.before()`                | `element.before(newNode)`                        | Inserts **before** the element (outside of it).                                          |
| `.remove()`                | `element.remove()`                               | Removes the element from the DOM. Watch for null errors if element not found.            |
| `.createElement()`         | `document.createElement("div")`                  | Must append it after creation; it doesn’t auto-add to DOM.                               |
| `.classList.add()`         | `element.classList.add("className")`             | Useful to apply CSS styles dynamically.                                                  |
| `.classList.remove()`      | `element.classList.remove("className")`          | Removes specific class. Always check if class exists before removing (optional).         |
| `.classList.toggle()`      | `element.classList.toggle("active")`             | Adds class if not present; removes if present. Handy for show/hide.                      |
| `textContent`              | `element.textContent = "Hello"`                  | Replaces all text inside the element (even hidden ones).                                 |
| `innerHTML`                | `element.innerHTML = "<b>Hi</b>"`                | Renders HTML, but avoid when accepting **user input** (XSS risk).                        |
| `.value`                   | `input.value`                                    | Used to **get/set input** values from form fields.                                       |
| `.style.property`          | `element.style.color = "red"`                    | Inline style override. Best used for quick changes, not theming.                         |
| `.setAttribute()`          | `element.setAttribute("id", "box")`              | Useful when assigning dynamic attributes.                                                |
| `.getAttribute()`          | `element.getAttribute("id")`                     | Use to read an attribute value (e.g., for `href`, `src`).                                |
| `addEventListener`         | `btn.addEventListener("click", func)`            | Attaches any event (e.g., click, input, submit). Can add multiple listeners.             |
| `removeEventListener`      | `btn.removeEventListener("click", func)`         | Detaches a previously attached event. Make sure function reference matches.              |
| `preventDefault()`         | `event.preventDefault()`                         | Prevents default behavior (e.g., stop form from submitting).                             |
| `stopPropagation()`        | `event.stopPropagation()`                        | Prevents the event from bubbling up the DOM tree.                                        |
| `querySelector()`          | `document.querySelector(".my-class")`            | Selects **first matching** element. Use `#id`, `.class`, or tag.                         |
| `querySelectorAll()`       | `document.querySelectorAll("li")`                | Returns **NodeList** (array-like); use `forEach` to loop.                                |
| `getElementById()`         | `document.getElementById("myId")`                | Fastest selector. Only works for IDs.                                                    |
| `getElementsByClassName()` | `document.getElementsByClassName("box")`         | Returns live HTMLCollection. Use a loop or convert to array.                             |
| `children`                 | `element.children`                               | Returns live HTMLCollection of direct child elements.                                    |
| `firstElementChild`        | `element.firstElementChild`                      | Gets the first child that's an element.                                                  |
| `lastElementChild`         | `element.lastElementChild`                       | Gets the last child that's an element.                                                   |
| `parentElement`            | `element.parentElement`                          | Gets the parent node of a given element.                                                 |
| `event.key`                | `event.key === "Enter"`                          | Common in input fields to trigger action on key press.                                   |
| `event.target`             | `event.target`                                   | Refers to the actual element that triggered the event. Useful in delegation.             |
| `submit` event             | `form.addEventListener("submit", cb)`            | Always use `preventDefault()` to stop default submit.                                    |
| `click` event              | `element.addEventListener("click", cb)`          | Most common interaction. Attach carefully inside loops to avoid multiple bindings.       |
| `input` event              | `input.addEventListener("input", cb)`            | Triggers every time user types. Best for live validation or search features.             |
| `.textContent +=`          | `element.textContent += " More"`                 | Appends more text without replacing whole content.                                       |
| `.innerText`               | `element.innerText = "Text"`                     | Like `textContent` but respects styling like `display:none`.                             |
| `event.currentTarget`      | `event.currentTarget`                            | Refers to the element the event is attached to (not what triggered it). Useful in loops. |
| `typeof`                   | `typeof variable === "string"`                   | Check a variable’s data type (e.g., string, number, object).                             |
| `setTimeout()`             | `setTimeout(func, 1000)`                         | Executes a function after a delay (1000ms = 1 sec).                                      |
| `setInterval()`            | `setInterval(func, 2000)`                        | Repeats execution every interval (like a timer).                                         |
| `clearTimeout()`           | `clearTimeout(timeoutId)`                        | Stops a timeout from running if needed.                                                  |
| `clearInterval()`          | `clearInterval(intervalId)`                      | Stops a repeated interval.                                                               |
| `focus()`                  | `input.focus()`                                  | Brings focus to an input field. Useful for UX improvements.                              |
| `blur()`                   | `input.blur()`                                   | Removes focus from the input field.                                                      |
| `disabled`                 | `input.disabled = true`                          | Disables a form control. Set to `false` to enable.                                       |
| `checked`                  | `checkbox.checked = true`                        | Check or uncheck a checkbox programmatically.                                            |
| `hidden`                   | `element.hidden = true`                          | Hides the element. Set to `false` to unhide.                                             |
| `.matches()`               | `element.matches(".active")`                     | Checks if the element matches a CSS selector.                                            |
| `.closest()`               | `element.closest("div")`                         | Finds the nearest ancestor matching the selector.                                        |
| `.insertAdjacentHTML()`    | `element.insertAdjacentHTML("beforeend", html)`  | Inserts HTML at specific positions like `beforebegin`, `afterbegin`, etc.                |
| `DOMContentLoaded`         | `document.addEventListener("DOMContentLoaded")`  | Ensures DOM is fully loaded before running script.                                       |
| `tabIndex`                 | `element.tabIndex = 0`                           | Makes elements focusable via keyboard (important for accessibility).                     |
| `aria-label`               | `element.setAttribute("aria-label", "Close")`    | Helps screen readers understand element purpose (important for UX/Accessibility).        |
| `role`                     | `element.setAttribute("role", "button")`         | Defines ARIA role to help accessibility tools understand purpose.                        |
| `.dataset`                 | `element.dataset.id = "123"`                     | Store custom data attributes on HTML elements (used often in React for id refs).         |
| `.scrollIntoView()`        | `element.scrollIntoView({ behavior: "smooth" })` | Scrolls the element into the visible area of the browser window.                         |
| `event delegation`         | `ul.addEventListener("click", (e) => {...})`     | Attach listener on parent for dynamic child elements (e.g., li inside ul).               |
| `debounce`                 | `_.debounce(() => {...}, 300)`                   | Prevents a function from firing too often, especially on input or resize.                |
| `throttle`                 | `_.throttle(() => {...}, 500)`                   | Like debounce, but ensures execution every N ms (e.g., scroll listener).                 |
| `Fragment` (React)         | `<></>` or `<React.Fragment></React.Fragment>`   | Avoids unnecessary wrapper divs in JSX.                                                  |
| `useEffect()` (React)      | `useEffect(() => { }, [])`                       | Run side effects after render. Watch dependencies array.                                 |
| `useState()` (React)       | `const [val, setVal] = useState("")`             | Adds state in functional components.                                                     |
| `props` (React)            | `props.title`                                    | Data passed from parent to child component.                                              |
| `map()` (React)            | `{list.map(item => <li>{item}</li>)}`            | Loop through arrays to render lists in JSX.                                              |
| `key` (React)              | `<li key={item.id}>`                             | Must be unique when rendering lists. Improves diffing.                                   |
