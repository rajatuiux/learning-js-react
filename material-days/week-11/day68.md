## Day 68: Simple Project 2 – Weather App

### 1. Project Overview

* Build a weather app that fetches and displays weather info for a city.
* Features:

  * Input field to enter city name.
  * Fetch weather data from a public API.
  * Show temperature, weather condition, and other details.
  * Handle loading and error states.

---

### 2. Choosing an API

* Use [OpenWeatherMap](https://openweathermap.org/api) (free tier available).
* Sign up and get an API key (for real app).
* For practice, you can use this sample endpoint without API key:

  ```
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
  ```

---

### 3. Basic Structure

* `App.jsx` — Manages state for city input and weather data.
* Use `fetch` inside `useEffect` or on form submit to get weather.
* Display results or error messages.

---

### 4. Sample Code Snippet

```jsx
import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "YOUR_API_KEY";

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(res => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={e => setCity(e.target.value)}
          required
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
```

---

### 5. Practice

<div class="practice">

1. Build the Weather App as shown above.
2. Style it nicely using CSS or inline styles.
3. Handle empty input and API errors gracefully.
4. Try adding more info like humidity, wind speed, etc.

</div>

<div class="section-break"></div>

### 6. Interview Tips

* Understand how to fetch data based on user input.
* Know how to handle async operations and errors.
* Practice building real-world projects to demonstrate skills.
* Explain state management for loading, data, and errors.

<div class="section-break"></div>