## Day 67: Fetching Data in React

### 1. Why Fetch Data?

* Most React apps need to **get data from APIs** (servers) to display dynamic content.
* Fetching data means making HTTP requests to get information like user details, posts, etc.

<div class="section-break"></div>

### 2. Fetch API in React

* The browser's built-in `fetch()` function is used to make requests.
* It returns a **promise** which resolves to a response object.
* You usually convert the response to JSON.

<div class="section-break"></div>

### 3. Using `fetch` with `useEffect`

Example to fetch user data on component mount:

```js
import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
}
```

<div class="section-break"></div>

### 4. Key Points

* Use `useEffect` to fetch data on mount (`[]` dependency).
* Always handle loading and error states.
* Remember to add unique keys when rendering lists.

<div class="section-break"></div>

### 5. Practice

<div class="practice">

1. Create a `PostList.jsx` component that fetches posts from `https://jsonplaceholder.typicode.com/posts`.
2. Display post titles in a list.
3. Show “Loading...” while fetching.
4. Handle and display any errors.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Understand promises and async data fetching.
* Know how to manage loading and error states in UI.
* Fetching data on mount using `useEffect` is standard.
* Be familiar with `.then()` and `.catch()` for handling fetch.

<div class="section-break"></div>
