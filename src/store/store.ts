import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { timeStore } from "./timeStore";
import { infoStateType, soundStateType, timeStateType } from "./state";
import { infoStore } from "./infoStore";
import { soundStore } from "./soundSlice";

const useTimeStore = create<timeStateType & infoStateType & soundStateType>()(
  devtools((...a) => ({
    ...timeStore(...a),
    ...infoStore(...a),
    ...soundStore(...a),
  }))
);

export default useTimeStore;
