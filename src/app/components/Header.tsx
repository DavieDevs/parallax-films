import Image from "next/image";

export default function Header() {
  return (
    <div className="absolute ">
      <video
        src="/Parallax_2024_HL.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="top-0 left-0 w-full h-full object-cover z-0 -rotate-90"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 -rotate-90" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/Print_Primary_Lace.png"
          alt="Centered Image"
          width={500}
          height={500}
          className=""
        />
      </div>
    </div>
  );
}
