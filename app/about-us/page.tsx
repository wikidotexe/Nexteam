import type { Metadata } from "next";
import AboutUsPage from "./AboutUsPage";

export const metadata: Metadata = {
  title: "About Us | NoFileExistsHere. (Nexteam)",
  description: "Kenali lebih dekat tim Nexteam - kombinasi developer, system engineer, dan designer yang fokus membantu bisnis membangun solusi digital sederhana dan efektif.",
  keywords: ["about us", "tentang kami", "Nexteam profile", "tim developer", "TEKNOLOGI KREASI DIGITAL", "jasa IT profesional"],
  openGraph: {
    title: "About Us | NoFileExistsHere. (Nexteam)",
    description: "Kenali lebih dekat tim Nexteam - kombinasi developer, system engineer, dan designer yang fokus membantu bisnis membangun solusi digital sederhana dan efektif.",
    url: "/about-us",
    type: "website",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) team",
      },
    ],
  },
};

export default function Page() {
  return <AboutUsPage />;
}
