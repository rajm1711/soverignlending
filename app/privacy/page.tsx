import { COMPANY } from "@/lib/constants";
import React from "react";

export default function Privacy() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Legal
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-400 mb-16 border-b border-neutral-100 pb-8">
          Last updated: 1 July 2026
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">1. Overview</h2>
            <p className="text-graphite leading-relaxed">
              {COMPANY.name} Pty Ltd (ABN {COMPANY.abn}) is committed to protecting your personal information in accordance with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). This policy explains how we collect, use, disclose, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">2. Information We Collect</h2>
            <p className="text-graphite leading-relaxed mb-4">
              We collect personal information necessary to assess your lending needs and provide our broking services, including:
            </p>
            <ul className="space-y-3">
              {[
                "Contact details (name, email, phone, address)",
                "Financial information (income, expenses, assets, liabilities)",
                "Employment details",
                "Identification documents",
                "Credit history (with your consent)",
                "Property details relevant to your loan enquiry"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-graphite">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">3. How We Use Your Information</h2>
            <p className="text-graphite leading-relaxed mb-4">
              We use your personal information to:
            </p>
            <ul className="space-y-3">
              {[
                "Assess your borrowing capacity and loan suitability",
                "Compare and recommend loan products from our lender panel",
                "Submit loan applications on your behalf",
                "Communicate with you about your enquiry or application",
                "Comply with our legal obligations under the National Consumer Credit Protection Act 2009",
                "Improve our services and website experience"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-graphite">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">4. Disclosure of Information</h2>
            <p className="text-graphite leading-relaxed mb-4">
              We may share your personal information with:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                "Lenders and financial institutions on our panel (for loan applications)",
                "Our aggregator and industry bodies (for compliance purposes)",
                "Credit reporting bodies (with your consent)",
                "Professional advisors (lawyers, accountants) as necessary",
                "Government bodies where required by law"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-graphite">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-graphite leading-relaxed font-medium">
              We will never sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">5. Data Security</h2>
            <p className="text-graphite leading-relaxed">
              We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, or disclosure. Our security measures include encrypted data transmission, secure document storage, access controls, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">6. Access and Correction</h2>
            <p className="text-graphite leading-relaxed">
              You have the right to access and correct your personal information held by us. To make a request, contact our Privacy Officer at {COMPANY.email} or call {COMPANY.phone}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">7. Cookies and Analytics</h2>
            <p className="text-graphite leading-relaxed">
              Our website uses cookies and analytics tools to improve your browsing experience and understand how visitors use our site. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">8. Complaints</h2>
            <p className="text-graphite leading-relaxed">
              If you believe we have breached the Australian Privacy Principles, please contact our Privacy Officer. If you're not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC).
            </p>
          </section>

          <div className="bg-platinum p-8 rounded-2xl mt-16">
            <h2 className="text-xl font-semibold text-obsidian mb-4 tracking-tight">Contact Us</h2>
            <p className="text-graphite leading-relaxed">
              <strong>{COMPANY.name} Pty Ltd</strong><br />
              {COMPANY.address}<br />
              Email: <a href={`mailto:${COMPANY.email}`} className="text-gold-500 hover:text-gold-600 transition-colors">{COMPANY.email}</a><br />
              Phone: {COMPANY.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}