import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Desktop Application | NoFileExistsHere. (Nexteam)",
  description: "Layanan pembuatan aplikasi desktop yang stabil dan ringan untuk kebutuhan internal perusahaan maupun produk komersial, dengan fokus pada performa, keamanan, dan kemudahan penggunaan.",
  openGraph: {
    title: "Desktop Application | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu mengembangkan aplikasi desktop untuk Windows, macOS, atau Linux yang terintegrasi dengan alur kerja dan perangkat di lingkungan kerja Anda.",
    url: "/services/desktop-application",
    type: "website",
  },
};

const DesktopApplicationPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Desktop Application</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Desktop Application</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami mengembangkan aplikasi desktop yang stabil, ringan, dan benar-benar mengikuti alur kerja tim Anda. Cocok untuk otomasi tugas berulang, pengelolaan data internal, maupun produk komersial yang butuh performa tinggi dan
              keamanan terjaga.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/desktop.webp" alt="Desktop Application preview" fill priority sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw" className="object-contain object-center bg-muted" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Kenapa Perlu Aplikasi Desktop?</h2>
                <p>Aplikasi desktop cocok untuk kebutuhan internal yang membutuhkan akses cepat ke data, integrasi perangkat keras, atau berjalan di lingkungan tanpa koneksi internet stabil.</p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Contoh Kebutuhan:</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Tool internal untuk finance, inventory, atau operasional harian.</li>
                  <li>Integrasi dengan perangkat seperti scanner, printer khusus, atau mesin produksi.</li>
                  <li>Aplikasi reporting yang berjalan di komputer kantor dengan keamanan lebih ketat.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Alur Pengerjaan</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Analisis proses bisnis dan alur kerja saat ini.</li>
                  <li>Perancangan fitur dan struktur data.</li>
                  <li>Pengembangan aplikasi dan uji coba di environment internal.</li>
                  <li>Deployment ke perangkat user dan pelatihan singkat.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Hubungi Kami</h2>
                <p>Ceritakan alur kerja dan masalah yang ingin diselesaikan, kami bantu terjemahkan menjadi aplikasi desktop yang mudah digunakan tim Anda.</p>
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
                <h3 className="text-base font-semibold text-foreground">Platform</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Windows</li>
                  <li>macOS</li>
                  <li>Linux (berdasarkan kebutuhan)</li>
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

export default DesktopApplicationPage;
