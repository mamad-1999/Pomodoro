export function formatTime(time: number) {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    +seconds < 10 ? "0" : ""
  }${seconds}`;
}
