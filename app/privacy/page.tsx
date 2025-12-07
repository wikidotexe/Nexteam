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
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Kebijakan privasi ini menjelaskan bagaimana Nexteam sebagai penyedia jasa untuk usaha mikro dan kecil di Indonesia mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan website dan layanan kami.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-4 max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">1. Data yang Kami Kumpulkan</h2>
                <p>
                  Kami dapat mengumpulkan data seperti nama, alamat email, nomor telepon, nama usaha, dan ringkasan kebutuhan project yang Anda kirimkan melalui form kontak, WhatsApp, atau kanal komunikasi lainnya. Untuk keperluan teknis,
                  kami juga dapat meminta akses sementara ke akun hosting, domain, atau layanan pihak ketiga yang Anda gunakan.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">2. Cara Kami Menggunakan Data</h2>
                <p>
                  Data digunakan untuk menjawab pertanyaan Anda, menyiapkan penawaran, menjalankan project yang sudah disetujui, mengirimkan pemberitahuan terkait progres, serta melakukan perbaikan kualitas layanan. Kami tidak menggunakan
                  data ini untuk iklan massal atau menjualnya ke pihak lain.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">3. Penyimpanan dan Keamanan</h2>
                <p>
                  Kami menyimpan data yang diperlukan seperlunya saja selama hubungan kerja masih berjalan dan untuk kepentingan pencatatan dasar. Akses ke data tersebut dibatasi hanya untuk tim yang memang perlu mengerjakan project Anda,
                  dan kami berupaya menggunakan praktik yang wajar untuk menjaga kerahasiaan data.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">4. Berbagi Data dengan Pihak Ketiga</h2>
                <p>
                  Kami tidak menjual data pribadi Anda. Dalam beberapa kasus, data teknis dapat dibagikan secara terbatas kepada penyedia layanan terkait (misalnya penyedia hosting atau registrar domain) hanya jika diperlukan untuk
                  menyelesaikan pekerjaan dan dengan tetap mengikuti ketentuan layanan pihak tersebut.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground mb-2">5. Hak Anda atas Data</h2>
                <p>
                  Anda dapat meminta kami memperbarui atau menghapus data kontak yang kami simpan, sejauh tidak bertentangan dengan kewajiban pencatatan yang diwajibkan oleh regulasi. Anda juga dapat meminta kami melupakan kredensial
                  sementara (misalnya password sementara) setelah project selesai.
                </p>
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
