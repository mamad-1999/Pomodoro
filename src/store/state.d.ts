export type timeStateType = {
  playStatus: boolean;
  playAction: () => void;
  pauseAction: () => void;
  setShortBreak: () => void;
  setFocusSession: () => void;
  focusTime: number;
  decreaseFocusTime: (time: number) => void;
  pomodoroType: "focus" | "break";
  setPomodoroTime: (time: number) => void;
};
