import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Section, Button } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

export default function Partners() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-zinc-50 pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-tight mb-8">
            Backed by the World's <span className="text-indigo-600">Best Payment Brands</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-10">
            When you choose PayeeSolutions, you're not just getting a local payment provider — you're getting access to globally trusted infrastructure from Clover, Worldpay and Elavon.
          </p>
          <Button>Get a Quote, See Which Solution Fits You</Button>
        </div>
      </Section>

      {/* Anchor Partners */}
      <Section>
        <div className="space-y-24">
          {[
            {
              name: 'Clover',
              desc: "Clover is one of the world's leading point-of-sale and business management platforms. Through our Clover partnership, clients gain access to award-winning hardware ecosystem.",
              benefits: [
                'Smart EPOS terminals with built-in inventory',
                'Seamless card acceptance: Visa, Mastercard, Amex',
                'Cloud-based reporting accessible from any device',
                '300+ apps in the Clover App Market'
              ],
              color: 'bg-green-50 text-green-900 border-green-100'
            },
            {
              name: 'Worldpay',
              desc: "Worldpay is the UK's largest payment processor, handling over 40% of all card transactions. Access world-class infrastructure with our local expertise.",
              benefits: [
                '99.999% uptime on transaction processing',
                'Advanced fraud detection and chargeback tools',
                'Multi-currency support for international customers',
                'Enterprise-grade infrastructure at SME pricing'
              ],
              color: 'bg-blue-50 text-blue-900 border-blue-100'
            },
            {
              name: 'Elavon',
              desc: "Elavon is one of the largest payment processors in Europe, processing billions annually. Powers solutions for some of the UK's biggest brands.",
              benefits: [
                'Rock-solid acquiring infrastructure',
                'Accepts payments in 120+ currencies',
                'Full PCI DSS Level 1 compliance',
                'Flexible APIs for seamless integration'
              ],
              color: 'bg-indigo-50 text-indigo-900 border-indigo-100'
            }
          ].map((partner, i) => (
            <div key={i} className={cn("p-12 md:p-20 rounded-[4rem] border grid lg:grid-cols-2 gap-16 items-center", partner.color)}>
              <div>
                <h2 className="text-5xl font-black mb-8">{partner.name}</h2>
                <p className="text-xl opacity-80 leading-relaxed mb-12">{partner.desc}</p>
                <ul className="space-y-4">
                  {partner.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center font-bold">
                      <CheckCircle2 className="w-6 h-6 mr-4 opacity-50" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-video bg-white/50 rounded-[3rem] flex items-center justify-center">
                <span className="text-6xl font-black opacity-20">{partner.name} Logo</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Secondary Partners */}
      <Section className="bg-zinc-900 text-white">
        <h2 className="text-4xl font-black mb-16 text-center">Our Integration Network</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            'Visa', 'Mastercard', 'Amex', 'Google Pay', 'Apple Pay',
            'Samsung Pay', 'Klarna', 'Xero', 'QuickBooks', 'Shopify'
          ].map((item, i) => (
            <div key={i} className="bg-zinc-800 p-8 rounded-3xl text-center flex items-center justify-center font-black text-xl opacity-50 hover:opacity-100 transition-all">
              {item}
            </div>
          ))}
        </div>
      </Section>

      {/* Partner FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-zinc-900 mb-12 text-center">Partner FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Does PayeeSolutions process my payments directly?', a: 'PayeeSolutions works with established acquiring partners including Worldpay and Elavon to process transactions. This means your payments run on proven, secure infrastructure.' },
              { q: 'Are my funds protected?', a: 'Yes. All funds are processed through FCA-regulated acquiring banks. Your settlement is protected by the same regulations.' },
              { q: 'Can I choose which partner processes my payments?', a: 'We\'ll match you with the best-fit acquiring partner for your business type, turnover and industry.' },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{faq.q}</h3>
                <p className="text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
