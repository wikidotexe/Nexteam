import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinasti Sushi - Authentic Japanese Restaurant | NoFileExistsHere. (Nexteam)",
  description: "Website landing page dan platform dashboard untuk Dinasti Sushi, mencakup sistem pemesanan customer dan manajemen kitchen admin.",
  openGraph: {
    title: "Dinasti Sushi - Authentic Japanese Restaurant | NoFileExistsHere. (Nexteam)",
    description: "Detail project website landing page dan dashboard Dinasti Sushi oleh NoFileExistsHere (Nexteam).",
    url: "/project/dinasti-sushi",
    type: "article",
    images: [
      {
        url: "/projects/dinasti.png",
        width: 1200,
        height: 630,
        alt: "Dinasti Sushi Project - Nexteam",
      },
    ],
  },
};

const DinastiSushiProjectPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Dinasti Sushi</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/project" className="hover:text-foreground">
                Projects
              </Link>{" "}
              / <span className="text-foreground font-medium">Dinasti Sushi</span>
            </p>
            <br />
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Kami telah menyelesaikan pembangunan website landing page dan platform dashboard untuk Dinasti Sushi, sebuah restoran Jepang yang menghadirkan pengalaman kuliner autentik dengan kemudahan akses digital.
            </p>
          </div>
        </RevealOnScroll>

        {/* Gambar utama project */}
        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/projects/dinasti.png" alt="Dinasti Sushi Project Preview" fill priority sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw" className="object-cover object-top" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            {/* Dokumentasi utama */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Gambaran Project</h2>
                <p>
                  Dinasti Sushi merupakan restoran Jepang yang ingin mentransformasi layanan mereka menjadi lebih modern dan efisien. Project ini bertujuan untuk membangun sebuah ekosistem digital yang menghubungkan antara customer, koki
                  dapur, hingga kasir melalui platform landing page dan dashboard manajemen yang terintegrasi secara real-time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Dashboard Customer</h2>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>
                    <strong>Registrasi & Menu:</strong> Customer dapat mendaftarkan akun atau login untuk menjelajahi berbagai pilihan menu restoran secara mudah melalui antarmuka yang responsif.
                  </li>
                  <li>
                    <strong>Rating & Review:</strong> Sistem feedback yang memungkinkan customer memberikan rating terhadap menu, membantu menjaga standar kualitas rasa.
                  </li>
                  <li>
                    <strong>Sistem Antrian & Pembayaran:</strong> Inovasi pada alur pembayaran di mana sistem secara otomatis mengeluarkan nomor antrian melalui popup instruksi segera bayar ke kasir setelah pemesanan dilakukan.
                  </li>
                  <li>
                    <strong>Smart Recommendation:</strong> Implementasi algoritma untuk menampilkan rekomendasi makanan berdasarkan popularitas (Best Seller) dan rating tertinggi dari customer lain.
                  </li>
                  <li>
                    <strong>Riwayat Pesanan:</strong> Transparansi data yang memungkinkan customer melihat histori pembelian mereka kapan saja.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Dashboard Admin Kitchen</h2>
                <ul className="mt-2 list-disc pl-5 space-y-2">
                  <li>
                    <strong>Manajemen Menu Dinamis:</strong> Kendali penuh (CRUD) untuk pengelolaan inventaris menu, deskripsi, dan harga secara real-time.
                  </li>
                  <li>
                    <strong>Operasional Pesanan:</strong> Dashboard khusus untuk tim dapur dalam memantau, mengatur alur masuknya pesanan, dan memperbarui status hidangan.
                  </li>
                  <li>
                    <strong>Pelaporan & Analitik:</strong> Fitur cetak laporan penjualan berkala dan visualisasi statistik data penjualan untuk mendukung pengambilan keputusan bisnis.
                  </li>
                  <li>
                    <strong>Manajemen Akses:</strong> Pengaturan role user untuk memastikan keamanan data dan pembagian hak akses sesuai dengan tanggung jawab staf.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Tantangan Utama</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Integrasi sistem antrian yang sinkron antara input pesanan customer dengan sistem manajemen di kasir.</li>
                  <li>Penyajian data rekomendasi yang akurat berdasarkan database rating dan tren penjualan best seller.</li>
                  <li>Memastikan performa dashboard admin tetap responsif saat menangani trafik pesanan yang tinggi pada jam sibuk.</li>
                  <li>Desain UI/UX yang intuitif bagi customer dari berbagai kalangan usia agar mudah dalam melakukan pemesanan.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Ruang Lingkup Pekerjaan</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Perancangan struktur database relasional menggunakan MySQL untuk menyimpan data menu, customer, dan transaksi.</li>
                  <li>Pengembangan backend menggunakan framework Laravel untuk logika bisnis, manajemen antrean, dan sistem rekomendasi.</li>
                  <li>Pembuatan antarmuka landing page yang elegan dan responsif untuk branding restoran.</li>
                  <li>Pembangunan dashboard multi-role (Customer & Kitchen Admin) dengan sistem autentikasi yang aman.</li>
                  <li>Implementasi modul reporting untuk ekspor data penjualan dalam format yang siap cetak.</li>
                  <li>Integrasi fitur popup notifikasi antrean dan flow pembayaran yang efisien.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Hasil Akhir</h2>
                <p>
                  Dengan adanya platform ini, Dinasti Sushi berhasil meningkatkan efisiensi operasional dapur hingga 30% dan memberikan pengalaman memesan yang lebih berkesan bagi customer. Data penjualan kini terdokumentasi dengan rapi dan
                  dapat dianalisis secara instan melalui dashboard admin, memungkinkan manajemen restoran untuk terus berinovasi berdasarkan preferensi nyata pelanggan.
                </p>
              </section>
            </div>

            {/* Info samping */}
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Spesifikasi Proyek</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Web Landing Page</li>
                  <li>Multi-Dashboard System</li>
                  <li>Laravel & MySQL Stack</li>
                  <li>Real-time Order Management</li>
                  <li>In-house Payment Flow Integration</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tipe Project</h3>
                <p>Website Development / Dashboard & Management System</p>
              </section>
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA bawah */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="sm" className="rounded-full">
            <Link href="/project">Back To Projects</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <Link href="/contact">Discuss Similar Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default DinastiSushiProjectPage;
