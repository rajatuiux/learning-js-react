# Day 49: Introduction to React & Setup

## 1. What is React?

React is a **JavaScript library** for building user interfaces, maintained by **Facebook (Meta)**.

* Focuses on **component-based architecture**.
* Makes UI **dynamic and interactive**.
* Popular in the **IT industry** for single-page applications (SPAs).

**Why React is used in companies:**

* **Reusable components** → Faster development.
* **Virtual DOM** → Better performance.
* **Huge community** → More resources & job opportunities.

## 2. Core Concepts

* **Components:** Reusable, independent pieces of UI.
* **JSX:** JavaScript + XML syntax for writing UI.
* **Props & State:** Ways to pass and manage data.
* **Hooks:** Functions to use React features (e.g., `useState`, `useEffect`).

<div class="section-break"></div>

## 3. Setting up React Environment

### Option 1: Using Vite (Recommended for modern projects)

```bash
# Install Vite project
npm create vite@latest my-app

# Go inside project folder
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

When prompted:

* Select **React** or **React + JavaScript**

### Option 2: Using Create React App (Older but still used)

```bash
npx create-react-app my-app
cd my-app
npm start
```

<div class="section-break"></div>

## 4. Project Structure Overview

**Typical React folder structure:**

```
my-app/
│── public/        # Static files
│── src/           # Source code
│   ├── App.jsx    # Main component
│   ├── index.js   # Entry point
│── package.json   # Dependencies & scripts
```

**Key Files:**

* **`index.js`** → Connects React to the browser.
* **`App.jsx`** → Root component.

<div class="section-break"></div>

## 5. Your First React Component

```jsx
// App.jsx
function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
```

**Run:** The browser should display `Hello, React!`.

<div class="practice">

### Practice Exercises

1. Install React using **Vite** and run the app.
2. Change the default title to **"My First React App"**.
3. Create a new component `Welcome.jsx` that returns `<h2>Welcome to React</h2>` and display it inside `App.jsx`.

</div>

<div class="section-break"></div>

## 6. Interview Tips

* **React is a library, not a framework.**
* It works using **Virtual DOM** for faster rendering.
* Components can be **Functional** (modern) or **Class-based** (older).
* Industry prefers **Functional Components + Hooks** now.
