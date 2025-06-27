import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import ZolaBadge from "./ZolaBadge";

export default function Footer() {
  return (
    <div className="bg-mosswood p-4 flex flex-col items-center justify-between">
      <div className="flex flex-row w-full">
        <Image
          src="/Print_LogoVariation_Lace.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-md"
        />

        <div className="flex flex-col items-end gap-4 w-full p-4">
          <span className="text-sand">Follow Us</span>
          <div className="flex flex-row items-center gap-4">
            <Instagram className="text-sand" />
            <Youtube className="text-sand" />
          </div>
        </div>

        <ZolaBadge />
      </div>

      <div>
        <footer className=" text-sand px-4">
          <div className="max-w-7xl mx-auto text-center text-sm">
            © {new Date().getFullYear()} Parallax Films. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
