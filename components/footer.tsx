import { Separator } from "@/components/ui/separator";
import RevealOnScroll from "./animation/reveal-on-scroll";
import { Instagram, Linkedin, Music2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "./navbar/logo";

const footerSections = [
  {
    title: "Other Place",
    links: [
      {
        title: "Fastwork",
        href: "https://fastwork.id/user/wikiarlnm/technical-support-53320956",
      },
      {
        title: "Upwork",
        href: "https://www.upwork.com/services/product/development-it-technical-support-jaringan-website-toubleshooting-1936466459809396282?ref=project_share",
      },
      {
        title: "Sribu",
        href: "https://www.sribu.com/id/users/wikiarlianm/technical-support-32a666c4-d3a8-45be-af61-a4b54ec3ebdb",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Projects",
        href: "/project",
      },
      {
        title: "Blog",
        href: "/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "/terms",
      },
      {
        title: "Privacy",
        href: "/privacy",
      },
      {
        title: "License",
        href: "/license",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Instagram",
        href: "https://www.instagram.com/fornexteam/",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/nofileexistshere/",
      },
      {
        title: "Tiktok",
        href: "https://www.tiktok.com/@fornexteam?_t=ZS-8t0J7M0lKa0&_r=1",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 relative border-t bg-gradient-to-b from-background to-background/80">
      <div className="relative max-w-(--breakpoint-xl) mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        <RevealOnScroll>
          <div className="col-span-full xl:col-span-2">
            {/* Logo */}
            <div className="flex flex-col items-start gap-3">
              <div className="relative h-25 w-25">
                <Image src="/logo/logo.webp" alt="NoFileExistsHere logo" fill sizes="(min-width: 1024px) 13rem, (min-width: 640px) 11rem, 10rem" className="object-contain object-left" />
              </div>
              <Logo />
            </div>

            <p className="mt-4 text-muted-foreground">Membantu bisnis menghadirkan pengalaman digital yang simpel, cepat, dan bermakna.</p>
          </div>
        </RevealOnScroll>

        {footerSections.map(({ title, links }, index) => (
          <RevealOnScroll key={title} delay={0.04 * index}>
            <div className="xl:justify-self-end pl-4 sm:pl-8 md:pl-12">
              <h6 className="font-semibold text-foreground">{title}</h6>
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href} className="text-muted-foreground hover:text-foreground">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <div className="relative max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="https://shadcnui-blocks.com" target="_blank">
            NoFileExistsHere
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://www.instagram.com/fornexteam/" target="_blank" aria-label="Instagram Nexteam">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/nofileexistshere/" target="_blank" aria-label="LinkedIn Nexteam">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.tiktok.com/@fornexteam?_t=ZS-8t0J7M0lKa0&_r=1" target="_blank" aria-label="TikTok Nexteam">
            <Music2 className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Huge decorative text at the very bottom */}
      <div className="pointer-events-none select-none absolute inset-x-0 -bottom-10 sm:-bottom-44 md:-bottom-80 flex justify-center">
        <span className="font-mono font-bold tracking-[0.001em] text-[16vw] sm:text-[12vw] md:text-[10vw] leading-none text-foreground/5">NoFileExitsHere</span>
      </div>
    </footer>
  );
};

export default Footer;
