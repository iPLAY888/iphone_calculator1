import "./Menu.css";
import Button from "../Button/Button";

export default function Menu({ handleNumber }) {
  const buttons = [
    { value: "AC", className: "top" },
    { value: "+/-", className: "top" },
    { value: "%", className: "top" },
    { value: "÷", className: "right" },
    { value: "7", className: "number" },
    { value: "8", className: "number" },
    { value: "9", className: "number" },
    { value: "×", className: "right" },
    { value: "4", className: "number" },
    { value: "5", className: "number" },
    { value: "6", className: "number" },
    { value: "-", className: "right" },
    { value: "1", className: "number" },
    { value: "2", className: "number" },
    { value: "3", className: "number" },
    { value: "+", className: "right" },
    { value: "0", className: "number" },
    { value: ",", className: "clue" },
    { value: "=", className: "right" },
  ];
  return (
    <div className="container">
      {buttons.map((button) => (
        <Button
          key={button.value}
          className={button.className}
          onClick={() => handleNumber(button.value)}
        >
          {button.value}
        </Button>
      ))}
    </div>
  );
}
