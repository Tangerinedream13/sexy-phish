import ActPlayer from "../components/ActPlayer";
import act2 from "../data/act2";

export default function PlayAct2({ onBack, onGoAct3 }) {
  return (
    <ActPlayer
      act={act2}
      onHome={onBack}
      onNextAct={onGoAct3}
      nextActLabel="Go to Act 3"
    />
  );
}