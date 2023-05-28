import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type timeStateType = {
  playStatus: boolean;
  playAction: () => void;
  pauseAction: () => void;
};

const useTimeStore = create<timeStateType>((set: any) => ({
  playStatus: false,
  playAction: () => set(() => ({ playStatus: true })),
  pauseAction: () => set(() => ({ playStatus: false })),
}));

export default useTimeStore;
