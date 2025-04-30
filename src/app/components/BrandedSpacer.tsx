import Image from "next/image";

export default function BrandedSpacer() {
  return (
    <div className="relative w-full h-80">
      <Image
        src={"/Print_LogoVariation_Lace.png"}
        alt="Parallax Films Logo"
        width={200}
        height={200}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />

      <Image
        src={"/pf_run.jpg"}
        alt="Married couple running"
        fill
        className="object-cover w-full h-full"
      />
    </div>
  );
}
