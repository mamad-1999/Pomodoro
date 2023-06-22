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
        pomodoroType === "focus" ? "bg-red-600" : "bg-blue-500"
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
