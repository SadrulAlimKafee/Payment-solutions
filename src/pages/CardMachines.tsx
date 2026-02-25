import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, Headphones, Truck, ShieldCheck, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { Section, Button } from '@/src/components/UI';

export default function CardMachines() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-zinc-50 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-tight mb-8">
              Card Machines for UK Businesses, Starting from <span className="text-indigo-600">£0 Upfront</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10">
              Accept payments anywhere with our range of countertop, portable and mobile card readers. FCA regulated. PCI compliant. No long tie-ins.
            </p>
            <Button>Get a Free Card Machine Quote</Button>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { label: 'Transaction Rate', value: 'From 0.29%' },
                { label: 'Next-Day Delivery', value: 'Free' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'UK Support', value: '24/7' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="font-bold text-zinc-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/terminal/800/800" 
              alt="Card Machine" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Comparison Table */}
      <Section>
        <h2 className="text-4xl font-black text-zinc-900 mb-12 text-center">Choose the Right Card Machine</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              type: 'Countertop Terminal', 
              best: 'Fixed retail & restaurants', 
              features: 'Wired, fast, reliable, integrates with EPOS, accepts all cards + contactless' 
            },
            { 
              type: 'Portable Terminal', 
              best: 'Table service, pop-ups, studios', 
              features: 'Bluetooth-connected, 8-hour battery, 50m range, all payment types' 
            },
            { 
              type: 'Mobile Card Reader (4G)', 
              best: 'Tradesmen, deliveries, markets', 
              features: 'SIM card connectivity, works anywhere, compact and lightweight' 
            },
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{item.type}</h3>
              <p className="text-indigo-600 font-bold text-sm mb-6 uppercase tracking-wider">Best For: {item.best}</p>
              <p className="text-zinc-600 leading-relaxed mb-8">{item.features}</p>
              <Button variant="outline" className="w-full">Select This Machine</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-zinc-900 text-white">
        <h2 className="text-4xl font-black mb-16 text-center">Up and Running in 3 Simple Steps</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'Get a Quote', desc: 'Tell us about your business. Our team will build a package tailored to your needs in minutes.' },
            { step: '02', title: 'We Deliver', desc: 'Your card machine arrives the next working day, pre-configured and ready to use straight out of the box.' },
            { step: '03', title: 'Start Taking Payments', desc: 'Begin accepting cards, contactless, Apple Pay and Google Pay immediately. Call us 24/7 if you need any help.' },
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="text-8xl font-black text-zinc-800 absolute -top-10 -left-4 z-0">{item.step}</span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features & Benefits */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-zinc-900 mb-8">Everything Your Card Machine Comes With</h2>
            <ul className="space-y-6">
              {[
                'Accepts all major cards: Visa, Mastercard, Amex, Maestro',
                'Contactless, chip & PIN, Apple Pay, Google Pay, Samsung Pay',
                'Next-day settlement — funds in your account the next business day',
                'Online transaction dashboard — view and manage payments in real time',
                'PCI DSS compliant — fully secure and meeting industry standards',
                'Free paper rolls included',
                '24/7 UK-based technical support',
                'Swap or replace faulty terminals within 24 hours',
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-50 p-12 rounded-[3rem]">
            <h3 className="text-3xl font-black text-zinc-900 mb-8">Card Machine Pricing</h3>
            <div className="space-y-6">
              {[
                { label: 'Transaction rate (debit)', value: 'From 0.29%' },
                { label: 'Transaction rate (credit)', value: 'From 0.79%' },
                { label: 'Monthly terminal rental', value: 'From £15/month' },
                { label: 'Setup fee', value: '£0 — Free' },
                { label: 'PCI compliance fee', value: '£0 — Included' },
                { label: 'Early termination', value: 'No penalty after 12m' },
              ].map((price, i) => (
                <div key={i} className="flex justify-between items-center border-b border-zinc-200 pb-4">
                  <span className="text-zinc-600">{price.label}</span>
                  <span className="font-bold text-zinc-900">{price.value}</span>
                </div>
              ))}
            </div>
            <Button className="w-full mt-10">Get Your Custom Quote</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
