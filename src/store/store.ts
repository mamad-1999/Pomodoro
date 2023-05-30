import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { timeStore } from "./timeStore";
import { infoStateType, timeStateType } from "./state";
import { infoStore } from "./infoStore";

const useTimeStore = create<timeStateType & infoStateType>()(
  devtools((...a) => ({
    ...timeStore(...a),
    ...infoStore(...a),
  }))
);

export default useTimeStore;
