import Image from "next/image";
import Link from "next/link";

type NavigationProps = {
  absolute?: boolean;
  logo?: "lace" | "mosswood";
};

export default function Navigation({
  absolute = false,
  logo = "lace",
}: NavigationProps) {
  const wrapperClass = absolute ? "absolute top-8 left-8 z-20" : "relative p-2";

  const logoSrc =
    logo === "mosswood"
      ? "/Print_LogoVariation_MossWood.png"
      : "/Print_LogoVariation_Lace.png";

  return (
    <div className={wrapperClass}>
      <Link href={"/"}>
        <Image
          src={logoSrc}
          alt="Logo"
          width={150}
          height={150}
          className="rounded-md"
        />
      </Link>
    </div>
  );
}
