import { useRef, useState } from "react";

function App() {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2>

      <button
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
    </div>
  );
}

export default App;
