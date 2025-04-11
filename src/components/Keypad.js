// src/components/Keypad.js
export default function Keypad() {
    return (
      <input
        type="password"
        onChange={() => console.log("Entering password...")}
      />
    );
  }

  