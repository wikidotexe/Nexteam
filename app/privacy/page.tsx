"use client";

import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const PrivacyPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">Kebijakan privasi ini menjelaskan bagaimana Nexteam mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan website dan layanan kami.</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">1. Data yang Kami Kumpulkan</h2>
                <p>Kami dapat mengumpulkan informasi seperti nama, alamat email, nomor telepon, dan detail kebutuhan yang Anda kirimkan melalui form kontak atau kanal komunikasi lainnya.</p>
              </section>
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">2. Penggunaan Data</h2>
                <p>Data yang Anda berikan digunakan untuk menindaklanjuti permintaan layanan, mengirim konfirmasi, dan meningkatkan kualitas layanan kami. Kami tidak menjual data pribadi Anda ke pihak ketiga.</p>
              </section>
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">3. Keamanan Data</h2>
                <p>Kami menerapkan langkah-langkah yang wajar untuk menjaga keamanan data pribadi Anda, namun tidak dapat menjamin keamanan absolut atas transmisi data melalui internet.</p>
              </section>
            </div>

            <div className="relative w-full max-w-md mx-auto md:max-w-lg md:w-full h-72 sm:h-80 md:h-[420px]">
              <Image src="/privacy-policy/privacy.png" alt="Privacy Policy Illustration" fill className="object-contain" priority />
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

export default PrivacyPage;
