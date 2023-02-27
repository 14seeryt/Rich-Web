import { fromEvent, interval, takeWhile } from "rxjs";

const startBtn = document.getElementById("start-btn");
const observable = fromEvent(startBtn, "click");

observable.subscribe(() => {
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  const hours = hoursInput.valueAsNumber || 0;
  const minutes = minutesInput.valueAsNumber || 0;
  const seconds = secondsInput.valueAsNumber || 0;

  if (hours < 0 || minutes < 0 || seconds < 0) {
    return;
  }

  const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

  const timer = interval(1000).pipe(takeWhile((time) => time <= totalSeconds));

  timer.subscribe((time) => {
    hoursInput.value = Math.floor((totalSeconds - time) / 3600);
    minutesInput.value = Math.floor((totalSeconds - time) / 60) % 60;
    secondsInput.value = (totalSeconds - time) % 60;
  });
});
