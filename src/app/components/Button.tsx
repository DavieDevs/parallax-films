import LABELS from "../constants/labels";

export default function Button() {
  return (
    <button className="bg-mosswood text-white px-4">
      {LABELS.button.viewFullPortfolio}
    </button>
  );
}
