"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog";

const categories = ["All", "Home Loans", "Refinancing", "Investment", "First Home Buyers", "Market Updates", "Tips & Guides"];

export default function BlogList({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = initialPosts.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === "All" || a.category === category;
    return matchesSearch && matchesCat;
  });

  const featured = initialPosts.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || category !== "All" || search);

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-6">
            Expert Perspectives on Australian Lending
          </h1>
          <p className="text-graphite text-lg leading-relaxed">
            Practical advice, market analysis, and strategic insights from our team of experienced
            mortgage professionals.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="pl-10 h-11 border-neutral-200"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${category === c
                  ? "bg-obsidian text-white"
                  : "bg-platinum text-graphite hover:bg-neutral-200"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {featured && category === "All" && !search && (
          <div className="mb-12 group">
            <Link href={`/blog/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 rounded-2xl border border-neutral-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[3/2] rounded-xl overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold text-gold-500 tracking-wide uppercase mb-3">Featured — {featured.category}</span>
                <h2 className="text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-4 group-hover:text-gold-500 transition-colors">{featured.title}</h2>
                <p className="text-graphite leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <Clock className="w-3 h-3" /> {featured.read_time} min read
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(category === "All" && !search ? rest : filtered).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl overflow-hidden border border-neutral-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-gold-500 tracking-wide uppercase">{article.category}</span>
                  <span className="flex items-center gap-1 text-xs text-neutral-400"><Clock className="w-3 h-3" /> {article.read_time} min</span>
                </div>
                <h3 className="font-semibold text-obsidian mb-2 leading-snug tracking-tight group-hover:text-gold-500 transition-colors">{article.title}</h3>
                <p className="text-sm text-graphite line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-graphite">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
