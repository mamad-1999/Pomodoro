"use client";

import { clearTime } from "../../../utils/clearTime";
import useChangeType from "../../../hooks/useChangeType";
import useZustandState from "../../../hooks/useZustandState";
import { FOCUS_TIME, BREAK_TIME } from "../constant/constant";

function NavBar() {
  const { changeTypeAndPlay } = useChangeType("NO");
  const { pomodoroType, pause, setTime, status } = useZustandState();

  const handleChangeType = () => {
    clearTime();
    // after skip clear the interval
    pause();

    const isFocus = pomodoroType === "focus";
    const isBreak = pomodoroType === "break";

    if (status && isFocus) {
      setTime(FOCUS_TIME);
      return;
    }
    if (status && isBreak) {
      setTime(BREAK_TIME);
      return;
    }
    // if timer is play skip button just reset the current session and not changing
    // else change the session and play with function below

    changeTypeAndPlay();
  };
  return (
    <nav className="flex w-full h-16 justify-between p-4 select-none">
      <div className="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
        <h3 className="text-white text-xl">Focus</h3>
      </div>
      <button
        type="button"
        onClick={handleChangeType}
        className="text-white text-xl"
      >
        {status ? "Reset" : "Skip"}
      </button>
    </nav>
  );
}

export default NavBar;
