import "./FirstSquare.css";
import {useState} from 'react'

function FirstSquare() {
  const [isActive, setActive] = useState(false); 

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={`${isActive ? 'big-bg-first': ""} FirstSquare`} onClick={toggleClass}>
      <div className={`${isActive ? 'big-first-left': ""} first-left`} onClick={toggleClass}></div>
      <div className={`${isActive ? 'big-first-right': ""} first-right`} onClick={toggleClass}></div>
    </div>
  );
}

export default FirstSquare;
