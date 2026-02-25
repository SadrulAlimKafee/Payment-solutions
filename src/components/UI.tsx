import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200',
    secondary: 'bg-white text-zinc-900 hover:bg-zinc-50 shadow-zinc-200',
    outline: 'bg-transparent border-2 border-zinc-200 text-zinc-900 hover:border-indigo-600 hover:text-indigo-600'
  };

  return (
    <button 
      className={cn(
        "px-8 py-4 rounded-full font-bold transition-all active:scale-95 shadow-lg",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Section({ 
  children, 
  className, 
  id,
  dark = false 
}: { children: React.ReactNode; className?: string; id?: string; dark?: boolean }) {
  return (
    <section id={id} className={cn("py-24 px-4 sm:px-6 lg:px-8", dark ? "bg-zinc-900 text-white" : "bg-white", className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function ReviewCard({ review }: { review: { text: string; author: string; role: string; location: string } }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-zinc-700 mb-6 italic leading-relaxed">"{review.text}"</p>
      <div>
        <p className="font-bold text-zinc-900">{review.author}</p>
        <p className="text-sm text-zinc-500">{review.role}, {review.location}</p>
      </div>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-zinc-500 py-8 border-y border-zinc-100">
      <div className="flex items-center"><Star className="w-4 h-4 text-yellow-400 mr-2 fill-yellow-400" /> 4.9/5 by 2,000+ UK businesses</div>
      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> No Hidden Fees</div>
      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 24/7 UK Support</div>
      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Next-Day Settlement</div>
      <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> FCA Regulated</div>
    </div>
  );
}

export function LogoStrip() {
  const logos = ['Visa', 'Mastercard', 'Amex', 'Google Pay', 'Apple Pay', 'Klarna'];
  return (
    <div className="bg-zinc-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Accepting all major payment methods</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map(logo => (
            <span key={logo} className="text-xl font-black text-zinc-900">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
