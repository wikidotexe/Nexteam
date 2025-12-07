import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Operating System | NoFileExistsHere. (Nexteam)",
  description: "Layanan instalasi, konfigurasi, dan hardening sistem operasi server maupun desktop agar lebih stabil, aman, dan mudah di-maintain.",
  openGraph: {
    title: "Operating System | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu menyiapkan dan mengoptimalkan sistem operasi Windows dan Linux untuk kebutuhan server maupun workstation di lingkungan kerja Anda.",
    url: "/services/operating-system",
    type: "website",
  },
};

const OperatingSystemPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Operating System</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Operating System</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami menangani instalasi, konfigurasi, dan hardening sistem operasi server maupun desktop agar lingkungan kerja jauh lebih stabil, aman, dan mudah di-maintain oleh tim Anda ke depannya.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/operating sistem.webp" alt="Operating System preview" fill className="object-cover object-top" priority />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Lingkup Pekerjaan</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Instalasi fresh OS untuk server atau workstation.</li>
                  <li>Konfigurasi user, permission, dan basic security.</li>
                  <li>Optimasi service yang berjalan agar lebih efisien.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Keuntungan</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Sistem lebih stabil dan terstruktur.</li>
                  <li>Dokumentasi konfigurasi yang jelas.</li>
                  <li>Lebih mudah di-maintain oleh tim internal.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Hubungi Kami</h2>
                <p>Ceritakan kebutuhan server atau perangkat yang ingin dikonfigurasi, kami bantu siapkan lingkungan kerja yang aman dan siap dipakai.</p>
                <div className="hidden md:flex flex-wrap gap-3 pt-2">
                  <Button asChild size="sm" className="rounded-full">
                    <Link href="/">Ke Halaman Utama</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link href="/#services">Kembali ke Services</Link>
                  </Button>
                </div>
              </section>
            </div>

            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">OS yang Didukung</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Windows Server &amp; Desktop.</li>
                  <li>Distribusi Linux populer (Ubuntu, Debian, dsb.).</li>
                </ul>
              </section>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mobile-only CTA buttons at very bottom (after all text content) */}
        <div className="mt-8 md:hidden flex flex-wrap gap-3">
          <Button asChild size="sm" className="flex-1 rounded-full justify-center">
            <Link href="/">Ke Halaman Utama</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="flex-1 rounded-full justify-center">
            <Link href="/#services">Kembali ke Services</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default OperatingSystemPage;
