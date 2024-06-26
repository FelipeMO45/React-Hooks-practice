import React, { useState, useRef } from 'react';


export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current!);
    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current!);
  }

  function handleReset() {
    clearInterval(intervalRef.current!);
    setStartTime(null);
    setNow(null);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="cronometro">
      <h1>{secondsPassed.toFixed(2)} segundos</h1>
      <div className="buttons">
        <button onClick={handleStart}>Iniciar</button>
        <button onClick={handleStop}>Detener</button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
    </div>
  );
}
