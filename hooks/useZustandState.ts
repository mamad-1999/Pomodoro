import useTimeStore from "@/store/store";

const useZustandState = () => {
  const {
    play,
    pomodoroType,
    setBreak,
    setFocus,
    setTime,
    status,
    decreaseFocusTime,
    focusTime,
    pause,
    increaseGoal,
    increaseRound,
    roundEnd,
    roundStart,
    goalEnd,
    goalStart,
    setGoal,
    setRound,
  } = useTimeStore((state) => ({
    pomodoroType: state.pomodoroType,
    setFocus: state.setFocusSession,
    setBreak: state.setShortBreak,
    setTime: state.setPomodoroTime,
    status: state.playStatus,
    play: state.playAction,
    pause: state.pauseAction,
    focusTime: state.focusTime,
    decreaseFocusTime: state.decreaseFocusTime,
    roundStart: state.roundStart,
    roundEnd: state.roundEnd,
    goalStart: state.goalStart,
    goalEnd: state.goalEnd,
    increaseRound: state.increaseRound,
    increaseGoal: state.increaseGoal,
    setRound: state.setRound,
    setGoal: state.setGoal,
  }));

  return {
    play,
    pomodoroType,
    setBreak,
    setFocus,
    setTime,
    status,
    decreaseFocusTime,
    focusTime,
    pause,
    increaseGoal,
    increaseRound,
    roundEnd,
    roundStart,
    goalEnd,
    goalStart,
    setRound,
    setGoal,
  };
};

export default useZustandState;
