import type { Metadata } from "next";
import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { posts } from "../posts-data";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog | NoFileExistsHere. (Nexteam)",
    };
  }

  return {
    title: `${post.title} | NoFileExistsHere. (Nexteam)`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | NoFileExistsHere. (Nexteam)`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
};

const BlogDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-[calc(100vh-4rem)] w-full">
        <section className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6">
          <p className="text-center text-muted-foreground">Artikel tidak ditemukan.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] w-full">
      <section className="max-w-(--breakpoint-xl) mx-auto w-full py-10 xs:py-14 px-6 space-y-10">
        <RevealOnScroll>
          <div className="space-y-3 text-center mb-6 md:mb-8">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{post.tag}</p>
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
            <p className="text-xs xs:text-sm text-muted-foreground">
              <br />
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>{" "}
              / <span className="text-foreground font-medium">{post.title}</span>
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <article className="space-y-5 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground text-justify">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </article>
        </RevealOnScroll>

        {/* CTA bawah */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button asChild size="sm" className="rounded-full">
            <Link href="/blog">Back To Blog</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <Link href="/contact">Discuss Similar Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;
