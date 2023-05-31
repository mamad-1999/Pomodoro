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
    // check Focus or Break time for change session

    if (isPlay === "Yes") {
      sound.play(); // alarm sound play after end break and focus time
      play(); // play timer
    }
    // this code check the change session is skip button or end time
    // if end time play again timer else just change the session only
  };

  const handleGoalAndRound = () => {
    if (isPlay === "NO") return;

    increaseRound();
    increaseGoal();
    // changing Goal and Round after end focus time (not break time)
  };

  return { changeTypeAndPlay };
};

export default useChangeType;
