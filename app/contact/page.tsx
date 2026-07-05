'use client'
import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("@/components/shared/ContactMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-2xl bg-neutral-200 animate-pulse" />
});
import useScrollAnimation from "@/lib/useScrollAnimation";
import { COMPANY } from "@/lib/constants";
import EnquiryForm from "@/components/shared/EnquiryForm";

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-6">
              Start Your Journey Today
            </h1>
            <p className="text-graphite text-lg leading-relaxed mb-10">
              Whether you're ready to apply or just exploring your options, we'd love to hear from you.
              Fill out the form and one of our senior brokers will be in touch within 2 business hours.
            </p>

            <div className="space-y-6 mb-10">
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                  <Phone className="w-5 h-5 text-graphite group-hover:text-gold-500 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-obsidian">{COMPANY.phone}</p>
                  <p className="text-xs text-neutral-400">Mon–Fri, 8am–6pm AEST</p>
                </div>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                  <Mail className="w-5 h-5 text-graphite group-hover:text-gold-500 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-obsidian">{COMPANY.email}</p>
                  <p className="text-xs text-neutral-400">We respond within 2 hours</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-graphite" />
                </div>
                <div>
                  <p className="text-sm font-medium text-obsidian">{COMPANY.address}</p>
                  <p className="text-xs text-neutral-400">By appointment</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-platinum flex items-center justify-center">
                  <Clock className="w-5 h-5 text-graphite" />
                </div>
                <div>
                  <p className="text-sm font-medium text-obsidian">Monday – Friday</p>
                  <p className="text-xs text-neutral-400">8:00 AM – 6:00 PM AEST | After-hours by arrangement</p>
                </div>
              </div>
            </div>

            <div
              ref={ref}
              className={`rounded-2xl overflow-hidden h-64 transition-all duration-700 relative z-0 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <ContactMap company={COMPANY} />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 lg:p-10 shadow-sm sticky top-28">
              <h2 className="text-xl font-semibold text-obsidian mb-2">Free Consultation Request</h2>
              <p className="text-sm text-graphite mb-8">No obligation. No cost. Just expert advice.</p>
              <EnquiryForm source="contact_page" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}