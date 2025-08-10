## Day 68: Review & Deployment

### 1. Review Key React Concepts

Before deploying your React app, make sure you understand:

- Components & Props
- State & Hooks (`useState`, `useEffect`, `useRef`)
- Event Handling
- Conditional Rendering
- Lists & Keys
- Forms
- React Router
- Fetching Data
- Lifting State Up
- Reusable Components

### 2. Preparing for Deployment

- Ensure your app works as expected locally.
- Build the production-ready version of your app.

In your project folder, run:

```bash
npm run build
```

This creates a `build` folder with optimized static files.

### 3. Deployment Options

- **Netlify:** Free and easy for React apps. Drag-and-drop your `build` folder or connect your GitHub repo.
- **Vercel:** Another popular choice, supports React with simple setup.
- **GitHub Pages:** Can host React apps for free via your repo’s settings.
- **Firebase Hosting:** Google’s hosting with easy CLI tools.

### 4. Deploying to Netlify (Example)

1. Create a free account on [Netlify](https://www.netlify.com).
2. Click “New site from Git” and connect your GitHub repo.
3. Set build command to `npm run build` and publish directory to `build`.
4. Deploy your site!

### 5. Practice

<div class="practice">

1. Build your React app for production using `npm run build`.
2. Deploy it on Netlify or Vercel using GitHub integration or manual upload.
3. Share your deployed app URL with friends or for interviews.

</div>

### 6. Interview Tips

- Understand the build and deployment process.
- Be able to explain how React apps run in production.
- Know popular hosting services and their basics.
