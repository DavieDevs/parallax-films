import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="absolute top-8 left-8 z-20">
      <Link href={"/"}>
        <Image
          src="/Print_LogoVariation_Lace.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-md"
        />
      </Link>
    </div>
  );
}
