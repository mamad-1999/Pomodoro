import { StateCreator } from "zustand";
import { infoStateType } from "../state";

export const infoStore: StateCreator<infoStateType> = (set) => ({
  goalEnd: 12,
  goalStart: 0,
  roundEnd: 4,
  roundStart: 0,
  isInfoPanelShow: false,
  increaseGoal: () =>
    set((state: { goalStart: number }) => ({
      ...state,
      goalStart: state.goalStart + 1,
    })),
  increaseRound: () =>
    set((state: { roundStart: number }) => ({
      ...state,
      roundStart: state.roundStart + 1,
    })),
  setGoal: (num: number) =>
    set((state) => ({
      ...state,
      goalStart: num,
    })),
  setRound: (num: number) =>
    set((state) => ({
      ...state,
      roundStart: num,
    })),
  showInfoPanel: () =>
    set((state) => ({
      ...state,
      isInfoPanelShow: true,
    })),
  closeInfoPanel: () =>
    set((state) => ({
      ...state,
      isInfoPanelShow: false,
    })),
});
