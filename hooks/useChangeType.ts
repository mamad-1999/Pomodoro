import useZustandState from "./useZustandState";

const useChangeType = (isPlay: "Yes" | "NO") => {
  const { pomodoroType, setBreak, setFocus, setTime, play } = useZustandState();

  const focusTime = 2000;
  const breakTime = 3000;

  const changeTypeAndPlay = () => {
    pomodoroType === "focus"
      ? (setBreak(), setTime(breakTime))
      : (setFocus(), setTime(focusTime));

    isPlay === "Yes" && play();
  };

  return { changeTypeAndPlay };
};

export default useChangeType;
