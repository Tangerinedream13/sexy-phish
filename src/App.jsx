import { useState } from "react";
import HomePage from "./pages/HomePage";
import PlayAct1 from "./pages/PlayAct1";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "act1") {
    return <PlayAct1 onBack={() => setScreen("home")} />;
  }

  return <HomePage onStartAct1={() => setScreen("act1")} />;
}