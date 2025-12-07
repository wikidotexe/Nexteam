"use client";

import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Di halaman ini, Anda dapat melihat beberapa contoh proyek yang pernah kami kerjakan, mulai dari website, aplikasi, hingga solusi infrastruktur yang membantu klien menyelesaikan masalah nyata mereka.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-accent bg-background/60 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Company Profile Website</h2>
                <p className="mt-2 text-sm text-muted-foreground">Website profil perusahaan sederhana namun profesional untuk membantu klien terlihat lebih kredibel di mata pelanggan dan partner bisnis.</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Tipe: Web Development</p>
            </div>

            <div className="rounded-xl border border-accent bg-background/60 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Internal Desktop Tools</h2>
                <p className="mt-2 text-sm text-muted-foreground">Aplikasi desktop ringan untuk mempermudah pekerjaan administrasi harian dan mengurangi pekerjaan manual berulang.</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Tipe: Desktop Application</p>
            </div>

            <div className="rounded-xl border border-accent bg-background/60 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Landing Page Campaign</h2>
                <p className="mt-2 text-sm text-muted-foreground">Landing page fokus konversi untuk campaign marketing, dirancang agar mudah diakses dan cepat di-load di berbagai perangkat.</p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Tipe: UI/UX & Web</p>
            </div>
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
