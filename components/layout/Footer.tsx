import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Home Loans", path: "/services" },
    { label: "Commercial Lending", path: "/services" },
    { label: "Industrial Finance", path: "/services" },
    { label: "Property Investment", path: "/services" },
    { label: "Land & Construction", path: "/services" },
    { label: "Refinancing", path: "/services" },
  ],
  Resources: [
    { label: "Repayment Calculator", path: "/calculators" },
    { label: "Borrowing Calculator", path: "/calculators" },
    { label: "Blog & Insights", path: "/blog" },
    { label: "FAQs", path: "/faqs" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo.png" 
                alt="Sovereign Lending Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8 rounded-sm object-cover" 
              />
              <span className="font-semibold text-lg tracking-tight">{COMPANY.name}</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
              Australia's trusted mortgage brokerage. We connect you with the right loan
              from over 40 leading lenders, with expert guidance at every step.
            </p>
            <div className="space-y-3">
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-neutral-400 hover:text-gold-500 transition-colors">
                <Phone className="w-4 h-4" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-neutral-400 hover:text-gold-500 transition-colors">
                <Mail className="w-4 h-4" /> {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {COMPANY.address}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-5 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.path}
                      className="text-sm text-neutral-400 hover:text-gold-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. ABN {COMPANY.abn} | Australian Credit Licence {COMPANY.acl}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 px-6 py-4">
        <p className="text-[11px] text-neutral-600 max-w-7xl mx-auto leading-relaxed">
          Disclaimer: This website provides general information only and has been prepared without taking into account your objectives,
          financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances and your full
          financial situation will need to be reviewed prior to acceptance of any offer or product. Subject to lender terms, conditions,
          fees and charges. Credit criteria apply. Sovereign Lending Pty Ltd holds an Australian Credit Licence.
        </p>
      </div>
    </footer>
  );
}
