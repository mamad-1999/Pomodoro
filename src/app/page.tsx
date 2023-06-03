"use client"

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Time from "./components/Time";
import SoundModal from "./components/SoundModal"
import useZustandState from "../../hooks/useZustandState";
import InfoPanelControl from "./components/InfoPanelControl";

export default function Home() {
  const { pomodoroType } = useZustandState()

  return (
    <main className={`w-full min-h-screen ${pomodoroType === "focus" ? "bg-red-600" : "bg-blue-500"}`}>
      <NavBar />
      <SoundModal />
      <InfoPanelControl />
      <Time />
      <Footer />
    </main>
  )
}
