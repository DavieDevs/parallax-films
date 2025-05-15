import Button from "../components/Button";
import Film from "./Film";
import LABELS from "../constants/labels";

export default function FeatureFilmSection() {
  return (
    <div className="bg-sand w-full  flex flex-col justify-center items-center">
      <h2 className="text-mosswood font-bold p-4 text-3xl">
        {LABELS.featureFilm.title}
      </h2>
      <div className="p-4 flex flex-col w-full">
        <Film videoId="1004015252" />
        <Film videoId="1019498597" />
        <Film videoId="1004931664" />
      </div>
      <Button />
    </div>
  );
}
