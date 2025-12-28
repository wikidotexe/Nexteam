"use client";

import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Nexteam adalah tim kecil di bawah naungan TEKNOLOGI KREASI DIGITAL yang fokus membantu bisnis dan personal brand membangun solusi digital yang sederhana, cepat, dan mudah dirawat. Kami menggabungkan pengalaman di bidang
            pengembangan web, mobile, sistem, dan desain untuk menghadirkan hasil yang nyata bagi klien.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">Siapa Kami</h2>
                <p>
                  Kami adalah kombinasi developer, system engineer, dan designer yang terbiasa bekerja dekat dengan kebutuhan lapangan. Fokus kami bukan hanya membuat tampilan yang menarik, tetapi juga sistem yang stabil dan mudah digunakan
                  oleh tim Anda sehari-hari.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">Cara Kami Bekerja</h2>
                <p>
                  Kami lebih suka berdiskusi langsung tentang masalah yang ingin Anda selesaikan, lalu menerjemahkannya menjadi solusi digital yang praktis. Prosesnya transparan, dengan update rutin dan ruang revisi yang jelas supaya hasil
                  akhirnya sesuai ekspektasi.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">Apa yang Kami Percaya</h2>
                <p>Teknologi seharusnya membantu, bukan menyulitkan. Karena itu, kami berusaha membuat pengalaman digital yang ringan, jelas, dan relevan dengan konteks bisnis klien, mulai dari UMKM sampai tim internal perusahaan.</p>
              </section>
            </div>

            <div className="relative w-full max-w-lg mx-auto md:max-w-xl md:w-full h-80 sm:h-96 md:h-112.5">
              <Image src="/aboutus/aboutus.png" alt="About Us Illustration" fill className="object-contain" priority />
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
