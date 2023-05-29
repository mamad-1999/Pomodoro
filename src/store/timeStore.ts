import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type timeStateType = {
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

const useTimeStore = create<timeStateType>()(
  devtools((set) => ({
    playStatus: false,
    focusTime: 1_500_000,
    pomodoroType: "focus",
    playAction: () => set(() => ({ playStatus: true })),
    pauseAction: () => set(() => ({ playStatus: false })),
    setFocusSession: () => set(() => ({ pomodoroType: "focus" })),
    setShortBreak: () => set(() => ({ pomodoroType: "break" })),
    decreaseFocusTime: (time: number) =>
      set((state) => ({ focusTime: state.focusTime - time })),
    setPomodoroTime: (time: number) => set((state) => ({ focusTime: time })),
  }))
);

export default useTimeStore;
