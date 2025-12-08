import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Web Development | NoFileExistsHere. (Nexteam)",
  description: "Layanan Web Development untuk membangun website dan aplikasi web yang cepat, modern, dan mudah dikelola, dengan fokus pada performa, keamanan, dan pengalaman pengguna.",
  openGraph: {
    title: "Web Development | NoFileExistsHere. (Nexteam)",
    description: "Kami membantu Anda membangun website dan aplikasi web yang cepat, modern, dan mudah dikelola menggunakan teknologi modern seperti Next.js, React, dan Tailwind CSS.",
    url: "/services/web-development",
    type: "website",
    images: [
      {
        url: "/services/web development.webp",
        width: 1200,
        height: 630,
        alt: "Web Development service preview by NoFileExistsHere (Nexteam)",
      },
    ],
  },
};

const WebDevelopmentPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        {/* Breadcrumb & title */}
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Web Development</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br></br>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>{" "}
              / <span className="text-foreground font-medium">Web Development</span>
            </p>
            <br></br>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami membantu Anda membangun website dan aplikasi web yang tidak hanya terlihat modern, tetapi juga bekerja cepat, aman, dan mudah dikelola. Dari landing page sederhana sampai platform web yang kompleks, semuanya dirancang
              untuk meningkatkan kepercayaan, mempermudah alur kerja, dan membuka lebih banyak peluang bisnis.
            </p>
          </div>
        </RevealOnScroll>

        {/* Hero preview image */}
        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/services/web development.webp" alt="Web Development preview" fill priority sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw" className="object-contain object-center bg-muted" />
            </div>
          </div>
        </RevealOnScroll>

        {/* Content sections */}
        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            {/* Main copy */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Jenis Website yang Kami Bangun</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Landing page untuk campaign, produk, atau layanan tertentu.</li>
                  <li>Website company profile dengan halaman layanan, tentang kami, dan kontak yang jelas.</li>
                  <li>Blog atau konten edukasi untuk membangun kepercayaan dan visibilitas di mesin pencari.</li>
                  <li>Web app sederhana untuk kebutuhan internal (dashboard, form terintegrasi, dsb.).</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Pendekatan Pengerjaan</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Pengumpulan informasi tentang tujuan website, target pengguna, dan referensi desain.</li>
                  <li>Penyusunan struktur halaman dan wireframe sederhana agar alur jelas.</li>
                  <li>Pembuatan desain antarmuka dan konfirmasi dengan Anda sebelum masuk tahap coding.</li>
                  <li>Development bertahap dengan update rutin, termasuk integrasi formulir dan analitik bila dibutuhkan.</li>
                  <li>Testing di beberapa perangkat, revisi akhir, dan handover dokumentasi singkat.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Siap Membantu Bisnis Anda Online</h2>
                <p>
                  Sampaikan jenis website yang Anda butuhkan dan apa yang ingin dicapai, kami bantu rekomendasikan struktur, fitur, dan teknologi yang realistis untuk usaha Anda. Website disiapkan agar mudah dirawat dan bisa dikembangkan
                  lagi di kemudian hari.
                </p>
                {/* Desktop CTA buttons */}
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

            {/* Tech stack / side info */}
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Teknologi yang Kami Gunakan</h3>
                <p>Kami memilih stack modern yang stabil dan mudah dikembangkan jangka panjang.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">Next.js</span>
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">React</span>
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">Tailwind CSS</span>
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">TypeScript</span>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Estimasi Timeline</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Landing page sederhana: 1–2 minggu.</li>
                  <li>Website multi-halaman dengan blog: 3–5 minggu.</li>
                  <li>Web app custom: disesuaikan dengan kompleksitas fitur.</li>
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

export default WebDevelopmentPage;
