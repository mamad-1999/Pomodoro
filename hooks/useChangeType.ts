import useZustandState from "./useZustandState";

const useChangeType = (isPlay: "Yes" | "NO") => {
  const {
    pomodoroType,
    setBreak,
    setFocus,
    setTime,
    play,
    increaseRound,
    increaseGoal,
  } = useZustandState();

  const focusTime = 2000;
  const breakTime = 3000;

  const changeTypeAndPlay = () => {
    if (pomodoroType === "focus") {
      setBreak();
      setTime(breakTime);
      handleGoalAndRound();
    } else {
      setFocus();
      setTime(focusTime);
    }

    isPlay === "Yes" && play();
  };

  const handleGoalAndRound = () => {
    if (isPlay === "NO") return;

    increaseRound();
    increaseGoal();
  };

  return { changeTypeAndPlay };
};

export default useChangeType;
