import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Pesantren Pondok Bambu | NoFileExistsHere. (Nexteam)",
  description: "Website profil Pesantren Pondok Bambu yang menyajikan informasi kegiatan, program pendidikan, dan kontak bagi orang tua atau calon santri.",
  openGraph: {
    title: "Website Pesantren Pondok Bambu | NoFileExistsHere. (Nexteam)",
    description: "Detail project pembuatan website profil Pesantren Pondok Bambu oleh NoFileExistsHere (Nexteam), mulai dari kebutuhan hingga hasil akhir.",
    url: "/project/pesantren",
    type: "article",
    images: [
      {
        url: "/projects/pesantren.png",
        width: 1200,
        height: 630,
        alt: "Tampilan website Pesantren Pondok Bambu - project Nexteam",
      },
    ],
  },
};

const PesantrenProjectPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Website Pesantren Pondok Bambu</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/project" className="hover:text-foreground">
                Projects
              </Link>{" "}
              / <span className="text-foreground font-medium">Website Pesantren Pondok Bambu</span>
            </p>
            <br />
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Website profil pesantren yang menyajikan informasi kegiatan, program pendidikan, dan kontak bagi orang tua atau calon santri yang ingin mengenal Pesantren Pondok Bambu lebih dekat.
            </p>
          </div>
        </RevealOnScroll>

        {/* Gambar utama project */}
        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image src="/projects/pesantren.png" alt="Tampilan website Pesantren Pondok Bambu" fill priority sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw" className="object-cover object-top" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-start">
            {/* Dokumentasi utama */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Gambaran Project</h2>
                <p>Pesantren membutuhkan media online yang rapi dan mudah diakses untuk menyampaikan informasi kegiatan, program pendidikan, serta memudahkan orang tua atau calon santri menemukan kontak resmi pesantren.</p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Tujuan &amp; Kebutuhan</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Menyediakan profil resmi pesantren yang mudah ditemukan secara online.</li>
                  <li>Menampilkan informasi program, jadwal, dan kegiatan dalam format yang terstruktur.</li>
                  <li>Mempermudah calon santri atau orang tua menghubungi pengurus pesantren.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Ruang Lingkup Pekerjaan</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Pengumpulan konten dasar (profil, visi misi, program, kontak).</li>
                  <li>Perancangan struktur halaman yang sederhana dan mudah dinavigasi.</li>
                  <li>Implementasi tampilan responsif agar nyaman diakses dari HP.</li>
                  <li>Optimasi kecepatan dan deployment ke hosting yang digunakan klien.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Hasil Akhir</h2>
                <p>Website pesantren kini dapat diakses melalui tautan resmi dan membantu orang tua maupun calon santri mendapatkan informasi yang mereka butuhkan tanpa harus datang langsung ke lokasi.</p>
              </section>
            </div>

            {/* Info samping */}
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tech Stack</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Laravel sebagai backend utama untuk routing, controller, dan autentikasi.</li>
                  <li>Filament sebagai admin panel / CRUD management untuk mengelola konten website.</li>
                  <li>MySQL sebagai database utama untuk menyimpan data santri, program, dan konten halaman.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tipe Project</h3>
                <p>Web Development / Laravel + Filament CRUD + MySQL</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Link Live</h3>
                <Link href="https://pesantrenpondokbambu.ct.ws/" target="_blank" className="text-foreground underline underline-offset-4">
                  https://pesantrenpondokbambu.ct.ws/
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

export default PesantrenProjectPage;
