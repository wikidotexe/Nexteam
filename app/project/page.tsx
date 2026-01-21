import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | NoFileExistsHere. (Nexteam)",
  description: "Kumpulan project yang pernah dikerjakan NoFileExistsHere (Nexteam), mulai dari website, aplikasi, hingga solusi infrastruktur untuk klien di berbagai industri.",
  openGraph: {
    title: "Projects | NoFileExistsHere. (Nexteam)",
    description: "Lihat beberapa contoh project NoFileExistsHere (Nexteam) yang membantu klien menyelesaikan kebutuhan website, aplikasi, dan infrastruktur.",
    url: "/project",
    type: "website",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) logo",
      },
    ],
  },
};

const projects = [
  {
    slug: "dinasti-sushi",
    title: "Dinasti Sushi - Authentic Japanese Restaurant",
    description: "Pembangunan website landing page dan platform dashboard untuk Dinasti Sushi, mencakup sistem pemesanan customer dan manajemen kitchen admin.",
    type: "Web Development",
  },
  {
    slug: "pesantren",
    title: "Website Pesantren Pondok Bambu",
    description: "Website profil untuk Pesantren Pondok Bambu, menampilkan informasi kegiatan, program, dan kontak pesantren.",
    type: "Web Development",
  },
  {
    slug: "boncafe",
    title: "Optimasi Jaringan PT BON CAFE INDONESIA",
    description: "Project optimasi jaringan dan infrastruktur IT untuk cabang-cabang PT BON CAFE INDONESIA agar koneksi lebih stabil dan terukur.",
    type: "Internet & Infrastructure",
  },
  {
    slug: "tombrok",
    title: "Setup Synology Server & Konfigurasi Mikrotik PT Tombrok Jaya Permai",
    description: "Project setup Synology server dengan RAID configuration dan optimasi jaringan menggunakan Mikrotik di kantor pusat PT Tombrok Jaya Permai secara on-site.",
    type: "Internet & Infrastructure",
  },
] as const;

const ProjectPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Projects</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              / <span className="text-foreground font-medium">Projects</span>
            </p>
            <br />
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
              Di halaman ini, Anda dapat melihat beberapa contoh proyek yang pernah kami kerjakan, mulai dari website, aplikasi, hingga solusi infrastruktur yang membantu klien menyelesaikan masalah nyata mereka.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/project/${project.slug}`} className="group flex h-full flex-col justify-between rounded-xl border border-accent bg-background/60 p-6 transition-transform duration-150 hover:-translate-y-0.5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{project.type}</p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight group-hover:underline">{project.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-primary group-hover:underline">Lihat detail project</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
