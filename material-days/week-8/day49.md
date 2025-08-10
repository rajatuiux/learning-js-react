## Day 49: Introduction to React & Setup

### 1. What is React?

React is a **JavaScript library** used to build user interfaces, especially for web apps. It lets you create reusable UI components that make building complex apps easier.

- Developed by Facebook, widely used in the industry.
- Focuses on building **component-based** UI.
- Makes your app faster by updating only parts of the page that change.

### 2. Why React?

- **Reusable components:** Build once, use many times.
- **Declarative:** You describe what UI should look like, React takes care of updates.
- **Large community & ecosystem:** Tons of libraries, tools, and job opportunities.
- **Used by big companies:** Facebook, Instagram, Netflix, Airbnb, etc.

### 3. Setting up React with Vite

Since you already have Node.js and npm installed, let’s use **Vite** — a fast, modern build tool — to create a React project.

Open your terminal and run:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

This will:

- Create a folder `my-app` with React + Vite setup.
- Install all dependencies.
- Start a development server you can view at `http://localhost:5173` (or the URL shown).

<div class="small-grey-block">

```
my-app/
│── public/        # Static files like images
│── src/           # React source code
│   ├── App.jsx    # Main React component
│   ├── main.jsx   # App entry point
│── index.html     # HTML template
│── package.json   # Project metadata and dependencies
```

</div>

### 4. Understanding the Starter Project

- `src/main.jsx`: This is where React attaches your app to the HTML page.
- `src/App.jsx`: This is your root component — where you build your UI.

Example of `src/App.jsx` starter code:

```javascript
function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>Let's start learning React step by step.</p>
    </div>
  );
}

export default App;
```

### 5. Running Your React App

Once you run `npm run dev`, open the browser URL shown (usually `http://localhost:5173`).

You should see your app displaying the heading and paragraph from `App.jsx`.

### 6. Summary

- React is a popular UI library for building web apps.
- Vite lets you quickly start a React project with modern tooling.
- Your React app is made of components (like `App`).
- `npm run dev` runs a development server with live reload.

<div class="section-break"></div>

### 7. Practice

<div class="practice">

1. Set up a new React project with Vite by following the commands above.
2. Open `src/App.jsx` and change the heading text to your name.
3. Add a new paragraph below it introducing yourself.
4. Run the dev server and see your changes live in the browser.

</div>

<div class="section-break"></div>

### 8. Interview Tips

- Know what React is and why it is used.
- Be able to explain the component concept.
- Understand the project folder structure briefly.
- Be comfortable running and modifying your first React app.
