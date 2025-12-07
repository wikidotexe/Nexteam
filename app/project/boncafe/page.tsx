import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BoncafeProjectPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3">
            <p className="text-xs xs:text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/project" className="hover:text-foreground">
                Projects
              </Link>{" "}
              / <span className="text-foreground font-medium">Optimasi Jaringan PT BON CAFE INDONESIA</span>
            </p>
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Optimasi Jaringan PT BON CAFE INDONESIA</h1>
            <p className="max-w-2xl text-muted-foreground text-sm md:text-base">
              Studi kasus optimasi jaringan di salah satu cabang PT BON CAFE INDONESIA untuk meningkatkan stabilitas koneksi, mengurangi downtime, dan memudahkan monitoring infrastruktur yang sudah berjalan cukup lama.
            </p>
          </div>
        </RevealOnScroll>

        {/* Gambar utama project */}
        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/projects/boncafe.webp" alt="Topologi jaringan PT BON CAFE INDONESIA" fill priority sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw" className="object-cover object-top" />
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
                  Jaringan kantor cabang PT BON CAFE INDONESIA sudah berjalan cukup lama dengan beberapa perangkat lama yang masih digunakan. Kondisi ini membuat troubleshooting menjadi lebih sulit dan performa jaringan tidak selalu
                  konsisten.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Tantangan Utama</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Topologi jaringan yang sudah berkembang organik dan kurang terdokumentasi.</li>
                  <li>Perangkat jaringan lama yang bercampur dengan perangkat baru.</li>
                  <li>Kebutuhan untuk menjaga operasional tetap berjalan saat proses optimasi dilakukan.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Ruang Lingkup Pekerjaan</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Pemetaan kondisi jaringan eksisting berdasarkan observasi lapangan dan wawancara dengan tim internal.</li>
                  <li>Penyusunan diagram topologi jaringan yang lebih jelas untuk dokumentasi internal.</li>
                  <li>Rekomendasi segmentasi jaringan dan penataan ulang koneksi antar perangkat.</li>
                  <li>Implementasi perubahan secara bertahap untuk meminimalkan downtime.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Hasil Akhir</h2>
                <p>
                  Setelah proses optimasi, jaringan menjadi lebih mudah dipantau dan dikelola. Titik-titik rawan gangguan dapat diidentifikasi lebih cepat, dan dokumentasi topologi membantu tim internal melakukan troubleshooting di kemudian
                  hari.
                </p>
              </section>
            </div>

            {/* Info samping */}
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tech Stack &amp; Perangkat</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Perangkat router dan switch yang sudah ada di lokasi klien.</li>
                  <li>Tools monitoring dan scanning jaringan untuk pemetaan awal.</li>
                  <li>Penyesuaian konfigurasi pada perangkat jaringan sesuai best practice.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tipe Project</h3>
                <p>Internet &amp; Infrastructure / Network Optimization</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Referensi Artikel</h3>
                <Link href="https://www.nofileexistshere.my.id/blog/11" target="_blank" className="text-foreground underline underline-offset-4">
                  Baca detail studi kasus di blog kami
                </Link>
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

export default BoncafeProjectPage;
