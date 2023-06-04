"use client"

import useZustandState from "../../../hooks/useZustandState"
import InfoBox from "./InfoBox"
import InfoButton from "./InfoButton"


const Footer = () => {
    const { goalEnd, goalStart, roundEnd, roundStart, showModal, showInfoPanel } = useZustandState()
    return (
        <div className="w-full md:max-w-2xl mx-auto bg-white fixed bottom-0 right-0 left-0 p-4 md:p-2 rounded-t-xl flex items-center justify-between gap-4 shadow-black shadow-2xl select-none">
            <InfoBox title={"Round"} start={roundStart} end={roundEnd} />
            <div className="w-56 h-28 flex flex-col gap-1">
                <InfoButton click={showModal} title={"MUTE"} bgColor="bg-gray-300" />
                <InfoButton click={showInfoPanel} title={"COUNT"} bgColor="bg-stone-300" />
            </div>
            <InfoBox title={"Goal"} start={goalStart} end={goalEnd} />
        </div>
    )
}

export default Footer