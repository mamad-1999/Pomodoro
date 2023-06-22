import { StateCreator } from "zustand";
import { timeStateType } from "../state";

export const timeStore: StateCreator<timeStateType> = (set) => ({
  playStatus: false,
  focusTime: 1_500_000,
  isLongBreak: false,
  pomodoroType: "focus",
  playAction: () => set((state) => ({ ...state, playStatus: true })),
  pauseAction: () => set((state) => ({ ...state, playStatus: false })),
  setFocusSession: () => set((state) => ({ ...state, pomodoroType: "focus" })),
  setShortBreak: () => set((state) => ({ ...state, pomodoroType: "break" })),
  decreaseFocusTime: (time: number) =>
    set((state: { focusTime: number }) => ({
      ...state,
      focusTime: state.focusTime - time,
    })),
  setPomodoroTime: (time: number) =>
    set((state) => ({ ...state, focusTime: time })),
});
