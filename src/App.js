import "./styles.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

export default function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };
  const handleNumber = (value) => {
    setValue((prevValue) => prevValue + value);
  };
  return (
    <div className="App">
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleChange}
        placeholder="0"
      />
      <Menu handleNumber={handleNumber} />
    </div>
  );
}
