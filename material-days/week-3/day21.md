<article class="day-content">

## Day 21: Mini Project – Profile Cards Using Array of Objects

### Goal

We will:

* Store **user profiles** in an array of objects
* Loop through the array
* Dynamically **create profile cards** in the browser using JavaScript
* Use basic **HTML + CSS** to style the cards

### 1. Basic HTML Setup

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Profile Cards</title>
    <style>
      body {
        font-family: sans-serif;
        padding: 20px;
        background-color: #f9f9f9;
      }

      .card {
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 15px;
        margin-bottom: 15px;
        width: 250px;
      }

      .card h3 {
        margin: 0;
      }

      .card p {
        margin: 5px 0;
        color: #555;
      }
    </style>
  </head>
  <body>
    <h2>User Profiles</h2>
    <div id="cardContainer"></div>

    <script src="script.js"></script>
  </body>
</html>
```

### 2. JavaScript Logic (`script.js`)

```js
// Array of profile objects
let users = [
  {
    name: "Rajat Gulati",
    age: 25,
    city: "Delhi",
    profession: "UX Designer"
  },
  {
    name: "Anita Verma",
    age: 28,
    city: "Mumbai",
    profession: "Frontend Developer"
  },
  {
    name: "Rohan Kapoor",
    age: 30,
    city: "Bangalore",
    profession: "Product Manager"
  }
];

// Select the container where cards will go
let container = document.getElementById("cardContainer");

// Loop through the array and create a card for each user
for (let user of users) {
  // Create a new card div
  let card = document.createElement("div");
  card.className = "card";

  // Add inner HTML content
  card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Age:</strong> ${user.age}</p>
    <p><strong>City:</strong> ${user.city}</p>
    <p><strong>Profession:</strong> ${user.profession}</p>
  `;

  // Append the card to the container
  container.appendChild(card);
}
```

### Explanation

#### Step-by-step breakdown:

##### 1. Data

* An array called `users`, where each item is an **object** with user details.

##### 2. Selection

* We select the `<div id="cardContainer">` from HTML to place our cards in.

##### 3. Loop

* We use a `for...of` loop to go through each object in the array.

##### 4. Create Elements

* Create a `<div>` and add the class `card`.

##### 5. Insert Content

* Use template literals `...` to fill in the data dynamically using `${}`.

##### 6. Append

* Finally, we add each card to the page using `appendChild`.

### Bonus (Optional Challenges)

1. Add user **images** (use a random image link in each object and show it in the card).
2. Create a button to **add a new profile**.
3. Add **filtering** to show users only from a selected city.
4. Show total number of profiles on top.

<div class="practice">

### Practice Times

1. Try changing the number of profiles in the array and see the effect.
2. Add more fields like hobbies, skills, or LinkedIn links.
3. Make the same layout using a different style (horizontal cards, borders, etc.).
4. Use the `.forEach()` method instead of `for...of` (if you're curious).

#### What You Practiced

* Arrays of objects
* Loops (`for...of`)
* DOM selection and manipulation
* Template literals
* Element creation and appending
* Styling and structuring output with CSS

</div>

🎉 Congrats! You've finished **Week 3** with another real-world mini project.

</article>
