import React from "react";

function Button({ text, size, color, bgColor, borderRadius }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`txet-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
