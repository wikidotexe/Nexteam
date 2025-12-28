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
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Syarat dan ketentuan ini berlaku untuk penggunaan website dan layanan Nexteam sebagai penyedia jasa untuk usaha mikro dan kecil di Indonesia. Dengan menghubungi kami atau menggunakan layanan kami, Anda dianggap telah membaca dan
            menyetujui ketentuan ini.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">1. Ruang Lingkup Layanan</h2>
                <p>
                  Nexteam menyediakan layanan pengembangan website, aplikasi, desain, infrastruktur, dan dukungan teknis untuk usaha mikro dan kecil. Detail pekerjaan (fitur, jumlah halaman, revisi, dan batasan layanan) akan dijelaskan
                  secara tertulis di chat, dokumen penawaran, atau invoice sebelum project dimulai.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">2. Pemesanan, Pembayaran, dan Revisi</h2>
                <p>
                  Untuk menjaga alur kerja yang jelas, kami dapat meminta uang muka (DP) sebelum pengerjaan dimulai. Sisa pembayaran dilakukan setelah hasil kerja disetujui sesuai kesepakatan. Permintaan revisi masih dapat diajukan selama
                  berada dalam batas revisi yang disepakati di awal; perubahan besar di luar kesepakatan awal dapat dikenakan biaya tambahan.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">3. Konten dan Tanggung Jawab Klien</h2>
                <p>
                  Konten seperti teks, gambar, logo, dan data usaha yang digunakan di dalam project disediakan oleh klien dan menjadi tanggung jawab klien sepenuhnya. Klien menyatakan bahwa konten tersebut tidak melanggar hukum atau hak
                  pihak ketiga mana pun.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">4. Hak Kekayaan Intelektual</h2>
                <p>
                  Setelah pembayaran lunas, hak pakai atas hasil kerja (misalnya file desain final, source code yang diserahkan, konfigurasi yang telah terpasang) diberikan kepada klien untuk keperluan usaha sendiri. Hak cipta atas metode
                  kerja, komponen internal, atau library yang kami gunakan tetap dimiliki oleh Nexteam atau pemilik lisensi masing-masing.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">5. Batas Tanggung Jawab</h2>
                <p>
                  Kami berupaya memberikan layanan yang stabil dan dapat digunakan dengan baik. Namun, kami tidak bertanggung jawab atas kerugian tidak langsung seperti kehilangan pendapatan, kehilangan data, atau gangguan operasional yang
                  timbul dari penggunaan hasil kerja, selama kami telah memberikan layanan sesuai kesepakatan dan praktik yang wajar.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">6. Perubahan Ketentuan</h2>
                <p>
                  Kami dapat sewaktu-waktu memperbarui syarat dan ketentuan ini agar selaras dengan regulasi yang berlaku dan praktik terbaik untuk usaha mikro di Indonesia. Tanggal pembaruan akan dicantumkan di halaman ini dan versi
                  terbaru akan langsung berlaku untuk permintaan layanan berikutnya.
                </p>
              </section>
            </div>

            <div className="relative w-full max-w-md mx-auto md:max-w-lg md:w-full h-72 sm:h-80 md:h-105">
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
