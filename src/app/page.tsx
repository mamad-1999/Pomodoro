"use client"

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Time from "./components/Time";
import useZustandState from "../../hooks/useZustandState";

export default function Home() {
  const { pomodoroType } = useZustandState()

  return (
    <main className={`w-full min-h-screen ${pomodoroType === "focus" ? "bg-red-600" : "bg-indigo-400"}`}>
      <NavBar />
      <Time />
      <Footer />
    </main>
  )
}
