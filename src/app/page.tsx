"use client"

import useTimeStore from "@/store/timeStore";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Time from "./components/Time";

export default function Home() {
  const { pomodoroType } = useTimeStore((state) => ({
    pomodoroType: state.pomodoroType
  }))

  return (
    <main className={`w-full min-h-screen ${pomodoroType === "focus" ? "bg-red-600" : "bg-indigo-400"}`}>
      <NavBar />
      <Time />
      <Footer />
    </main>
  )
}
