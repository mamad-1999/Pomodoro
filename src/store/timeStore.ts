import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type timeStateType = {
  playStatus: boolean;
  playAction: () => void;
  pauseAction: () => void;
  focusTime: number;
  decreaseTime: (time: number) => void;
};

const useTimeStore = create<timeStateType>()(
  devtools(
    persist(
      (set) => ({
        playStatus: false,
        focusTime: 300000,
        playAction: () => set(() => ({ playStatus: true })),
        pauseAction: () => set(() => ({ playStatus: false })),
        decreaseTime: (time: number) =>
          set((state) => ({ focusTime: state.focusTime - time })),
      }),
      { name: "pomodoro" }
    )
  )
);

export default useTimeStore;
