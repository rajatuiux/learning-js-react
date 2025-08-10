## Day 65: React Router Basics

### 1. What is React Router?

React Router is a library that helps you create **single-page applications (SPA)** with navigation.

It allows you to change the URL and render different components **without reloading the page**.

### 2. Installing React Router

In your project, run:

```bash
npm install react-router-dom
```

### 3. Basic Setup

Import necessary components and wrap your app with `<BrowserRouter>`:

```javascript
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}
```

### 4. How it Works

- `<BrowserRouter>` enables routing.
- `<Routes>` contains all possible routes.
- `<Route>` defines a URL path and the component to render.
- `<Link>` creates navigation links that update the URL without reload.

### 5. Practice

<div class="practice">

1. Set up a basic React Router in your app with two pages: Home and About.
2. Add navigation links to switch between pages.
3. Add a third page (e.g., Contact) and route it accordingly.

</div>

### 6. Interview Tips

- Understand the role of `BrowserRouter`, `Routes`, `Route`, and `Link`.
- Know how SPA routing differs from traditional multi-page apps.
- Be familiar with URL parameters and nested routes (advanced topics).
