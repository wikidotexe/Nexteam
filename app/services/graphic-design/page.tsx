import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Graphic Design | NoFileExistsHere. (Nexteam)",
  description: "Layanan desain grafis untuk logo, identitas brand, social media kit, dan materi promosi yang konsisten dan profesional.",
  openGraph: {
    title: "Graphic Design | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu menyusun tampilan visual brand melalui logo, konten media sosial, dan materi promosi dengan gaya yang rapi dan selaras dengan karakter bisnis Anda.",
    url: "/services/graphic-design",
    type: "website",
  },
};

const GraphicDesignPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Graphic Design</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Graphic Design</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami bantu menyusun tampilan visual brand Anda mulai dari logo, social media kit, hingga materi promosi dengan gaya yang konsisten, profesional, dan mudah dikenali di mana pun orang melihat bisnis Anda.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/design.webp" alt="Graphic Design preview" fill className="object-cover object-top" priority />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Layanan Desain</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Logo &amp; identitas brand.</li>
                  <li>Template konten media sosial.</li>
                  <li>Poster, flyer, dan materi promosi cetak.</li>
                  <li>Pitch deck dan presentasi bisnis.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Proses Kolaborasi</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Diskusi singkat mengenai brand dan referensi visual.</li>
                  <li>Penyusunan moodboard dan arahan desain.</li>
                  <li>Pembuatan konsep awal dan sesi revisi.</li>
                  <li>Finalisasi file siap pakai (PNG, SVG, PDF, dsb.).</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Siapa yang Cocok?</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Brand baru yang ingin tampil profesional sejak awal.</li>
                  <li>Bisnis yang ingin menyegarkan tampilan visualnya.</li>
                  <li>Creator yang butuh template konten rapi dan konsisten.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Ayo Diskusi</h2>
                <p>Kirimkan referensi dan kebutuhan desain kamu, kami bantu wujudkan dalam paket desain yang rapi dan siap pakai.</p>
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
                <h3 className="text-base font-semibold text-foreground">Deliverables</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>File sumber (jika diperlukan) dan export untuk web/cetak.</li>
                  <li>Guideline singkat penggunaan logo dan warna.</li>
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

export default GraphicDesignPage;
