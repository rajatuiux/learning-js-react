## Day 50: Components in React (Complete Introduction)

### 1. What Are Components?

In React, **components** are the fundamental building blocks of your application’s UI.
Think of components as **small, reusable pieces of a webpage** — for example, a button, a header, or a user profile card.

In JavaScript, you might write functions that do some calculation and return a value.
In React, components are like functions that return **UI elements** (using JSX).

<div class="section-break"></div>

### 2. Why Use Components?

* **Reusability**: Write code once and reuse it in many places.
* **Organization**: Break complex UI into smaller, manageable parts.
* **Maintainability**: When you change one component, it updates everywhere it’s used.
* **Separation of Concerns**: Components isolate their own logic and UI, making code cleaner.

<div class="section-break"></div>

### 3. How to Create a Component?

Components can be written as **JavaScript functions**. The function returns JSX — a syntax that looks like HTML but works inside JavaScript.

Example of a basic component:

```js
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

This component will render the heading when used in the app.

<div class="section-break"></div>

### 4. Using Components in React

To use a component, simply write it as a custom HTML tag inside another component:

```js
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

Here, `<Welcome />` inserts the `Welcome` component’s UI.

<div class="section-break"></div>

### 5. Function vs Arrow Function Components

You can create components in two common ways:

#### Function Declaration:

```js
function Header() {
  return <h1>My Website</h1>;
}
```

#### Arrow Function Expression:

```js
const Footer = () => {
  return <footer>© 2025 My Website</footer>;
};
```

Both work the same way. Choose what feels comfortable.

<div class="section-break"></div>

### 6. Component Naming Rules

* **Start with a capital letter**: React treats components starting with uppercase as custom components.
* **Match file names with component names** for clarity (`Header.jsx` exports `Header`).
* **Components must return a single parent element** — if you return multiple sibling elements, wrap them in a `<div>` or React Fragment `<>...</>`.

<div class="section-break"></div>

### 7. Example of Multiple Components

```js
function Header() {
  return <header><h1>Welcome!</h1></header>;
}

function Footer() {
  return <footer>© 2025 My Website</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>This is the main content.</p>
      </main>
      <Footer />
    </div>
  );
}
```

<div class="section-break"></div>

### 8. Organizing Components in Folders

A good folder structure helps maintain the project:

```bash
src/  
│── App.jsx          # Main app  
│── components/      # Folder for all components  
│   ├── Header.jsx  
│   ├── Footer.jsx  
│   ├── Welcome.jsx  
│── index.css        # Styles  
│── main.jsx         # React app entry point  

```

<div class="section-break"></div>

### 9. Practice

<div class="practice">

1. Create three components: `Header.jsx`, `Content.jsx`, and `Footer.jsx`.
2. `Header.jsx` should display a website title.
3. `Content.jsx` should display a welcome message.
4. `Footer.jsx` should display copyright info.
5. Import and use these components inside `App.jsx`.

</div>

<div class="section-break"></div>

### 10. Interview Tips

* Components are **like JavaScript functions** but return UI (JSX).
* Always **capitalize component names**.
* Keep components **small and focused**.
* Organize components in folders for maintainability.
