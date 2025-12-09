import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { posts } from "./posts-data";

export const metadata: Metadata = {
  title: "Blog | NoFileExistsHere. (Nexteam)",
  description: "Kumpulan artikel dan catatan dari NoFileExistsHere (Nexteam) seputar teknologi, infrastruktur, dan pengalaman project yang pernah kami kerjakan.",
  openGraph: {
    title: "Blog | NoFileExistsHere. (Nexteam)",
    description: "Baca insight dan cerita di balik project, tips seputar website, aplikasi, dan infrastruktur dari tim NoFileExistsHere (Nexteam).",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/logo/logo.webp",
        width: 1200,
        height: 630,
        alt: "NoFileExistsHere (Nexteam) blog cover",
      },
    ],
  },
};

const BlogPage = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] w-full border-b border-accent">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              / <span className="text-foreground font-medium">Blog</span>
            </p>
            <br />
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">Di sini kami menulis insight singkat, studi kasus, dan catatan ringan seputar website, aplikasi, dan infrastruktur yang kami kerjakan.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex h-full flex-col justify-between rounded-xl border border-accent bg-background/60 p-6 transition-transform duration-150 hover:-translate-y-0.5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{post.tag}</p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight group-hover:underline">{post.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-4">{post.excerpt}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-primary group-hover:underline">Baca selengkapnya</p>
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="rounded-full px-6">
            <Link href="/contact">Diskusikan ide tulisan atau project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
