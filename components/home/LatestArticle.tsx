import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { getAllPosts } from "@/lib/blog";

function ArticleCard({ article, index }: { article: any, index: number }) {
    return (
        <div
            className={`group rounded-2xl overflow-hidden bg-white border border-neutral-100 hover:border-gold-200 transition-all duration-500 hover:shadow-lg hover:shadow-gold-500/5`}
        >
            <div className="aspect-[3/2] overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-gold-500 tracking-wide uppercase">
                        {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400">
                        <Clock className="w-3 h-3" /> {article.read_time} min read
                    </span>
                </div>
                <h3 className="font-semibold text-obsidian mb-2 leading-snug tracking-tight group-hover:text-gold-500 transition-colors">
                    {article.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-500 hover:text-gold-600 transition-colors"
                >
                    Read article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </div>
    );
}

export default function LatestArticles() {
    // Fetch latest 3 posts dynamically
    const articles = getAllPosts().slice(0, 3);

    return (
        <section className="py-24 lg:py-32 bg-platinum">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    label="Insights & Articles"
                    title="Expert Perspectives on Australian Lending"
                    description="Practical advice, market analysis, and strategic insights from our team of experienced mortgage professionals."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <ArticleCard key={article.slug} article={article} index={i} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-obsidian hover:text-gold-500 transition-colors border border-neutral-200 px-6 py-3 rounded-lg hover:border-gold-300"
                    >
                        View All Articles <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
