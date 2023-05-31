import { StateCreator } from "zustand";
import { soundStateType } from "../state";

export const soundStore: StateCreator<soundStateType> = (set: any) => ({
  isAlarmOn: true,
  isTikTokOn: true,
  alarmControl: () =>
    set((state: { isAlarmOn: boolean }) => ({
      ...state,
      isAlarmOn: !state.isAlarmOn,
    })),
  tikTokControl: () =>
    set((state: { isTikTokOn: boolean }) => ({
      ...state,
      isTikTokOn: !state.isTikTokOn,
    })),
});
