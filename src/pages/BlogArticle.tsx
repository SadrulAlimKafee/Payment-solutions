import React from 'react';
import Markdown from 'react-markdown';
import { Section, Button } from '@/src/components/UI';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogContent = `
# How to Switch Payment Provider in the UK: Step-by-Step Guide

Thinking of switching card payment providers? Our step-by-step guide shows UK businesses how to switch quickly, painlessly and without losing revenue.

## Why switching payment providers is easier than you think
Thousands of UK businesses switch every year to save money. The process is now more streamlined than ever, and with the right partner, you can ensure zero downtime for your business.

### Section 1 — When Should You Consider Switching?
Signs your current provider isn't right:
*   **Hidden fees**: Unexpected charges on your monthly statement.
*   **Poor support**: Waiting hours to speak to a real person when your terminal is down.
*   **Contract end approaching**: The best time to negotiate or move.
*   **New business needs**: Your current system doesn't integrate with your new EPOS.

### Section 2 — What to Check Before You Switch
*   **Contract length**: Are you still in your initial term?
*   **Early termination clause**: What are the costs to leave early?
*   **PCI compliance transfer**: Can your new provider handle the certification?
*   **EPOS compatibility**: Will the new terminals talk to your software?
*   **Settlement timing**: How fast will you get your money?

### Section 3 — Step-by-Step Switching Process
1.  **Get quotes from at least two providers**: Don't just look at the headline rate.
2.  **Compare total cost of ownership**: Include terminal rental, PCI fees, and minimum monthly service charges.
3.  **Review your current contract for exit terms**: Know your notice period.
4.  **Sign with your new provider and give notice to your old one**: Coordinate the dates.
5.  **Coordinate terminal delivery with contract end date**: Avoid paying for two systems.
6.  **Test your new terminal before going live**: Run a 1p test transaction.
7.  **Confirm settlement account details**: Ensure the money is going to the right place.

### Section 4 — How PayeeSolutions Makes Switching Seamless
We manage the entire process, handle paperwork, cover exit fees in eligible cases, and ensure zero downtime. Our team is expert in coordinating the swap so you never miss a sale.

### Section 5 — FAQ
**How long does switching take?**
Usually under 48 hours for the setup, with the physical terminal arriving next day.

**Will I lose any transactions?**
No. We ensure your new system is live before your old one is deactivated.

**Can you match my current rate?**
In 95% of cases, we can beat your current rate significantly.

## Conclusion
Start your switch today — get a free quote and our switching team will contact you within the hour.
`;

export default function BlogArticle() {
  return (
    <div className="pt-20">
      <Section className="bg-zinc-50 py-12">
        <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-indigo-600 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight mb-8">
            How to Switch Payment Provider Without Losing a Day of Trade
          </h1>
          <div className="flex flex-wrap gap-6 text-zinc-500 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center"><User className="w-4 h-4 mr-2" /> By PayeeSolutions Team</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Feb 25, 2026</div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 8 min read</div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg prose-zinc max-w-none markdown-body">
              <Markdown>{blogContent}</Markdown>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white shadow-xl">
                <h3 className="text-2xl font-black mb-4">Ready to Switch?</h3>
                <p className="text-indigo-100 mb-8 leading-relaxed">
                  Get your free, no-obligation quote in under 60 seconds. Our UK team will call you back within the hour.
                </p>
                <Button variant="secondary" className="w-full">Get My Free Quote</Button>
              </div>
              
              <div className="bg-zinc-50 rounded-[2.5rem] p-10 border border-zinc-100">
                <h3 className="text-xl font-black text-zinc-900 mb-6">Related Articles</h3>
                <ul className="space-y-6">
                  {[
                    'Understanding Interchange Fees',
                    'The Future of Contactless Payments',
                    'How to Choose an EPOS System'
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to="#" className="font-bold text-zinc-900 hover:text-indigo-600 transition-colors block leading-tight">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
