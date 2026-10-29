
import { useState } from "react";
import "./App.css";

const themes = {
  add: {
    background: "#dcfce7",
    text: "#172554",
    border: "#7e22ce",
    button: "#16a34a",
    label: "Addition"
  },
  sub: {
    background: "#fee2e2",
    text: "#14532d",
    border: "#2563eb",
    button: "#dc2626",
    label: "Subtraction"
  },
  division: {
    background: "#dbeafe",
    text: "#7c2d12",
    border: "#ea580c",
    button: "#2563eb",
    label: "Division"
  },
  multiplication: {
    background: "#f3e8ff",
    text: "#713f12",
    border: "#059669",
    button: "#9333ea",
    label: "Multiplication"
  },
  increment: {
    background: "#ffedd5",
    text: "#312e81",
    border: "#2563eb",
    button: "#ea580c",
    label: "Increment"
  },
  decrement: {
    background: "#cffafe",
    text: "#831843",
    border: "#db2777",
    button: "#0891b2",
    label: "Decrement"
  },
  reset: {
    background: "#ffffff",
    text: "#000000",
    border: "#999999",
    button: "#475569",
    label: "Reset"
  }
};

function App() {
  const [count, setCount] = useState(0);
  const [operand, setOperand] = useState(2);
  const [theme, setTheme] = useState("reset");
  const [error, setError] = useState("");

  function calculate(operation) {
    setError("");

    switch (operation) {
      case "add":
        setCount((prev) => prev + operand);
        break;

      case "sub":
        setCount((prev) => prev - operand);
        break;

      case "division":
        if (operand === 0) {
          setError("Cannot divide by zero!");
          return;
        }
        setCount((prev) => prev / operand);
        break;

      case "multiplication":
        setCount((prev) => prev * operand);
        break;

      case "increment":
        setCount((prev) => prev + 1);
        break;

      case "decrement":
        setCount((prev) => prev - 1);
        break;

      case "reset":
        setCount(0);
        break;

      default:
        return;
    }

    setTheme(operation);
  }

  const currentTheme = themes[theme];

  return (
    <main className="app">
      <section
        className="counter-card"
        style={{ borderColor: currentTheme.border }}
      >
        <div className="card-heading">
          <span className="eyebrow">MY FIRST REACT PROJECT</span>
          <h1 className="app-title">My Counter</h1>
          <p className="subtitle">A little math practice, one click at a time.</p>
        </div>

        <div
          className="counter-display"
          style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.text
          }}
        >
          <span className="display-label">YOUR NUMBER</span>
          <span className="counter-number">
            {Number.isInteger(count)
              ? count
              : Number(count.toFixed(4))}
          </span>
          <span className="operation-label">{currentTheme.label}</span>
        </div>

        <div className="controls">
          <label htmlFor="operand">Choose a number</label>
          <input
            id="operand"
            type="number"
            value={operand}
            onChange={(event) => {
              setOperand(Number(event.target.value));
              setError("");
            }}
          />
          <small>This number is used for the math buttons below.</small>
        </div>

        <div className="button-grid">
          <button
            style={{ backgroundColor: themes.add.button }}
            onClick={() => calculate("add")}
          >
            Add (+)
          </button>
          <button
            style={{ backgroundColor: themes.sub.button }}
            onClick={() => calculate("sub")}
          >
            Subtract (−)
          </button>
          <button
            style={{ backgroundColor: themes.division.button }}
            onClick={() => calculate("division")}
          >
            Divide (÷)
          </button>
          <button
            style={{ backgroundColor: themes.multiplication.button }}
            onClick={() => calculate("multiplication")}
          >
            Multiply (×)
          </button>
          <button
            style={{ backgroundColor: themes.increment.button }}
            onClick={() => calculate("increment")}
          >
            Add one (+1)
          </button>
          <button
            style={{ backgroundColor: themes.decrement.button }}
            onClick={() => calculate("decrement")}
          >
            Take one away (−1)
          </button>
        </div>

        <button
          className="reset-button"
          style={{ backgroundColor: themes.reset.button }}
          onClick={() => calculate("reset")}
        >
          Start again
        </button>

        {error && <p className="error-message" role="alert">{error}</p>}
      </section>

      <p className="footer-text">Made with React and a little curiosity ✨</p>
    </main>
  );
}

export default App;
