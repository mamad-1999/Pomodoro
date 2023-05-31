import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { timeStore } from "./slice/timeStore";
import { infoStore } from "./slice/infoStore";
import { soundStore } from "./slice/soundStore";
import { modalStore } from "./slice/modalStore";
import { allStateType } from "./state";

const useTimeStore = create<allStateType>()(
  devtools((...a) => ({
    ...timeStore(...a),
    ...infoStore(...a),
    ...soundStore(...a),
    ...modalStore(...a),
  }))
);

export default useTimeStore;
