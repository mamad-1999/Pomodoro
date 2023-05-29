"use client"

import { clearTime } from "../../../utils/clearTime"
import { formatTime } from "../../../utils/formatTime"
import useTimeStore from "../../store/timeStore"

const Time = () => {
    const { pause, play, status, decreaseFocusTime, focusTime, pomodoroType, setTime } = useTimeStore((state) => ({
        status: state.playStatus,
        play: state.playAction,
        pause: state.pauseAction,
        focusTime: state.focusTime,
        decreaseFocusTime: state.decreaseFocusTime,
        pomodoroType: state.pomodoroType,
        setTime: state.setPomodoroTime
    }))

    const handlePomodoroTime = () => {
        status ? handlePause() : handlePlay()
    }

    const handlePlay = () => {
        play()
        const time = setInterval(() => {
            decreaseFocusTime(1000)
        }, 1000)
        localStorage.setItem("interval", JSON.stringify(time))
    }

    const handlePause = () => {
        pause()
        clearTime()
    }

    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <h3 className="md:text-9xl text-8xl text-white font-thin select-none">{formatTime(focusTime)}</h3>
            <button onClick={handlePomodoroTime} className={`${pomodoroType === "focus" ? "bg-red-400" : "bg-indigo-300"} w-36 h-36 rounded-full flex items-center justify-center mt-12 shadow-2xl`}>
                {
                    status ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-20 h-20 stroke-white">
                            <path strokeLinecap="square" strokeLinejoin="bevel" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    )
                }
            </button>
        </div>
    )
}

export default Time