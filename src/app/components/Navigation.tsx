import Image from "next/image";

export default function Navigation() {
  return (
    <div className="absolute top-8 left-8 z-20">
      <Image
        src="/Print_LogoVariation_Lace.png"
        alt="Logo"
        width={150}
        height={150}
        className="rounded-md"
      />
    </div>
  );
}
