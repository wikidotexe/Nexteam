import type { Metadata } from "next";
import PrivacyPage from "./PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | NoFileExistsHere. (Nexteam)",
  description: "Kebijakan privasi Nexteam yang menjelaskan pengumpulan, penggunaan, dan perlindungan data pribadi pengguna website dan layanan teknologi kami.",
  keywords: ["privacy policy", "kebijakan privasi", "perlindungan data", "data pribadi", "Nexteam privacy", "GDPR Indonesia", "keamanan data"],
  openGraph: {
    title: "Privacy Policy | NoFileExistsHere. (Nexteam)",
    description: "Kebijakan privasi Nexteam yang menjelaskan pengumpulan, penggunaan, dan perlindungan data pribadi pengguna website dan layanan teknologi kami.",
    url: "/privacy",
    type: "website",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) privacy policy",
      },
    ],
  },
};

export default function Page() {
  return <PrivacyPage />;
}
