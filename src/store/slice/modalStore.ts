import { StateCreator } from "zustand";
import { modalStateType } from "../state";

export const modalStore: StateCreator<modalStateType> = (set) => ({
  isShowModal: false,
  showModal: () =>
    set(() => ({
      isShowModal: true,
    })),
  closeModal: () =>
    set(() => ({
      isShowModal: false,
    })),
});
