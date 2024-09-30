import { useEffect, useState } from "react";

// styles
import "./digital-clock.style.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = () => {
    const hours = time.getHours() % 12 || 12;
    const minutes = time.getMinutes().toString();
    const seconds = time.getSeconds().toString();
    const meridiem = time.getHours() >= 12 ? "PM" : "AM";

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
