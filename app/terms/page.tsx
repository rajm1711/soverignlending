import { COMPANY } from "@/lib/constants";
import React from "react";

export default function Terms() {
    return (
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <span className="inline-block text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                    Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-obsidian leading-[1.1] mb-8">
                    Terms & Conditions
                </h1>
                <p className="text-sm text-neutral-400 mb-16 border-b border-neutral-100 pb-8">
                    Last updated: 1 July 2026
                </p>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">1. About Us</h2>
                        <p className="text-graphite leading-relaxed">
                            {COMPANY.name} Pty Ltd (ABN {COMPANY.abn}, Australian Credit Licence {COMPANY.acl}) operates this website and provides mortgage broking services in Australia. By using this website, you agree to these terms and conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">2. Services</h2>
                        <p className="text-graphite leading-relaxed">
                            We provide mortgage broking services, including loan comparison, application preparation, and submission to lenders on our panel. Our service is provided at no direct cost to you — we are remunerated by the lender through commission upon successful settlement of a loan.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">3. General Information Only</h2>
                        <p className="text-graphite leading-relaxed">
                            The information on this website is of a general nature and has been prepared without taking into account your objectives, financial situation, or needs. Before acting on any information, you should consider the appropriateness of the information having regard to your personal circumstances. We recommend you seek independent financial advice before making any decisions based on the content of this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">4. No Guarantee of Approval</h2>
                        <p className="text-graphite leading-relaxed">
                            While we endeavour to match you with suitable lending products and assist with your application, we do not guarantee loan approval. All lending decisions are made by the lender based on their credit assessment criteria.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">5. Calculator Disclaimer</h2>
                        <p className="text-graphite leading-relaxed">
                            The calculators on this website provide estimates only and are intended as a guide. Actual loan repayments, borrowing capacity, and costs may differ based on lender-specific factors, fees, and your individual circumstances. Calculators do not constitute a loan offer or financial advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">6. Intellectual Property</h2>
                        <p className="text-graphite leading-relaxed">
                            All content on this website — including text, graphics, logos, and software — is the property of {COMPANY.name} or its licensors and is protected by Australian copyright law. You may not reproduce, distribute, or modify any content without our written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">7. Website Availability</h2>
                        <p className="text-graphite leading-relaxed">
                            We make reasonable efforts to ensure this website is available at all times but do not guarantee uninterrupted access. We may modify, suspend, or discontinue any part of the website without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">8. Limitation of Liability</h2>
                        <p className="text-graphite leading-relaxed">
                            To the maximum extent permitted by law, {COMPANY.name} excludes all liability for any loss or damage arising from your use of this website or reliance on any information contained herein. This includes, without limitation, indirect or consequential loss.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">9. Third-Party Links</h2>
                        <p className="text-graphite leading-relaxed">
                            This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of use of any linked websites. Access to these sites is at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">10. Governing Law</h2>
                        <p className="text-graphite leading-relaxed">
                            These terms are governed by the laws of New South Wales, Australia. Any disputes arising from your use of this website will be subject to the exclusive jurisdiction of the courts of New South Wales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-obsidian mb-4 tracking-tight">11. Changes to Terms</h2>
                        <p className="text-graphite leading-relaxed">
                            We reserve the right to update these terms at any time. Changes take effect immediately upon posting to this website. Your continued use of the website constitutes acceptance of any modified terms.
                        </p>
                    </section>

                    <div className="bg-platinum p-8 rounded-2xl mt-16">
                        <h2 className="text-xl font-semibold text-obsidian mb-4 tracking-tight">Contact</h2>
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