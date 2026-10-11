import { useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  function startTimer() {
      console.log(timerRef);
      if (timerRef.current !== null) return;
      
      timerRef.current = setInterval(() => {
          setSeconds((prev) => prev + 1);
          console.log(timerRef,seconds);
    }, 100);

  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setSeconds(0);
  }

  return (
    <div>
      <h1>{seconds} seconds</h1>

      <button onClick={startTimer}>Start</button>

      <button onClick={stopTimer}>Stop</button>

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;