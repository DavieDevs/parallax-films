import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import ZolaBadge from "./ZolaBadge";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-mosswood p-4 flex flex-col items-center justify-between">
      <div className="flex flex-row w-full">
        <Link href={"/"}>
          <Image
            src="/Print_LogoVariation_Lace.png"
            alt="Logo"
            width={150}
            height={150}
            className="rounded-md"
          />
        </Link>

        <div className="flex flex-col items-end gap-4 w-full p-4">
          <span className="text-sand font-medium">Follow Us</span>
          <div className="flex flex-row items-center gap-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/parallaxweddings" // ← change this to your actual IG link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Parallax Films on Instagram"
            >
              <Instagram className="text-sand hover:text-lace transition-colors duration-200" />
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@parallaxfilms_co" // ← change this to your actual YouTube link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to Parallax Films on YouTube"
            >
              <Youtube className="text-sand hover:text-lace transition-colors duration-200" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@parallax.films" // ← change to your handle
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Parallax Films on TikTok"
              className="hover:text-lace transition-colors duration-200"
            >
              {/* Inline SVG TikTok Icon to match Lucide style */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-sand"
              >
                <path d="M448,209.91a158.3,158.3,0,0,1-90.5-28.83V338.44A117.56,117.56,0,1,1,239.94,223.7v63.33a54.38,54.38,0,1,0,38.56,52V64h79a79.15,79.15,0,0,0,79,79Z" />
              </svg>
            </a>
          </div>
        </div>

        <ZolaBadge />
      </div>

      <footer className="text-sand px-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} Parallax Films. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
