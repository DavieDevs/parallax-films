"use client";

import { useEffect } from "react";

export default function ZolaBadge() {
  useEffect(() => {
    const scriptId = "zola-mvjs";

    // Prevent duplicate script injection
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src =
      "https://d1tntvpcrzvon2.cloudfront.net/static-assets/js/marketplace/zolaVendorBadge.js";

    document.body.appendChild(script);
  }, []);

  return (
    <div className="zola-vendor-badge">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.zola.com/wedding-vendors/wedding-videographers/parallax-films?utm_source=vendor&utm_medium=various&utm_content=award"
      >
        <img
          height="200"
          width="200"
          alt="Best of Zola 2025"
          src="https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/badges/best_of_zola_2025.png"
        />
      </a>
    </div>
  );
}
