import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { timeStore, infoStore, modalStore, soundStore } from "./slice";
import { allStateType } from "./state";

// store
const useTimeStore = create<allStateType>()(
  devtools((...a) => ({
    ...timeStore(...a),
    ...infoStore(...a),
    ...soundStore(...a),
    ...modalStore(...a),
  })),
);

export default useTimeStore;
