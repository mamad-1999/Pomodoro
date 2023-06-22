import { Howl } from "howler";
import useZustandState from "./useZustandState";

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
    isAlarmOn,
    goalStart,
  } = useZustandState();

  const focusTime = 1_500_000;
  const longBreak = 1_500_000;
  const breakTime = 300_000;

  const handleGoalAndRound = () => {
    if (isPlay === "NO") return;

    increaseRound();
    increaseGoal();
    // changing Goal and Round after end focus time (not break time)
  };

  const changeTypeAndPlay = () => {
    if (pomodoroType === "focus") {
      if (goalStart > 0 && goalStart % 4 === 0) {
        // set long Break after 4 times focus // first is 5 times
        setTime(longBreak);
      } else {
        setTime(breakTime);
      }
      setBreak();
      handleGoalAndRound();
    } else {
      setFocus();
      setTime(focusTime);
    }
    // check Focus or Break time for change session

    if (isPlay === "Yes") {
      if (isAlarmOn) sound.play(); // alarm sound play after end break and focus time
      play(); // play timer
    }
    // this code check the change session is skip button or end time
    // if end time play again timer else just change the session only
  };

  return { changeTypeAndPlay };
};

export default useChangeType;
