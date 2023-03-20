import useTimeStore from "@/store/timeStore";

const useChangeType = (isPlay: "Yes" | "NO") => {
  const { pomodoroType, setBreak, setFocus, setTime, play } = useTimeStore(
    (state) => ({
      pomodoroType: state.pomodoroType,
      setFocus: state.setFocusSession,
      setBreak: state.setShortBreak,
      setTime: state.setPomodoroTime,
      status: state.playStatus,
      play: state.playAction,
    })
  );

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
