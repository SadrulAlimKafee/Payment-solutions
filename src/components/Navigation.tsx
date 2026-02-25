import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Card Machines', href: '/card-machines' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Industries', href: '/industries/restaurants' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog/how-to-switch-payment-provider-uk' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-zinc-900 tracking-tight">Payee<span className="text-indigo-600">Solutions</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === link.href ? "text-indigo-600" : "text-zinc-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-zinc-200">
              <a href="tel:08000000000" className="flex items-center text-sm font-semibold text-zinc-900">
                <Phone className="w-4 h-4 mr-2 text-indigo-600" />
                0800 XXX XXXX
              </a>
              <Link
                to="/quote"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-zinc-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-zinc-100 space-y-4">
                <a href="tel:08000000000" className="flex items-center px-3 py-2 text-base font-semibold text-zinc-900">
                  <Phone className="w-5 h-5 mr-3 text-indigo-600" />
                  0800 XXX XXXX
                </a>
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-indigo-600 text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Payee<span className="text-indigo-400">Solutions</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Total payment solutions built for British business. Transparent fees, zero hidden costs, and expert UK support.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/card-machines" className="hover:text-white transition-colors">Card Machines</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Online Payments</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Mobile Payments</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Virtual Terminals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Our Partners</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog/how-to-switch-payment-provider-uk" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-indigo-400" />
                0800 XXX XXXX
              </li>
              <li className="leading-relaxed">
                24/7 UK-Based Support<br />
                Available 365 days a year
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">
            © {new Date().getFullYear()} PayeeSolutions. All rights reserved. FCA Regulated. PCI DSS Level 1 Certified.
          </p>
          <div className="flex space-x-6 text-xs">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
