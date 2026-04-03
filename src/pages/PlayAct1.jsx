import ActPlayer from "../components/ActPlayer";
import act1 from "../data/act1";

export default function PlayAct1({ onGoHome, onGoAct2 }) {
  return (
    <ActPlayer
      act={act1}
      onHome={onGoHome}
      onNextAct={onGoAct2}
      nextActLabel="Go to Act 2"
    />
  );
}