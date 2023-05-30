import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { timeStore } from "./timeStore";
import { timeStateType } from "./state";

const useTimeStore = create<timeStateType>()(
  devtools((...a) => ({
    ...timeStore(...a),
  }))
);

export default useTimeStore;
