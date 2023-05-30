"use client"

import { useEffect } from "react"
import { clearTime } from "../../../utils/clearTime"
import { formatTime } from "../../../utils/formatTime"
import useChangeType from "../../../hooks/useChangeType"
import useZustandState from "../../../hooks/useZustandState"
import { Howl } from "howler"

const Time = () => {
    const { changeTypeAndPlay } = useChangeType("Yes")
    const { pause, play, status, decreaseFocusTime, focusTime, pomodoroType, roundEnd, roundStart, setRound, goalEnd, goalStart, setGoal } = useZustandState()
    // custom hook for get all need state from zustand store  

    const sound = new Howl({
        src: ["/second.mp3"],
    });
    // second sound 


    useEffect(() => {
        handleFocusTime()
        handleRoundAndGoal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeTypeAndPlay, focusTime, goalEnd, goalStart, pause, roundEnd, roundStart, setGoal, setRound])

    const handlePomodoroTime = () => {
        status ? handlePause() : handlePlay()
    }

    const handlePlay = () => {
        play()
        const time = setInterval(() => {
            decreaseFocusTime(1000)
            sound.play() // play sound every second (tik tak)
        }, 1000)
        localStorage.setItem("interval", JSON.stringify(time))
        // save interval Id in localStorage for clearing in second section
    }

    const handlePause = () => {
        pause()
        clearTime() // util function for clear interval from memory
    }

    const handleFocusTime = () => {
        if (focusTime < 0) {
            pause()
            changeTypeAndPlay()
        }
        // check end timer to handle Goal and Round and change session (Break & Focus)
    }

    const handleRoundAndGoal = () => {
        if (roundStart >= roundEnd) {
            setRound(0);
        }
        if (goalStart >= goalEnd) {
            setGoal(0)
        }
        // reset start Goal and Round number when equal to End Goal and Round
    }

    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <h3 className="md:text-9xl text-8xl text-white font-thin select-none">{formatTime(focusTime).substring(-1, 5)}</h3>
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