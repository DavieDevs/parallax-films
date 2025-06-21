import Image from "next/image";
import BioPic from "@/../public/damian.jpeg";
import Button from "./Button";

export default function Bio() {
  return (
    <div className="flex flex-row w-full items-center justify-center bg-mosswood text-sand">
      <div className="basis-1/2 flex items-center justify-center">
        <Image src={BioPic} alt="Damian Padilla" />
      </div>
      <div className="basis-1/2 flex items-center justify-center flex-col gap-4 px-16">
        <h1 className="text-4xl">Meet you videographer</h1>
        <p className="text-lg">
          My name is Damian Padilla and my journey in wedding videography began
          with a deep-seated passion for storytelling. I believe that a wedding
          is more than an event; it’s a narrative of love commitment, and the
          beginning of a beautiful journey together.
        </p>
        <p className="text-lg">
          That’s why at Parallax Films, your love story is my priority. I work
          closely with you to understand your vision, your personalities, and
          your unique love story. This personalized approach allows me to create
          wedding films that are a tru reflection of you as a couple, ensuring
          that your memories are preserved for a life time.
        </p>
        <p className="text-lg">
          I would be honored to be part of your journey, capturing the magic of
          your love story on film.
        </p>

        <Button color="sand"> Let's Talk</Button>
      </div>
    </div>
  );
}
