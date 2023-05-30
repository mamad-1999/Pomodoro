import useZustandState from "./useZustandState";
import { Howl } from "howler";

const sound = new Howl({
  src: ["/alarm.mp3"],
});

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

  const focusTime = 7000;
  const breakTime = 7000;

  const changeTypeAndPlay = () => {
    if (pomodoroType === "focus") {
      setBreak();
      setTime(breakTime);
      handleGoalAndRound();
    } else {
      setFocus();
      setTime(focusTime);
    }

    sound.play();
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
