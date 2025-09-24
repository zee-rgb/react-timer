import { useEffect, useRef } from "react";

const TimerControls = ({ toggleTimer, resetTimer, isRunning }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={startButtonRef}
        onClick={toggleTimer}
        className="m-2 mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="m-2 mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
