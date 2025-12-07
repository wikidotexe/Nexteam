"use client";

import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const TermsPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">Syarat dan ketentuan ini mengatur penggunaan website dan layanan Nexteam. Dengan mengakses atau menggunakan website ini, Anda menyetujui ketentuan yang berlaku.</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">1. Penggunaan Layanan</h2>
                <p>
                  Layanan yang kami sediakan hanya boleh digunakan untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda bertanggung jawab atas konten dan informasi yang Anda kirimkan melalui formulir atau kanal komunikasi
                  lainnya.
                </p>
              </section>
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">2. Hak Kekayaan Intelektual</h2>
                <p>Seluruh konten, desain, logo, dan elemen visual di website ini merupakan milik Nexteam atau mitra terkait, dan dilindungi oleh hukum hak cipta serta peraturan lain yang relevan.</p>
              </section>
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">3. Perubahan Ketentuan</h2>
                <p>Kami dapat sewaktu-waktu memperbarui syarat dan ketentuan ini. Perubahan akan diumumkan melalui halaman ini dan berlaku sejak tanggal pembaruan.</p>
              </section>
            </div>

            <div className="relative w-full max-w-md mx-auto md:max-w-lg md:w-full h-72 sm:h-80 md:h-[420px]">
              <Image src="/term-conditions/terms.png" alt="Terms & Conditions Illustration" fill className="object-contain" priority />
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

export default TermsPage;
