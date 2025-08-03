import Image from "next/image";
import Link from "next/link";
import BioPic from "@/../public/damian.jpeg";
import Button from "./Button";
import LABELS from "../constants/labels";

export default function Bio() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center bg-mosswood text-sand py-4">
      <div className="basis-1/2 flex items-center justify-center p-4">
        <Image
          src={BioPic}
          alt="Damian Padilla"
          className="w-64 md:w-80 h-auto rounded-xl "
        />
      </div>
      <div className="basis-1/2 flex items-center justify-center flex-col gap-4 px-4 lg:px-6 py-4">
        <h1 className="text-4xl text-center">{LABELS.bio.title}</h1>
        <p className="text-lg md:text-sm lg:text-lg">{LABELS.bio.paragraph1}</p>
        <p className="text-lg md:text-sm lg:text-lg">{LABELS.bio.paragraph2}</p>
        <p className="text-lg md:text-sm lg:text-lg">{LABELS.bio.paragraph3}</p>

        <Link href={"/contact"}>
          <Button color="sand">{LABELS.bio.button}</Button>
        </Link>
      </div>
    </div>
  );
}
