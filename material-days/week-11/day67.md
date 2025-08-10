## Day 67: Simple Project 2 – Weather App

### 1. Project Overview

Build a simple weather app that:

- Lets users enter a city name.
- Fetches current weather data for that city.
- Displays temperature and weather conditions.

### 2. Setup

You can use the free [OpenWeatherMap API](https://openweathermap.org/api). Get your free API key after signing up.

### 3. Basic Code Structure

```javascript
import { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeather() {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch {
      setError("Failed to fetch data");
      setWeather(null);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
```

### 4. Practice

<div class="practice">

1. Build the weather app as shown above.
2. Test with valid and invalid city names to see error handling.
3. Style the app to improve user experience.

</div>

### 5. Interview Tips

- Understand API fetching and error handling.
- Be able to explain async/await usage in React.
- Show ability to work with real-world APIs.
