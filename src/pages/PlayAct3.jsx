import ActPlayer from "../components/ActPlayer";
import act3 from "../data/act3";

export default function PlayAct3({ onBack }) {
  return <ActPlayer act={act3} onHome={onBack} isFinalAct />;
}