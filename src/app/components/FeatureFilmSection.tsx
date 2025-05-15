import Button from "../components/Button";
import LABELS from "../constants/labels";

export default function FeatureFilmSection() {
  return (
    <div className="bg-sand w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-mosswood font-bold p-4 text-3xl">
        {LABELS.featureFilm.title}
      </h2>
      <Button />
    </div>
  );
}
