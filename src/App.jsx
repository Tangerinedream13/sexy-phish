import { useState } from "react";
import Home from "./pages/Home";
import PlayAct1 from "./pages/PlayAct1";
import PlayAct2 from "./pages/PlayAct2";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "act1") {
    return (
      <PlayAct1
        onGoHome={() => setScreen("home")}
        onGoAct2={() => setScreen("act2")}
      />
    );
  }

  if (screen === "act2") {
    return <PlayAct2 onBack={() => setScreen("home")} />;
  }

  return <Home onStartAct1={() => setScreen("act1")} />;
}