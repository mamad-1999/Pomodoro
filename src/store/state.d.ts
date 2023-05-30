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

export type infoStateType = {
  goalEnd: 12;
  goalStart: 0;
  roundEnd: 4;
  roundStart: 0;
  increaseGoal: () => void;
  increaseRound: () => void;
  setRound: (num: number) => void;
  setGoal: (num: number) => void;
};
