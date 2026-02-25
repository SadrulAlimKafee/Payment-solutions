import React from 'react';
import { motion } from 'motion/react';
import { 
  Utensils, Zap, Headphones, ShieldCheck, CheckCircle2, 
  ArrowRight, Clock, Smartphone, LayoutGrid 
} from 'lucide-react';
import { Section, Button, ReviewCard } from '@/src/components/UI';

export default function IndustryRestaurants() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-zinc-50 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-tight mb-8">
              Payment Solutions for <span className="text-indigo-600">Restaurants, Cafes & Pubs</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10">
              From table-side payments to click & collect ordering, our hospitality payment systems are built for the pace of a busy service.
            </p>
            <Button>Get a Quote for My Hospitality Business</Button>
            
            <div className="flex flex-wrap gap-4 mt-12">
              {[
                'Works with 50+ EPOS', 'Pay at table', 'Split bill', 'Order & Pay', 'QR menus'
              ].map((point, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-bold text-zinc-700 shadow-sm">
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/restaurant/800/800" 
              alt="Restaurant Payment" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Pain Points */}
      <Section>
        <h2 className="text-4xl font-black text-zinc-900 mb-16 text-center">We Understand the Challenges of Hospitality</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Long queues at the till', solution: 'Solved with portable terminals for table-service' },
            { title: 'Slow settlement holding back cash flow', solution: 'Solved with next-day or same-day settlement' },
            { title: 'EPOS integration headaches', solution: 'Compatibility with 50+ major EPOS providers' },
            { title: 'High transaction fees eating margins', solution: 'Transparent rates from 0.29%' },
            { title: 'System downtime during rush', solution: '99.9% uptime guarantee + 24/7 swap service' },
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100">
              <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">The Challenge</p>
              <h3 className="text-xl font-bold text-zinc-900 mb-6">{item.title}</h3>
              <div className="flex items-center text-green-600 font-bold">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {item.solution}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-zinc-900 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-12">Hospitality Payment Features</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Smartphone, title: 'Portable Terminals', desc: 'All-day battery for table service.' },
                { icon: Clock, title: 'Pay at Table', desc: 'Improve turnover and customer experience.' },
                { icon: LayoutGrid, title: 'EPOS Integration', desc: 'Works with Lightspeed, Square, and more.' },
                { icon: Zap, title: 'QR Ordering', desc: 'Contactless ordering and payments.' },
              ].map((feature, i) => (
                <div key={i}>
                  <feature.icon className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-800 p-12 rounded-[3rem]">
            <h3 className="text-2xl font-bold mb-8">Full Feature List</h3>
            <ul className="space-y-4">
              {[
                'Split-bill processing',
                'Service charge handling',
                'Table management view',
                'End-of-day Z-report',
                'Till reconciliation',
                'Multi-currency support',
                'Offline mode processing',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ReviewCard 
            review={{
              text: 'Switching to PayeeSolutions saved our restaurant £1,200 a year and the portable terminals have genuinely improved our table service.',
              author: 'The Crown',
              role: 'Restaurant',
              location: 'Surrey'
            }}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-zinc-900 mb-12 text-center">Hospitality FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Do your terminals work with my existing EPOS?', a: 'In most cases, yes. We are compatible with over 50 EPOS systems used in UK hospitality.' },
              { q: 'Can customers split the bill?', a: 'Yes. Our terminals support split-bill payments natively.' },
              { q: 'Do you offer QR table ordering?', a: 'Yes — ask about our Order & Pay add-on when getting your quote.' },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm">
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
