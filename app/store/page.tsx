import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store | NoFileExistsHere. (Nexteam)",
  description: "Koleksi template website siap pakai dari NoFileExistsHere (Nexteam) untuk membantu Anda mulai lebih cepat.",
  openGraph: {
    title: "Store | NoFileExistsHere. (Nexteam)",
    description: "Pilih template website yang sesuai kebutuhan bisnis Anda, lalu diskusikan kustomisasinya bersama tim kami.",
    url: "/store",
    type: "website",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) store cover",
      },
    ],
  },
};

const templates = [
  {
    slug: "pesantren-profile",
    name: "Template Website Pesantren / Sekolah Islam",
    description: "Template landing page dan profil lengkap untuk pesantren atau sekolah Islam, dengan bagian program, berita singkat, dan informasi pendaftaran.",
    stack: "Laravel / Next.js variant (opsional)",
  },
  {
    slug: "small-business-landing",
    name: "Template Landing Page UMKM",
    description: "Cocok untuk bisnis kecil yang butuh halaman penjualan sederhana namun rapi, lengkap dengan section fitur, testimoni, dan CTA ke WhatsApp.",
    stack: "Next.js + Tailwind CSS",
  },
  {
    slug: "it-services-agency",
    name: "Template Website Jasa IT / Agency",
    description: "Struktur website untuk agency layanan IT: hero, layanan utama, portfolio singkat, dan form kontak dasar.",
    stack: "Next.js + Tailwind CSS",
  },
] as const;

const StorePage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Store</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              / <span className="text-foreground font-medium">Store</span>
            </p>
            <br />
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Di sini Anda bisa melihat beberapa template website yang kami siapkan. Cocok jika Anda ingin mulai lebih cepat, lalu mengkustomisasi desain dan fiturnya sesuai kebutuhan bisnis.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((tpl) => (
              <div key={tpl.slug} className="group h-full">
                <Card className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-transform duration-150 group-hover:-translate-y-0.5">
                  <CardHeader className="flex-1 px-6 pb-6 pt-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Website Template</p>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight">{tpl.name}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{tpl.description}</p>
                    <p className="mt-3 text-xs text-muted-foreground">Stack: {tpl.stack}</p>
                    <p className="mt-4 text-xs font-medium text-primary">Tertarik? Diskusikan detailnya</p>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default StorePage;
