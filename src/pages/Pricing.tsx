import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Calculator } from 'lucide-react';
import { Section, Button } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

export default function Pricing() {
  const [turnover, setTurnover] = useState(50000);
  const [rate, setRate] = useState(1.5);

  const savings = Math.round(turnover * (rate / 100 - 0.0029));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-white pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-tight mb-8">
            Honest Pricing for UK Businesses, <span className="text-indigo-600">See Every Fee</span> Before You Sign
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed mb-10">
            We publish our rates openly because we have nothing to hide. No setup fees. No hidden charges. Just fair, transparent pricing for businesses of all sizes.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 text-green-700 font-bold border border-green-100">
            <ShieldCheck className="w-5 h-5 mr-3" />
            99% of our customers say they paid exactly what they were quoted.
          </div>
        </div>
      </Section>

      {/* Pricing Plans */}
      <Section className="bg-zinc-50">
        <h2 className="text-4xl font-black text-zinc-900 mb-16 text-center">Our Payment Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              plan: 'Starter', 
              best: 'Sole traders, start-ups', 
              fee: '£15', 
              debit: '0.39%', 
              credit: '0.89%', 
              settlement: 'Next day',
              support: 'Email + phone',
              contract: '12 months'
            },
            { 
              plan: 'Growth', 
              best: 'Growing SMEs', 
              fee: '£25', 
              debit: '0.29%', 
              credit: '0.79%', 
              settlement: 'Next day',
              support: '24/7 phone',
              contract: '12 months',
              featured: true
            },
            { 
              plan: 'Pro', 
              best: 'Multi-site or high volume', 
              fee: '£45', 
              debit: '0.19%', 
              credit: '0.59%', 
              settlement: 'Same day',
              support: 'Dedicated manager',
              contract: '24 months'
            },
          ].map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "p-10 rounded-[3rem] border transition-all relative",
                item.featured ? "bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-105 z-10" : "bg-white text-zinc-900 border-zinc-100 shadow-sm"
              )}
            >
              {item.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black mb-2">{item.plan}</h3>
              <p className={cn("text-sm font-bold mb-8 uppercase tracking-wider", item.featured ? "text-indigo-400" : "text-indigo-600")}>
                {item.best}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-black">{item.fee}</span>
                <span className={cn("text-sm font-medium ml-2", item.featured ? "text-zinc-400" : "text-zinc-500")}>/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex justify-between"><span>Debit Rate</span> <span className="font-bold">{item.debit}</span></li>
                <li className="flex justify-between"><span>Credit Rate</span> <span className="font-bold">{item.credit}</span></li>
                <li className="flex justify-between"><span>Settlement</span> <span className="font-bold">{item.settlement}</span></li>
                <li className="flex justify-between"><span>Support</span> <span className="font-bold">{item.support}</span></li>
                <li className="flex justify-between"><span>Contract</span> <span className="font-bold">{item.contract}</span></li>
              </ul>
              <Button variant={item.featured ? 'primary' : 'outline'} className="w-full">Get Started</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Savings Calculator */}
      <Section>
        <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-20 text-white grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Calculate Your Savings</h2>
            <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
              Already with a payment provider? See how much you could save by switching to PayeeSolutions.
            </p>
            <div className="space-y-10">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-4">Monthly Turnover: £{turnover.toLocaleString()}</label>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  value={turnover}
                  onChange={(e) => setTurnover(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-400 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-4">Current Rate: {rate}%</label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="3" 
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-indigo-400 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[3rem] p-12 text-zinc-900 text-center">
            <Calculator className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">Potential Annual Savings</p>
            <p className="text-6xl font-black text-indigo-600 mb-8">£{savings.toLocaleString()}</p>
            <p className="text-zinc-600 mb-10 leading-relaxed">
              Based on your turnover and current rate, you could save significantly with our transparent pricing.
            </p>
            <Button className="w-full">Get My Custom Quote</Button>
          </div>
        </div>
      </Section>

      {/* Fees Explained */}
      <Section>
        <h2 className="text-4xl font-black text-zinc-900 mb-6 text-center">Every Fee, Clearly Explained</h2>
        <p className="text-xl text-zinc-600 text-center max-w-3xl mx-auto mb-16">
          The payment industry has a reputation for confusing pricing. Below we break down every possible cost so you know exactly what you are paying and why.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-zinc-200">
                <th className="py-6 font-black text-zinc-900 uppercase tracking-widest text-xs">Fee Type</th>
                <th className="py-6 font-black text-zinc-900 uppercase tracking-widest text-xs">What It Is</th>
                <th className="py-6 font-black text-zinc-900 uppercase tracking-widest text-xs text-right">Our Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {[
                { type: 'Interchange Fee', desc: 'Charged by card issuing banks. Applied to all transactions.', rate: 'Passed on at cost (0.2% - 0.3%)' },
                { type: 'Scheme Fee', desc: 'Charged by Visa/Mastercard for card network usage.', rate: 'From 0.01%' },
                { type: 'Acquiring Fee', desc: 'Our margin for processing your transactions.', rate: 'From 0.09%' },
                { type: 'PCI Compliance', desc: 'Annual security certification for card data protection.', rate: 'FREE' },
                { type: 'Monthly Terminal Rental', desc: 'Rental cost for physical card machine hardware.', rate: 'From £15/month' },
                { type: 'Chargeback Fee', desc: 'Applied only when a customer disputes a transaction.', rate: '£10 per chargeback' },
              ].map((fee, i) => (
                <tr key={i}>
                  <td className="py-6 font-bold text-zinc-900 pr-8">{fee.type}</td>
                  <td className="py-6 text-zinc-600 pr-8 leading-relaxed">{fee.desc}</td>
                  <td className="py-6 font-black text-indigo-600 text-right whitespace-nowrap">{fee.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
