import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type timeStateType = {
  playStatus: boolean;
  playAction: () => void;
  pauseAction: () => void;
  setShortBreak: () => void;
  setFocusSession: () => void;
  focusTime: number;
  decreaseTime: (time: number) => void;
  pomodoroType: "focus" | "break";
};

const useTimeStore = create<timeStateType>()(
  devtools((set) => ({
    playStatus: false,
    focusTime: 300000,
    pomodoroType: "focus",
    playAction: () => set(() => ({ playStatus: true })),
    pauseAction: () => set(() => ({ playStatus: false })),
    setFocusSession: () => set(() => ({ pomodoroType: "focus" })),
    setShortBreak: () => set(() => ({ pomodoroType: "break" })),
    decreaseTime: (time: number) =>
      set((state) => ({ focusTime: state.focusTime - time })),
  }))
);

export default useTimeStore;
