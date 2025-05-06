import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/parallaxclips.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 onject-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/Print_Primary_Lace.png"
          alt="Parallax Films Logo"
          width={500}
          height={500}
          className=""
        />
      </div>
    </div>
  );
}
