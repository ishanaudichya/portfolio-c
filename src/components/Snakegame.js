import React, { useRef, useEffect } from "react";
import Snake from "snake-game-react";

export default function Snakegame({ setGameActive }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setGameActive(false);
      }
    }

    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        setGameActive(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setGameActive]);

  return (
    <div className="snakemodalbg">
      <div ref={modalRef} className="snakemodal">
        <Snake color1="#00e0e0" color2="#005757" backgroundColor="#000808" />
      </div>
    </div>
  );
}
