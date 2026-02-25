import React from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, Globe, Smartphone, Monitor, LayoutGrid, Link as LinkIcon, 
  ShieldCheck, Zap, Headphones, RefreshCw, ArrowRight 
} from 'lucide-react';
import { Section, Button, TrustBar, LogoStrip, ReviewCard } from '@/src/components/UI';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Trusted by 10,000+ UK Businesses
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] tracking-tight mb-8">
              Total Payment Solutions. <span className="text-indigo-600">Built for British Business.</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-xl">
              Take card payments anywhere. Online, in-store, or on the go, with transparent fees, zero hidden costs, and expert UK support whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Get My Free Quote</Button>
              <Button variant="outline">Calculate My Savings</Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-indigo-600 rounded-[3rem] rotate-3 absolute inset-0 -z-10 opacity-10"></div>
            <img 
              src="https://picsum.photos/seed/payments/800/800" 
              alt="Payment Terminal" 
              className="rounded-[3rem] shadow-2xl w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 max-w-xs hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Settlement</p>
                  <p className="font-bold text-zinc-900">Next-Day Guaranteed</p>
                </div>
              </div>
              <p className="text-sm text-zinc-500">Get your funds fast. No more waiting days for your money.</p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-32">
          <TrustBar />
        </div>
      </Section>

      <LogoStrip />

      {/* Stats Block */}
      <Section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Businesses Served', value: '10,000+' },
            { label: 'Processed Annually', value: '£2 Billion+' },
            { label: 'UK Support', value: '24/7' },
            { label: 'Uptime Guaranteed', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-zinc-900 mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4">Everything You Need to Accept Payments</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Whether you run a high street shop, a mobile trade business, or a growing ecommerce store, we have the right payment solution for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: CreditCard, title: 'Card Machines', desc: 'Accept payments in-person with the latest tech.', link: '/card-machines' },
            { icon: Globe, title: 'Online Payments', desc: 'Secure checkout for your ecommerce store.', link: '#' },
            { icon: Smartphone, title: 'Mobile Payments', desc: 'Take payments on your phone anywhere.', link: '#' },
            { icon: Monitor, title: 'Virtual Terminal', desc: 'Take payments over the phone securely.', link: '#' },
            { icon: LayoutGrid, title: 'EPOS Systems', desc: 'Integrated point of sale for your business.', link: '#' },
            { icon: LinkIcon, title: 'Pay by Link', desc: 'Send payment links via email or SMS.', link: '#' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors">
                <item.icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-zinc-600 mb-8 leading-relaxed">{item.desc}</p>
              <Link to={item.link} className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-700">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Payeesolutions */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4">The Smarter Way to Take Card Payments</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { icon: ShieldCheck, title: 'Transparent Pricing', desc: 'No setup fees, no hidden charges. See exactly what you pay before you sign anything.' },
            { icon: Zap, title: 'Next-Day Settlement', desc: 'Get your money fast. Funds in your account the next business day, guaranteed.' },
            { icon: Headphones, title: '24/7 UK Support', desc: 'Speak to a real person any time. Our UK-based team is available around the clock.' },
            { icon: RefreshCw, title: 'Switch in 48 Hours', desc: 'Already with another provider? We handle the switch for you with zero downtime.' },
          ].map((item, i) => (
            <div key={i}>
              <item.icon className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industry Selector */}
      <Section className="bg-zinc-900 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Solutions for Every Type of UK Business</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            From independent retailers to mobile tradesmen, we tailor our payment solutions to your sector.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Restaurants', 'Retail', 'Tradesmen', 'Salons', 
            'Market Traders', 'Professional Services', 'Ecommerce', 'Charities'
          ].map((industry, i) => (
            <Link 
              key={i} 
              to={industry === 'Restaurants' ? '/industries/restaurants' : '#'}
              className="bg-zinc-800/50 hover:bg-indigo-600 p-8 rounded-3xl transition-all text-center group"
            >
              <p className="font-bold text-lg mb-2">{industry}</p>
              <p className="text-xs text-zinc-500 group-hover:text-indigo-100">Tailored solutions for {industry.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Pricing Teaser */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-zinc-900 mb-6">Honest Pricing. No Surprises.</h2>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              We believe you should know exactly what you're paying. That's why we publish our rates openly, no rate cards hidden behind a sales call.
            </p>
            <div className="flex gap-4">
              <Button>See Full Pricing</Button>
              <Button variant="outline">Calculate My Savings</Button>
            </div>
          </div>
          <div className="bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="py-4 font-bold text-zinc-900">Cost Item</th>
                  <th className="py-4 font-bold text-zinc-900 text-right">Our Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="py-4 text-zinc-600">Debit Cards</td>
                  <td className="py-4 text-zinc-900 font-bold text-right">From 0.29%</td>
                </tr>
                <tr>
                  <td className="py-4 text-zinc-600">Credit Cards</td>
                  <td className="py-4 text-zinc-900 font-bold text-right">From 0.79%</td>
                </tr>
                <tr>
                  <td className="py-4 text-zinc-600">Setup Fee</td>
                  <td className="py-4 text-green-600 font-bold text-right">£0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4">Trusted by 10,000+ UK Businesses</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: 'Switched from Handepay and saved £800 in the first year. Setup took less than 48 hours.', author: 'Sarah T.', role: 'Café Owner', location: 'Manchester' },
            { text: 'Best customer service I\'ve experienced from any payment provider. Real people, real help.', author: 'James R.', role: 'Electrician', location: 'Birmingham' },
            { text: 'The pricing is completely transparent. No nasty surprises on my monthly bill.', author: 'Priya M.', role: 'Salon Owner', location: 'London' },
          ].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </Section>

      {/* FAQ Strip */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-zinc-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long does it take to set up?', a: 'Most businesses are taking payments within 48 hours.' },
              { q: 'Are there any hidden fees?', a: 'Never. Our pricing is fully transparent, what you see is what you pay.' },
              { q: 'Can I switch from my current provider?', a: 'Yes. We manage the full switch process for you, usually in under 48 hours.' },
              { q: 'What payment types do you accept?', a: 'All major debit and credit cards, contactless, Apple Pay, Google Pay, and more.' },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{faq.q}</h3>
                <p className="text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-indigo-600 text-white rounded-[4rem] mx-4 mb-24 text-center py-32">
        <h2 className="text-5xl md:text-6xl font-black mb-8">Ready to Get Started?</h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get your free, no-obligation quote in under 60 seconds. Our UK team will call you back within the hour.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <Button variant="secondary" className="px-12">Get Your Free Quote</Button>
          <div className="text-lg font-bold">
            Or call us: <span className="text-indigo-200">0800 XXX XXXX</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
