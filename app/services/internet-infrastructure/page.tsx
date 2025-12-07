import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Internet & Infrastructure | NoFileExistsHere. (Nexteam)",
  description: "Layanan desain dan instalasi jaringan internet serta infrastruktur server/cloud yang stabil dan aman untuk mendukung operasional harian bisnis Anda.",
  openGraph: {
    title: "Internet & Infrastructure | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu menyiapkan jaringan kantor, server, dan infrastruktur internet yang terdokumentasi rapi dan mudah di-maintain.",
    url: "/services/internet-infrastructure",
    type: "website",
  },
};

const InternetInfrastructurePage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Internet &amp; Infrastructure</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Internet &amp; Infrastructure</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami membantu menyiapkan jaringan, server, dan infrastruktur cloud yang stabil dan aman sehingga tim Anda bisa bekerja tenang tanpa takut gangguan koneksi atau sistem yang sering down.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/internet.webp" alt="Internet & Infrastructure preview" fill className="object-cover object-top" priority />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Layanan yang Kami Sediakan</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Desain dan instalasi jaringan kantor (LAN / Wi-Fi).</li>
                  <li>Setup server on-premise maupun cloud.</li>
                  <li>Monitoring dan hardening keamanan dasar.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Manfaat untuk Bisnis Anda</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Jaringan lebih stabil untuk kerja tim dan aplikasi bisnis.</li>
                  <li>Downtime berkurang dengan monitoring dan penanganan cepat.</li>
                  <li>Struktur jaringan yang terdokumentasi dengan rapi.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Mulai dari</h2>
                <p>Konsultasi awal untuk memetakan kondisi jaringan saat ini, kemudian kami berikan rekomendasi perbaikan atau setup baru yang lebih ideal.</p>
                <div className="hidden md:flex flex-wrap gap-3 pt-2">
                  <Button asChild size="sm" className="rounded-full">
                    <Link href="/">Back To Home</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link href="/#services">Back To Services</Link>
                  </Button>
                </div>
              </section>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Lingkup Pengerjaan</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Kantor kecil menengah.</li>
                  <li>Retail / outlet dengan banyak cabang.</li>
                  <li>Gudang dan area operasional.</li>
                </ul>
              </section>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mobile-only CTA buttons at very bottom (after all text content) */}
        <div className="mt-8 md:hidden flex flex-wrap gap-3">
          <Button asChild size="sm" className="flex-1 rounded-full justify-center">
            <Link href="/">Back To Home</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="flex-1 rounded-full justify-center">
            <Link href="/#services">Back To Services</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default InternetInfrastructurePage;
