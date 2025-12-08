import Link from "next/link";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";

const CtaAfterTeam = () => {
  return (
    <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 border-t border-accent/60">
      <RevealOnScroll>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold tracking-tight">Get started with Nexteam today</h2>
          <p className="mt-3 text-sm xs:text-base text-muted-foreground">Diskusikan kebutuhan bisnis Anda bersama kami. Kami bantu merancang solusi teknologi yang tepat, efisien, dan siap membantu bisnis Anda tumbuh.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Let&apos;s connect</Link>
            </Button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default CtaAfterTeam;
