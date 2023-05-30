import { StateCreator } from "zustand";
import { timeStateType } from "./state";

export const timeStore: StateCreator<timeStateType> = (set: any) => ({
  playStatus: false,
  focusTime: 7000,
  pomodoroType: "focus",
  playAction: () => set((state: any) => ({ ...state, playStatus: true })),
  pauseAction: () => set((state: any) => ({ ...state, playStatus: false })),
  setFocusSession: () =>
    set((state: any) => ({ ...state, pomodoroType: "focus" })),
  setShortBreak: () =>
    set((state: any) => ({ ...state, pomodoroType: "break" })),
  decreaseFocusTime: (time: number) =>
    set((state: { focusTime: number }) => ({
      ...state,
      focusTime: state.focusTime - time,
    })),
  setPomodoroTime: (time: number) =>
    set((state: any) => ({ ...state, focusTime: time })),
});
