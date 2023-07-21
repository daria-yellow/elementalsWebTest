export const msToTime = (duration: number) => {
  const milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const hoursUpd = hours < 10 ? "0" + hours : hours;
  const minutesUpd = minutes < 10 ? "0" + minutes : minutes;
  const secondsUpd = seconds < 10 ? "0" + seconds : seconds;

  return hoursUpd + ":" + minutesUpd + "." + secondsUpd + milliseconds;
};
