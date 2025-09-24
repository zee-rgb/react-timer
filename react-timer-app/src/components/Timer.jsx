import { useRef, useState } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        resetTimer={resetTimer}
        toggleTimer={toggleTimer}
      />
    </>
  );
};

export default Timer;
