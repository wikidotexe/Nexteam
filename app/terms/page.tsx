import type { Metadata } from "next";
import TermsPage from "./TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | NoFileExistsHere. (Nexteam)",
  description: "Syarat dan ketentuan layanan Nexteam untuk penggunaan website dan jasa teknologi yang disediakan untuk usaha mikro dan kecil di Indonesia.",
  keywords: ["terms and conditions", "syarat dan ketentuan", "ketentuan layanan", "Nexteam terms", "peraturan layanan", "hukum layanan IT"],
  openGraph: {
    title: "Terms & Conditions | NoFileExistsHere. (Nexteam)",
    description: "Syarat dan ketentuan layanan Nexteam untuk penggunaan website dan jasa teknologi yang disediakan untuk usaha mikro dan kecil di Indonesia.",
    url: "/terms",
    type: "website",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) terms and conditions",
      },
    ],
  },
};

export default function Page() {
  return <TermsPage />;
}
