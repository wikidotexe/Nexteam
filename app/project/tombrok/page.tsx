import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Setup Synology Server & Konfigurasi Mikrotik PT Tombrok Jaya Permai | NoFileExistsHere. (Nexteam)",
  description: "Studi kasus setup Synology server dengan RAID configuration dan konfigurasi ulang Mikrotik untuk infrastruktur jaringan yang reliable di PT Tombrok Jaya Permai.",
  openGraph: {
    title: "Setup Synology Server & Konfigurasi Mikrotik PT Tombrok Jaya Permai | NoFileExistsHere. (Nexteam)",
    description: "Detail project setup Synology server dan konfigurasi Mikrotik di PT Tombrok Jaya Permai oleh NoFileExistsHere (Nexteam), mulai dari instalasi OS hingga security configuration.",
    url: "/project/tombrok",
    type: "article",
    images: [
      {
        url: "/projects/tombrok.png",
        width: 1200,
        height: 630,
        alt: "Setup Synology Server & Mikrotik PT Tombrok Jaya Permai - project Nexteam",
      },
    ],
  },
};

const TombrokProjectPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Setup Synology Server & Konfigurasi Mikrotik PT Tombrok Jaya Permai</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/project" className="hover:text-foreground">
                Projects
              </Link>{" "}
              / <span className="text-foreground font-medium">Setup Synology Server & Konfigurasi Mikrotik</span>
            </p>
            <br />
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Project on-site setup Synology server dengan RAID configuration dan konfigurasi ulang infrastruktur Mikrotik untuk meningkatkan reliabilitas, keamanan, dan aksesibilitas data di kantor pusat PT Tombrok Jaya Permai.
            </p>
          </div>
        </RevealOnScroll>

        {/* Gambar utama project */}
        <RevealOnScroll delay={0.05}>
          <div className="rounded-xl overflow-hidden shadow-sm border bg-background">
            <div className="relative aspect-video">
              <Image
                src="/projects/tombrok.png"
                alt="Setup Synology Server & Konfigurasi Mikrotik PT Tombrok Jaya Permai"
                fill
                priority
                sizes="(min-width: 1024px) 1000px, (min-width: 768px) 800px, 100vw"
                className="object-cover object-top"
              />
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
                  PT Tombrok Jaya Permai membutuhkan solusi penyimpanan data yang aman dan infrastruktur jaringan yang reliable untuk mendukung operasional bisnis yang semakin berkembang. Proyek ini melibatkan setup Synology server dengan
                  RAID configuration dan konfigurasi ulang sistem Mikrotik untuk optimalisasi performa jaringan dan keamanan data.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Tantangan Utama</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Kebutuhan penyimpanan data terpusat dengan redundansi dan backup strategy yang baik.</li>
                  <li>Infrastruktur jaringan yang perlu dioptimalkan untuk mendukung akses data secara reliable dan aman.</li>
                  <li>Implementasi sistem keamanan berlapis (firewall, SSL HTTPS, CDN) untuk proteksi data dan akses publik.</li>
                  <li>Pelaksanaan project on-site tanpa mengganggu operasional bisnis yang sedang berjalan.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Ruang Lingkup Pekerjaan</h2>
                <ol className="mt-2 list-decimal pl-5 space-y-1">
                  <li>Instalasi dan konfigurasi OS Synology (DSM terbaru) sesuai kebutuhan bisnis.</li>
                  <li>Setup RAID System menggunakan Synology Hybrid RAID (SHR) untuk optimalisasi kapasitas dan redundansi.</li>
                  <li>Instalasi dan konfigurasi aplikasi Synology Drive &amp; File Sharing untuk kolaborasi tim yang lebih baik.</li>
                  <li>Setup DDNS &amp; Public Access via Mikrotik Port Forwarding untuk akses remote yang aman.</li>
                  <li>Konfigurasi Security: Firewall, SSL HTTPS, Cloudflare CDN untuk proteksi data dan performa optimal.</li>
                  <li>Setup Backup Strategy dan pengujian sistem untuk memastikan data integrity.</li>
                  <li>Testing menyeluruh, dokumentasi lengkap, dan serah terima sistem kepada tim internal.</li>
                </ol>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Hasil Akhir</h2>
                <p>
                  Sistem penyimpanan dan jaringan yang terintegrasi dengan baik, memberikan keamanan data yang optimal, aksesibilitas yang fleksibel, dan reliabilitas infrastruktur yang tinggi. Tim internal PT Tombrok Jaya Permai dapat
                  mengelola data dengan lebih efisien dan backup strategy yang terstruktur menjamin kontinuitas bisnis.
                </p>
              </section>
            </div>

            {/* Info samping */}
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tech Stack &amp; Perangkat</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Synology NAS Server (DSM Operating System)</li>
                  <li>RAID Hardware (SHR - Synology Hybrid RAID)</li>
                  <li>Mikrotik RouterOS &amp; Router</li>
                  <li>Synology Drive &amp; File Sharing Applications</li>
                  <li>Cloudflare CDN &amp; Security</li>
                  <li>SSL/TLS Certificates &amp; HTTPS Configuration</li>
                  <li>DDNS &amp; Dynamic IP Management</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Tipe Project</h3>
                <p>Internet &amp; Infrastructure / Server &amp; Storage Setup</p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">Lokasi</h3>
                <p>On-site di Kantor PT Tombrok Jaya Permai</p>
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

export default TombrokProjectPage;
