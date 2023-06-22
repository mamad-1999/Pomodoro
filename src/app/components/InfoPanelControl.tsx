"use client";

import useZustandState from "../../../hooks/useZustandState";

function InfoPanelControl() {
  const { isInfoPanelShow, closeInfoPanel, setGoal, setRound } =
    useZustandState();

  const resetRound = () => {
    setRound(0);
    closeInfoPanel();
  };

  const resetRoundAndGoal = () => {
    resetRound();
    setGoal(0);
    closeInfoPanel();
  };
  return isInfoPanelShow ? (
    <div
      className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${
        isInfoPanelShow && "bg-zinc-900/60"
      }`}
    >
      <div className="fixed w-full md:max-w-3xl bottom-0 right-0 left-0 mx-auto z-10">
        {/* content */}
        <div className="border-0 rounded shadow-lg flex flex-col bg-white outline-none focus:outline-none select-none">
          {/* body */}
          <div className="px-8 py-3">
            <p className="mb-2 text-black text-xl">Reset Your Count?</p>
          </div>
          <div className="flex flex-col border-t">
            <button
              type="button"
              onClick={resetRound}
              className="px-8 py-2 active:shadow-xl"
            >
              <p className="text-black text-xl leading-relaxed">RESET ROUND</p>
            </button>
            <button
              type="button"
              onClick={resetRoundAndGoal}
              className="px-8 py-2 active:shadow-xl"
            >
              <p className="text-black text-xl leading-relaxed">
                RESET ROUND & GOAL
              </p>
            </button>
            <button
              type="button"
              onClick={() => closeInfoPanel()}
              className="px-8 py-2 active:shadow-xl"
            >
              <p className="text-gray-400 text-xl font-medium leading-relaxed">
                CANCEL
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
export default InfoPanelControl;
