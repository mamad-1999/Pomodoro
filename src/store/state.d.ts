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
  goalEnd: number;
  goalStart: number;
  roundEnd: number;
  roundStart: number;
  isInfoPanelShow: boolean;
  increaseGoal: () => void;
  increaseRound: () => void;
  setRound: (num: number) => void;
  setGoal: (num: number) => void;
  showInfoPanel: () => void;
  closeInfoPanel: () => void;
};

export type soundStateType = {
  isAlarmOn: boolean;
  isTikTokOn: boolean;
  alarmControl: () => void;
  tikTokControl: () => void;
};

export type modalStateType = {
  isShowModal: boolean;
  showModal: () => void;
  closeModal: () => void;
};

export type allStateType = timeStateType &
  infoStateType &
  soundStateType &
  modalStateType;
