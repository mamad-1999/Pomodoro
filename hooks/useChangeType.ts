import useTimeStore from "@/store/timeStore";

const useChangeType = () => {
  const { pomodoroType, setBreak, setFocus, pause, setTime, status, play } =
    useTimeStore((state) => ({
      pomodoroType: state.pomodoroType,
      setFocus: state.setFocusSession,
      setBreak: state.setShortBreak,
      pause: state.pauseAction,
      setTime: state.setPomodoroTime,
      status: state.playStatus,
      play: state.playAction,
    }));

  const changeType = () => {
    pomodoroType === "focus" ? setBreak() : setFocus();
    pomodoroType === "focus" ? setTime(2000) : setTime(3000);

    play();
  };

  return { changeType };
};

export default useChangeType;
