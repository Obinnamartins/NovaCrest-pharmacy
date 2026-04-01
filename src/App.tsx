import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users, 
  Stethoscope, 
  Pill, 
  HeartPulse, 
  MessageSquare, 
  CheckCircle2, 
  Menu, 
  X,
  ArrowRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the mailto link
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:hello@novacrestpharmacy.com?subject=${subject}&body=${body}`;
    
    // Open the user's email client
    window.location.href = mailtoUrl;
    
    setSubmitStatus({ 
      type: 'success', 
      message: 'Opening your email client to send the message...' 
    });
    
    setIsSubmitting(false);
    // Optional: Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus(null);
    }, 3000);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'Prescription Dispensing',
      description: 'Accurate and timely dispensing of your medications with expert pharmacist review.',
      icon: Pill,
    },
    {
      title: 'Drug Consultation',
      description: 'Personalized advice on how to take your medication safely and effectively.',
      icon: MessageSquare,
    },
    {
      title: 'Health Advice',
      description: 'Professional guidance on managing chronic conditions and general wellness.',
      icon: Stethoscope,
    },
    {
      title: 'OTC Medicines',
      description: 'A wide range of over-the-counter medications for common ailments.',
      icon: ShieldCheck,
    },
    {
      title: 'Wellness Support',
      description: 'Supplements and health products to support your overall well-being.',
      icon: HeartPulse,
    },
    {
      title: 'Vaccinations',
      description: 'On-site flu shots and other essential immunizations for your protection.',
      icon: CheckCircle2,
    },
  ];

  const trustFactors = [
    {
      title: 'Licensed Pharmacy',
      description: 'Fully accredited and regulated by national health authorities.',
      icon: ShieldCheck,
    },
    {
      title: 'Expert Pharmacists',
      description: 'Our team consists of highly trained and experienced professionals.',
      icon: Users,
    },
    {
      title: 'Quality Assurance',
      description: 'We source only genuine and high-quality medications.',
      icon: CheckCircle2,
    },
    {
      title: 'Customer Care',
      description: 'Dedicated support to ensure your health needs are met with compassion.',
      icon: HeartPulse,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* JSON-LD Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          "name": "NovaCrest Pharmacy",
          "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800&h=800",
          "@id": "https://ais-dev-in4mmrw2lauvdgnlluufk6-253377870755.europe-west1.run.app",
          "url": "https://ais-dev-in4mmrw2lauvdgnlluufk6-253377870755.europe-west1.run.app",
          "telephone": "+2349165434330",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "NovaCrest Pharmacy Location",
            "addressLocality": "Lagos",
            "addressRegion": "Lagos State",
            "postalCode": "100001",
            "addressCountry": "NG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.5244,
            "longitude": 3.3792
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "13:30",
              "closes": "22:00"
            }
          ]
        })}
      </script>

      {/* Navbar */}
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/90 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-emerald-600 p-1.5 text-white">
              <HeartPulse size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Nova<span className="text-emerald-600">Crest Pharmcy</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="text-slate-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-white shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-emerald-600"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/2349165434330"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 font-bold text-white shadow-lg transition-all hover:bg-emerald-700 active:scale-95"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-3xl" />
          <div className="absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-sky-50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold tracking-widest text-emerald-700 uppercase">
                Your Trusted Health Partner
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-slate-900 md:text-7xl">
                Caring for Your <span className="text-emerald-600">Health</span> Every Day.
              </h1>
              <h2 className="sr-only">Novacrest Pharmacy</h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
                Novacrest Pharmacy provides professional pharmaceutical services, expert health advice, and high-quality medications to help you live a healthier life.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
                >
                  Contact Us
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </a>
                <a
                  href="https://wa.me/2349165434330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-emerald-600 px-8 py-4 text-lg font-bold text-emerald-600 transition-all hover:bg-emerald-50 active:scale-95"
                >
                  <MessageCircle size={20} />
                  Chat with us
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?u=novacrest${i}`}
                      alt="Pharmacist"
                      className="h-12 w-12 rounded-full border-4 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Expert Team</p>
                  <p className="text-xs text-slate-500">Over 20+ years of experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl">
                <img
                  src="https://ik.imagekit.io/qesif4nm4/novacrest.webp"
                  alt="Modern NovaCrest Pharmacy Retail"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-100">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-sky-100 p-3 text-sky-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Mon - Sat: 8am - 10pm</p>
                    <p className="text-xs text-slate-500">Sun: 1:30pm - 10pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-50 py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Pharmacist Consulting"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://ik.imagekit.io/qesif4nm4/nova.jpeg"
                  alt="Quality Medications"
                  className="mt-8 rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase">About Novacrest</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Your Health is Our Top Priority</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Founded with a mission to provide accessible and professional healthcare services, Novacrest Pharmacy has been a cornerstone of the community for over two decades. We believe that a pharmacy is more than just a place to pick up prescriptions—it's a hub for health, wellness, and expert guidance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Our team of licensed pharmacists is dedicated to building trust through personalized care, ensuring every customer receives the attention and quality medication they deserve.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-emerald-600" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Our Mission</h4>
                    <p className="text-sm text-slate-500">To enhance community health through expert care.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-emerald-600" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Our Vision</h4>
                    <p className="text-sm text-slate-500">To be the most trusted health partner in the region.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase">Our Expertise</span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Comprehensive Pharmacy Services</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              We offer a wide range of services designed to meet all your healthcare needs under one roof.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative overflow-hidden bg-slate-900 py-24 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">Why Choose Us</span>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Building Trust Through Quality Care</h2>
              <p className="mt-6 text-lg text-slate-400">
                We understand that your health is your most valuable asset. That's why we go above and beyond to ensure you receive the best possible care.
              </p>
              
              <div className="mt-12 space-y-8">
                {trustFactors.map((factor, index) => (
                  <motion.div 
                    key={factor.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <factor.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{factor.title}</h4>
                      <p className="mt-1 text-slate-400">{factor.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-[3rem] border-8 border-slate-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="Professional Team at NovaCrest Pharmacy"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Stats Overlay */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -top-10 -right-10 rounded-3xl bg-emerald-600 p-8 shadow-2xl"
              >
                <p className="text-4xl font-black">99%</p>
                <p className="text-sm font-medium text-emerald-100">Customer Satisfaction</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase">Contact Us</span>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Get in Touch with Our Team</h2>
              <p className="mt-6 text-lg text-slate-600">
                Have questions about your medication or need health advice? Our pharmacists are here to help. Visit us or send a message.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Call Us</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-lg font-bold text-slate-900">+234 9165434330</p>
                      <a 
                        href="https://wa.me/2349165434330" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-200"
                      >
                        <MessageCircle size={14} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">hello@novacrestpharmacy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Visit Us</p>
                    <p className="text-lg font-bold text-slate-900">Shop 4 Yummy Yummy Plaza, Sam Ethnan AirForce Base, Ikeja, Lagos</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Shop+4+Yummy+Yummy+Plaza,Sam+Ethnan+AirForce+Base,Ikeja,Lagos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:underline"
                    >
                      View on Google Maps
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
                  <iframe
                    title="Novacrest Pharmacy Location"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Shop%204%20Yummy%20Yummy%20Plaza,Sam%20Ethnan%20AirForce%20Base,Ikeja,Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-100 md:p-12"
            >
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Obinna Martins"
                      className="w-full rounded-xl font-light border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@novecrestpharmacygmail.com"
                      className="w-full rounded-xl border-slate-200 font-light bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you today?"
                    className="w-full rounded-xl border-slate-200 font-light bg-slate-50 px-4 py-3 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                {submitStatus && (
                  <div className={`rounded-xl p-4 text-sm font-bold ${
                    submitStatus.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-emerald-600 py-4 font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-emerald-600 p-1.5 text-white">
                <HeartPulse size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Nova<span className="text-emerald-600">Crest Pharmacy</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {['Home', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/2349165434330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Novacrest Pharmacy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349165434330"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat with us
        </span>
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
