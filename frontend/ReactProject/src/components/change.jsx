import React from "react";

const change = () => {
  const [color, setColor] = useState("red");
  function ButtonColorChange() {
    setColor(color === "red" ? "blue" : "red");
    document.getElementById("na").style.backgroundColor = color;
  }

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={ButtonColorChange}
        id="na"
      >
        Click
      </button>
    </div>
  );
};

export default change;
