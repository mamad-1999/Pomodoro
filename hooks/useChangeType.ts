import { Howl } from "howler";
import { FOCUS_TIME, BREAK_TIME, LONG_BREAK } from "@/app/constant/constant";
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

  const handleGoalAndRound = () => {
    // when isPlay is "NO" means just change the type no increase the Goal and Round
    if (isPlay === "NO") return;

    increaseRound();
    increaseGoal();
    // changing Goal and Round after end focus time (not break time)
  };

  const changeTypeAndPlay = () => {
    if (pomodoroType === "focus") {
      if (goalStart > 0 && goalStart % 4 === 0) {
        // set long Break after 4 times focus // first is 5 times
        setTime(LONG_BREAK);
      } else {
        setTime(BREAK_TIME);
      }
      setBreak();
      handleGoalAndRound();
    } else {
      setFocus();
      setTime(FOCUS_TIME);
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
