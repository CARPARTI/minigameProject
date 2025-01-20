import React, { useEffect, useState } from "react";

function Timer() {
    // State for time remaining
    const [timeRemaining, setTimeRemaining] = useState(60); // Initial countdown time
    const [timerActive, setTimerActive] = useState(true); // Timer status
  
    // Effect to handle countdown logic
    useEffect(() => {
      if (timerActive && timeRemaining > 0) {
        const timer = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000); // Decrease time every 1 second
  
        // Cleanup function to clear the interval
        return () => clearInterval(timer);
      } else if (timeRemaining === 0) {
        setTimerActive(false); // Stop the timer when it reaches zero
      }
    }, [timerActive, timeRemaining]); // Re-run the effect when these variables change
  
    return (
      <div>
        <h1>Time Remaining: {timeRemaining}s</h1>
        {timeRemaining === 0 && <p>Time's up!</p>}
      </div>
    );
  }
  
  export default Timer;