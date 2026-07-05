import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import ContactCTA from "@/components/home/ContactCTA";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";

// This generates the static paths for all blog posts at build time
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Dynamically generate SEO metadata based on the post frontmatter
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Sovereign Lending`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.image }],
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Convert markdown content to HTML
    const processedContent = await remark()
        .use(html)
        .process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <>
            <article className="pt-32 pb-24 lg:pt-40 lg:pb-32">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-graphite hover:text-gold-500 transition-colors mb-8">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
                    </Link>

                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-semibold text-gold-500 tracking-wide uppercase">{post.category}</span>
                            <span className="flex items-center gap-1 text-xs text-neutral-400"><Clock className="w-3 h-3" /> {post.read_time} min read</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-obsidian tracking-tight leading-[1.12] mb-6">
                            {post.title}
                        </h1>
                    </div>

                    <div className="rounded-2xl overflow-hidden mb-12">
                        <img src={post.image} alt={post.title} className="w-full aspect-[2/1] object-cover" />
                    </div>

                    <div 
                        className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-p:text-graphite prose-p:leading-relaxed prose-li:text-graphite prose-strong:text-obsidian prose-a:text-gold-500 hover:prose-a:text-gold-600"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </article>
            <ContactCTA />
        </>
    );
}