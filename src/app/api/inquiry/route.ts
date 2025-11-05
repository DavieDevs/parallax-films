// app/api/inquiry/route.ts
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime (not Edge)
export const dynamic = "force-dynamic"; // don't cache
export const revalidate = 0;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      weddingDate,
      venue,
      visionCoverage,
      visionStyle,
      visionHours,
      budget,
      budgetFlexibility,
      addons = [],
      message,
    } = data || {};

    if (!name || !email) {
      return new Response("Missing name or email", { status: 400 });
    }

    // For testing (no domain verification needed):
    const { error } = await resend.emails.send({
      from: "New Inquiry <onboarding@resend.dev>",
      to: ["parallaxfilmsdfw@gmail.com"], // your inbox
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Wedding Date:</b> ${weddingDate || "-"}</p>
        <p><b>Venue:</b> ${venue || "-"}</p>
        <p><b>Coverage:</b> ${visionCoverage || "-"}</p>
        <p><b>Style:</b> ${visionStyle || "-"}</p>
        <p><b>Hours:</b> ${visionHours || "-"}</p>
        <p><b>Budget:</b> ${budget || "-"}</p>
        <p><b>Budget Flexibility:</b> ${budgetFlexibility || "-"}</p>
        <p><b>Add-ons:</b> ${
          Array.isArray(addons) && addons.length ? addons.join(", ") : "-"
        }</p>
        <p><b>Message:</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("[Resend] send error:", error);
      return new Response("Failed to send email", { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[/api/inquiry] error:", err);
    return new Response("Failed to submit", { status: 500 });
  }
}
