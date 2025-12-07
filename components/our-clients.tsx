"use client";

import RevealOnScroll from "./animation/reveal-on-scroll";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Client = { name: string; url: string; logo: string } | { name: string; url: string; logoLight: string; logoDark: string };

const clients: Client[] = [
  { name: "Bon Cafe", logo: "/clients/boncafe.webp", url: "#" },
  {
    name: "BLP Team",
    logoLight: "/clients/blpteam-hitam.webp",
    logoDark: "/clients/blpteam-putih.webp",
    url: "#",
  },
  { name: "Proban", logo: "/clients/proban.webp", url: "#" },
  { name: "Transgo", logo: "/clients/transgo.webp", url: "#" },
  { name: "Penerjemah", logo: "/clients/penerjemah.webp", url: "#" },
  { name: "XL", logo: "/clients/xl.webp", url: "#" },
  { name: "Indihome", logo: "/clients/indihome.webp", url: "#" },
  { name: "Jurnal", logo: "/clients/jurnal.webp", url: "#" },
  { name: "QPair", logo: "/clients/qpair.webp", url: "#" },
];

const OurClients = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="clients" className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6">
      <RevealOnScroll>
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight text-center">Our Clients</h2>
        <p className="mt-2 text-center text-muted-foreground max-w-xl mx-auto">Brand dan tim yang mempercayakan kami untuk menghadirkan produk digital yang cepat dan andal.</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <div className="mt-8 xs:mt-12">
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="-ml-4 items-center">
              {clients.map((client) => (
                <CarouselItem key={client.name} className="basis-1/3 sm:basis-1/4 md:basis-1/6 pl-4 flex items-center justify-center">
                  <Link href={client.url} target="_blank" aria-label={client.name} className="block group">
                    <div className="relative w-24 h-8 sm:w-28 sm:h-10 md:w-32 md:h-12">
                      {"logoLight" in client && "logoDark" in client ? (
                        <>
                          {/* Light mode logo */}
                          <Image src={client.logoLight} alt={client.name} fill className="object-contain transition duration-200 grayscale group-hover:grayscale-0 block dark:hidden" />
                          {/* Dark mode logo */}
                          <Image src={client.logoDark} alt={client.name} fill className="object-contain transition duration-200 grayscale group-hover:grayscale-0 hidden dark:block" />
                        </>
                      ) : (
                        <Image src={client.logo} alt={client.name} fill className="object-contain transition duration-200 grayscale group-hover:grayscale-0" />
                      )}
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default OurClients;
