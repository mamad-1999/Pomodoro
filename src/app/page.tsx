"use client";

import {
  Footer,
  Time,
  InfoPanelControl,
  NavBar,
  SoundModal,
} from "./components";
import useZustandState from "../../hooks/useZustandState";

export default function Home() {
  const { pomodoroType } = useZustandState();

  return (
    <main
      className={`w-full min-h-screen ${
        pomodoroType === "focus" ? "bg-gradient-to-r from-pink-600 to-red-600" : "bg-gradient-to-r from-cyan-600 to-blue-600"
      }`}
    >
      <NavBar />
      <SoundModal />
      <InfoPanelControl />
      <Time />
      <Footer />
    </main>
  );
}
