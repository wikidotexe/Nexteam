import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mobile Application | NoFileExistsHere. (Nexteam)",
  description: "Layanan pengembangan aplikasi mobile Android dan iOS dengan fokus pada kemudahan penggunaan, performa, dan tampilan yang selaras dengan brand Anda.",
  openGraph: {
    title: "Mobile Application | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu membangun aplikasi mobile untuk kebutuhan bisnis, customer-facing, maupun MVP startup dengan pengalaman pengguna yang nyaman.",
    url: "/services/mobile-application",
    type: "website",
    images: [
      {
        url: "/services/mobile.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Application service preview by NoFileExistsHere (Nexteam)",
      },
    ],
  },
};

const MobileApplicationPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Mobile Application</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Mobile Application</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami mengembangkan aplikasi mobile untuk Android dan iOS yang membuat layanan Anda selalu ada di genggaman pengguna. Desainnya selaras dengan brand, mudah digunakan, dan dioptimalkan untuk performa sehingga nyaman dipakai
              setiap hari.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/mobile.webp" alt="Mobile Application preview" fill priority sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw" className="object-contain object-center bg-muted" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Apa yang Kami Bangun</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Aplikasi bisnis internal untuk tim lapangan.</li>
                  <li>Aplikasi customer-facing untuk pemesanan, membership, atau layanan pelanggan.</li>
                  <li>Prototype / MVP untuk validasi ide startup.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Pendekatan Kami</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Workshop singkat untuk memahami flow aplikasi.</li>
                  <li>Wireframe dan desain UI/UX.</li>
                  <li>Development dan integrasi API / backend.</li>
                  <li>Testing di perangkat nyata sebelum rilis.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Ayo Diskusikan Aplikasi Kamu</h2>
                <p>Ceritakan use case dan fitur yang kamu bayangkan, kami bantu rekomendasikan solusi dan teknologi yang tepat untuk kebutuhanmu.</p>
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
                  <li>Android</li>
                  <li>iOS</li>
                  <li>Cross-platform (sesuai kebutuhan)</li>
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

export default MobileApplicationPage;
