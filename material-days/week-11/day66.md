## Day 66: React Router Basics

### 1. What is React Router?

* React Router is a library for **adding navigation and routing** in React applications.
* It enables you to create **single-page apps (SPAs)** with multiple views or pages without full page reloads.

---

### 2. Installing React Router

```bash
npm install react-router-dom
```

---

### 3. Basic Concepts

* **Router**: Wraps your app and manages navigation.
* **Route**: Defines a path and component to render.
* **Link**: Used to create navigational links without reloading the page.
* **Switch (v5) / Routes (v6)**: Renders the first matching route.

---

### 4. Simple Example with React Router v6

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

---

### 5. Key Points

* Use `<Router>` to enable routing.
* `<Link>` prevents page reloads, unlike regular `<a>` tags.
* `<Routes>` matches URLs to render appropriate components.
* URLs can have dynamic parameters (covered later).

---

### 6. Practice

<div class="practice">

1. Create a simple app with two pages: Home and Contact.
2. Use React Router to navigate between these pages without page reloads.
3. Add navigation links using `<Link>`.
4. Display the current URL path somewhere in the app.

</div>

<div class="section-break"></div>

### 7. Interview Tips

* Understand SPA and how React Router enables it.
* Know difference between `<a>` and `<Link>`.
* Be familiar with `BrowserRouter`, `Routes`, and `Route`.
* Routing is essential for multi-page React apps.

<div class="section-break"></div>
