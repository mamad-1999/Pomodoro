export const clearTime = () => {
  const interval = localStorage.getItem("interval");
  if (interval !== null) {
    clearInterval(Number(interval));
  }
};
