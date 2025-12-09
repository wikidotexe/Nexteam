import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type StoreTemplate = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  isFree: boolean;
  popularity: number;
  stack: string;
  image?: string;
  lastUpdated: string;
  version: string;
};

const storeTemplates: StoreTemplate[] = [
  {
    slug: "portfolio-creative",
    title: "Portfolio – Creative Personal Website Template",
    excerpt: "Template portfolio pribadi untuk developer atau designer dengan layout bersih, section hero, about, skills, daftar project, dan CTA kontak yang diarahkan ke WhatsApp atau email.",
    category: "Portfolio",
    tags: ["Personal", "Portfolio", "Landingpage"],
    isFree: false,
    popularity: 80,
    stack: "Next.js, Tailwind CSS",
    image: "/store/portfolio.png",
    lastUpdated: "2025-05-01",
    version: "1.0",
  },
];

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const template = storeTemplates.find((tpl) => tpl.slug === slug);

  if (!template) {
    return {
      title: "Store | NoFileExistsHere. (Nexteam)",
    };
  }

  return {
    title: `${template.title} | NoFileExistsHere. (Nexteam)`,
    description: template.excerpt,
    openGraph: {
      title: `${template.title} | NoFileExistsHere. (Nexteam)`,
      description: template.excerpt,
      url: `/store/${template.slug}`,
      type: "website",
    },
  };
};

const StoreTemplateDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const template = storeTemplates.find((tpl) => tpl.slug === slug);

  if (!template) {
    notFound();
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] w-full">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Website Template</p>
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">{template.title}</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/store" className="hover:text-foreground">
                Store
              </Link>{" "}
              / <span className="text-foreground font-medium">{template.title}</span>
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.03}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            <div className="space-y-8">
              <Card className="overflow-hidden border bg-card">
                <CardHeader className="border-b bg-background/60">
                  <p className="text-xs text-muted-foreground">Preview Image</p>
                </CardHeader>
                <CardContent className="relative h-64 sm:h-80 lg:h-96 bg-muted p-0">
                  {template.image ? (
                    <>
                      <Image src={template.image} alt={template.title} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
                      <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between text-[11px]">
                        <span className="rounded-full bg-background/90 px-2 py-0.5 text-muted-foreground">Preview</span>
                        <span className="rounded-full bg-foreground px-2 py-0.5 text-background">{template.isFree ? "Free" : "Premium"}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">Preview area</div>
                  )}
                </CardContent>
              </Card>

              <article className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>{template.excerpt}</p>
                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-foreground">Technical Features</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{template.stack}</li>
                    <li>Responsive layout dengan Tailwind CSS.</li>
                    <li>Struktur komponen yang siap dikembangkan lebih lanjut.</li>
                  </ul>
                </section>

                <section className="space-y-2">
                  <h2 className="text-base font-semibold text-foreground">Use Cases</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Portfolio pribadi untuk developer atau designer.</li>
                    <li>CV online / personal branding page dengan highlight project.</li>
                    <li>Landing page sederhana untuk jual jasa freelance atau konsultasi.</li>
                  </ul>
                </section>
              </article>
            </div>

            <aside className="space-y-4">
              <Card className="border bg-card">
                <CardContent className="space-y-4 pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{template.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">License</span>
                    <span className="font-medium">{template.isFree ? "Free" : "Premium"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span className="font-medium">{template.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-medium">{template.version}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {template.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button asChild className="w-full rounded-full">
                  <Link href="/contact">Discuss This Template</Link>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link href="/store">Back To Store</Link>
                </Button>
              </div>
            </aside>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
};

export default StoreTemplateDetailPage;
