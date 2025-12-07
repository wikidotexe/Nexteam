import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "NoFileExistsHere. | Nexteam Technology Services",
  description: "NoFileExistsHere (Nexteam) adalah penyedia layanan teknologi untuk website, aplikasi desktop, aplikasi mobile, desain grafis, jaringan internet, dan troubleshooting yang fokus pada solusi simpel, rapi, dan mudah digunakan.",
  keywords: [
    "NoFileExistsHere",
    "Nexteam",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "jasa pembuatan aplikasi desktop",
    "jasa pembuatan aplikasi mobile",
    "jasa desain grafis",
    "jasa instalasi jaringan",
    "jasa troubleshooting komputer",
    "layanan IT",
    "IT support",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "NoFileExistsHere. | Nexteam",
    locale: "id_ID",
    url: siteUrl,
    title: "NoFileExistsHere. | Nexteam Technology Services",
    description: "Website resmi NoFileExistsHere (Nexteam) yang menyediakan layanan teknologi: website, aplikasi, jaringan internet, dan dukungan teknis untuk kebutuhan personal maupun bisnis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) Technology Services",
      },
    ],
  },
  authors: [
    {
      name: "NoFileExistsHere",
      url: siteUrl,
    },
  ],
  creator: "NoFileExistsHere / Nexteam",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
