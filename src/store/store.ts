import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { timeStore } from "./timeStore";
import {
  infoStateType,
  modalStateType,
  soundStateType,
  timeStateType,
} from "./state";
import { infoStore } from "./infoStore";
import { soundStore } from "./soundStore";
import { modalStore } from "./modalStore";

const useTimeStore = create<
  timeStateType & infoStateType & soundStateType & modalStateType
>()(
  devtools((...a) => ({
    ...timeStore(...a),
    ...infoStore(...a),
    ...soundStore(...a),
    ...modalStore(...a),
  }))
);

export default useTimeStore;
