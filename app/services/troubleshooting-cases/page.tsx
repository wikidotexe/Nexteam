import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Troubleshooting Cases | NoFileExistsHere. (Nexteam)",
  description: "Layanan troubleshooting untuk menemukan akar masalah dan memperbaiki gangguan pada server, jaringan, maupun aplikasi Anda.",
  openGraph: {
    title: "Troubleshooting Cases | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu menganalisa dan menyelesaikan berbagai kasus gangguan teknis, dari server lambat, error aplikasi, hingga jaringan kantor yang tidak stabil.",
    url: "/services/troubleshooting-cases",
    type: "website",
  },
};

const TroubleshootingCasesPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Troubleshooting Cases</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Troubleshooting Cases</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Layanan troubleshooting untuk membantu menemukan akar masalah dan memperbaiki gangguan pada sistem, jaringan, atau aplikasi Anda sehingga operasional bisa kembali normal secepat mungkin.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/troubleshooting.webp" alt="Troubleshooting preview" fill className="object-cover object-top" priority />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Jenis Kasus yang Kami Tangani</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Server mendadak lambat atau sering restart.</li>
                  <li>Aplikasi web / mobile error setelah update.</li>
                  <li>Jaringan kantor tidak stabil atau sering terputus.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Pendekatan Troubleshooting</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Pengumpulan informasi dan log dari user serta sistem.</li>
                  <li>Replikasi masalah dan isolasi penyebab.</li>
                  <li>Perbaikan sementara (workaround) bila dibutuhkan cepat.</li>
                  <li>Perbaikan permanen dan rekomendasi pencegahan.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Siap Bantu Kapan Dibutuhkan</h2>
                <p>Sampaikan gejala dan dampak masalah yang terjadi, kami bantu analisa dan beri opsi penanganan yang realistis sesuai kondisi sistem Anda.</p>
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
                <h3 className="text-base font-semibold text-foreground">Catatan</h3>
                <p>Beberapa kasus mungkin membutuhkan akses sementara ke server atau sistem Anda untuk analisa lebih lanjut.</p>
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

export default TroubleshootingCasesPage;
