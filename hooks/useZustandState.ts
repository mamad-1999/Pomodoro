import useTimeStore from "@/store/timeStore";

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
  };
};

export default useZustandState;
