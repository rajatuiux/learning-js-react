## Day 59: Lifting State Up

### 1. What is Lifting State Up?

Sometimes, multiple components need to share and sync the same state.

**Lifting state up** means moving the state to the **nearest common parent** component so it can be passed down as props.

### 2. Why Lift State Up?

- To keep components in sync.
- To avoid duplicating state.
- To centralize control.

### 3. Example: Sharing State Between Siblings

```javascript
function Parent() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <Input temperature={temperature} onTemperatureChange={setTemperature} />
      <Display temperature={temperature} />
    </div>
  );
}

function Input({ temperature, onTemperatureChange }) {
  return (
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder="Enter temperature"
    />
  );
}

function Display({ temperature }) {
  return <p>The temperature is: {temperature}°</p>;
}
```

- The `Parent` holds the `temperature` state.
- It passes state and setter to `Input`.
- It passes state to `Display`.
- Both components stay in sync.

### 4. Practice

<div class="practice">

1. Create two sibling components sharing a state lifted to their parent. For example, a text input and a live preview.
2. Modify the state in the input and see it update in the preview.

</div>

### 5. Interview Tips

- Lifting state up is key for syncing shared data between components.
- State lives in the common ancestor, passed down as props.
- Helps maintain a single source of truth.
