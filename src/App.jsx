import { useState } from "react";
import Home from "./pages/Home";
import PlayAct1 from "./pages/PlayAct1";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "act1") {
    return <PlayAct1 onBack={() => setScreen("home")} />;
  }

  return <Home onStartAct1={() => setScreen("act1")} />;
}
