"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RevealOnScroll from "./animation/reveal-on-scroll";
import { AppWindow, Code, Cpu, Globe2, LifeBuoy, Monitor, Palette, Smartphone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParallax } from "@/lib/use-parallax";

const services = [
  {
    icon: Monitor,
    title: "Desktop Application",
    description: "Aplikasi desktop kustom untuk Windows, macOS, dan Linux yang merapikan workflow harian, mengurangi kerja manual, dan terintegrasi rapi dengan tools yang sudah Anda gunakan.",
    image: "/services/desktop.webp",
    slug: "desktop-application",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Branding, aset media sosial, dan materi marketing yang konsisten sehingga bisnis Anda terlihat lebih profesional, mudah diingat, dan stand out di antara kompetitor.",
    image: "/services/design.webp",
    slug: "graphic-design",
  },
  {
    icon: Globe2,
    title: "Internet & Infrastructure",
    description: "Setup jaringan, manajemen server, dan infrastruktur cloud yang stabil dan aman sehingga tim Anda bisa fokus bekerja tanpa terganggu masalah teknis.",
    image: "/services/internet.webp",
    slug: "internet-infrastructure",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Aplikasi mobile native maupun cross-platform dengan UX yang halus, performa cepat, dan mudah di-maintain untuk mendekatkan brand Anda ke pengguna kapan saja.",
    image: "/services/mobile.webp",
    slug: "mobile-application",
  },
  {
    icon: Cpu,
    title: "Operating System",
    description: "Instalasi, konfigurasi, dan hardening sistem operasi server maupun desktop agar lingkungan kerja lebih aman, stabil, dan terstruktur.",
    image: "/services/operating sistem.webp",
    slug: "operating-system",
  },
  {
    icon: LifeBuoy,
    title: "Troubleshooting Cases",
    description: "Dukungan on-demand untuk mendiagnosa, debug, dan menyelesaikan masalah sistem, jaringan, atau aplikasi sehingga downtime bisa ditekan seminimal mungkin.",
    image: "/services/troubleshooting.webp",
    slug: "troubleshooting-cases",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Website dan web app modern berbasis React & Next.js yang terlihat profesional, cepat diakses, SEO-friendly, dan siap mengkonversi pengunjung menjadi klien.",
    image: "/services/web development.webp",
    slug: "web-development",
  },
];

const Service = () => {
  return (
    <div id="services" className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6">
      <RevealOnScroll>
        <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-14 font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">Services We Provide to Grow Your Business</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.05}>
        <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((service, index) => (
            <ServiceCardWithParallax key={service.title} service={service} index={index} />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
};

const ServiceCardWithParallax = ({ service, index }: { service: (typeof services)[number]; index: number }) => {
  const { ref } = useParallax(0.2 + (index % 2) * 0.1);

  return (
    <div ref={ref}>
      <RevealOnScroll delay={0.05 * index}>
        <Link href={`/services/${service.slug}`} aria-label={service.title} className="block group h-full">
          <Card className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-transform duration-150 group-hover:-translate-y-0.5">
            <CardContent className="px-0 pt-0 pb-0">
              <div className="relative w-full aspect-video bg-muted overflow-hidden">
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.05]" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 shadow-md">
                    <Search className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardHeader className="flex-1 px-6 pb-6 pt-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-3">
                <service.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold tracking-tight">{service.title}</h4>
              <p className="mt-1.5 text-muted-foreground text-sm xs:text-[15px] leading-relaxed">{service.description}</p>
            </CardHeader>
          </Card>
        </Link>
      </RevealOnScroll>
    </div>
  );
};

export default Service;
