import Image from "next/image";
import LABELS from "../constants/labels";

export default function Intro() {
  return (
    <div className="bg-mosswood w-full flex flex-col items-center justify-center h-screen">
      <Image
        src="/Print_Sub-Mark_Lace.png"
        alt="Logo"
        width={300}
        height={300}
        className="rounded-md"
      />
      <div className="flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl">{LABELS.intro.title}</h1>
        <p className="p-4 text-lg max-w-4xl">{LABELS.intro.paragraph}</p>
      </div>
    </div>
  );
}
