## Day 66: Fetching Data in React

### 1. Why Fetch Data?

Most React apps need to get data from servers or APIs to display dynamic content.

### 2. Using `fetch()` in React

You can use the browser’s built-in `fetch()` function to make HTTP requests.

### 3. Fetching Data with `useEffect`

Example:

```javascript
import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
```

- Use `useEffect` to fetch data after component mounts.
- Store data in state.
- Handle loading and error states.

### 4. Practice

<div class="practice">
1. Create a component that fetches and displays a list of posts from `https://jsonplaceholder.typicode.com/posts`.  
2. Show a loading message while fetching.  
3. Handle errors and display a message if the fetch fails.  
</div>

### 5. Interview Tips

- Know how to use `fetch()` or alternatives like Axios.
- Understand how to use `useEffect` for data fetching.
- Be able to handle loading and error states gracefully.
