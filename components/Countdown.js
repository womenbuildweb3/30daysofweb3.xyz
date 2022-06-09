import React, { useEffect, useState } from "react";

// improvements that could be made: This timer uses the user's clock time, not a specific timezone. This could be improved by defining a set timezone for this function so that everyone sees the exact same countdown. However, this is functional for now :D

function Counter() {
  const calcLeftoverTime = () => {
    let year = new Date().getFullYear();
    const timeDiff = +new Date(`${year}-06-27`) - +new Date();
    let remainingTime = {};

    if (timeDiff > 0) {
      remainingTime = {
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDiff / 1000 / 60) % 60),
        seconds: Math.floor((timeDiff / 1000) % 60),
      };
    }

    return remainingTime;
  };

  const [remainingTime, setRemainingTime] = useState(calcLeftoverTime());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setRemainingTime(calcLeftoverTime());
    }, 1000);
  });

  const timer = [];

  Object.keys(remainingTime).forEach((interval) => {
    if (!remainingTime[interval]) {
      return;
    }

    timer.push(
      <span>
        {remainingTime[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      <p className="text-7xl font-bold ">{timer.length ? timer : <span>We&apos;ve launched!</span>}</p>
    </div>
  );
}

export default Counter;
