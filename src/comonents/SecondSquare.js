import './SecondSquare.css';
import { useState } from 'react';

function SecondSquare() {
  const [isActive, setActive] = useState(false); 

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={`${isActive ? 'big-bg-second': ""} SecondSquare`} onClick={toggleClass}>
      <div className={`${isActive ? 'big-second-left': ""} second-left`} onClick={toggleClass}></div>
      <div className={`${isActive ? 'big-second-right': ""} second-right`} onClick={toggleClass}></div>
    </div>
  );
}

export default SecondSquare;
