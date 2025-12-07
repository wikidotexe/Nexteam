import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RevealOnScroll from "./animation/reveal-on-scroll";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0 -mt-6 md:-mt-30">
        <RevealOnScroll>
          <div className="max-w-xl">
            <Badge className="rounded-full py-1 border-none">#nexteam</Badge>
            <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight">Innovate. Excellent!. Succeed!.</h1>
            <p className="mt-6 max-w-[60ch] xs:text-lg">Penyedia layanan teknologi di bidang Computers, Internet, dan Website yang mudah diakses.</p>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full text-base">
                <Link href="#services">
                  Get Started <ArrowUpRight className="h-5! w-5!" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base shadow-none">
                <CirclePlay className="h-5! w-5!" /> Watch Demo
              </Button>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="relative lg:max-w-lg xl:max-w-xl w-full rounded-xl aspect-square h-72 md:h-[600px]">
            {/* Light mode image */}
            <Image src="/hero/hero-putih.png" fill alt="" className="object-cover rounded-xl block dark:hidden" />
            {/* Dark mode image */}
            <Image src="/hero/hero-hitam.png" fill alt="" className="object-cover rounded-xl hidden dark:block" />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Hero;
