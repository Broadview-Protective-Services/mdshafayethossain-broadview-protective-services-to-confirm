import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

const stats = [
  ['24/7', 'Monitoring & Response'],
  ['100%', 'Licensed & Trained'],
  ['GTA', 'Full-Coverage Region'],
];

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <motion.p className="section-kicker section-kicker-light" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <ShieldCheck size={16} /> Professional Security Solutions
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }}>
          Protecting People.<br />Securing Businesses.<br /><span>Delivering Confidence.</span>
        </motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}>
          Luxury-grade professional security solutions designed to protect your people, property, and operations with discretion and precision.
        </motion.p>
        <motion.p className="hero-tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34 }}>
          broadviewprotectiveservices.com
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.4 }}>
          <a className="button button-light" href="#contact">Request Security Assessment <ArrowRight size={17} /></a>
          <a className="button button-outline-light" href="#contact"><Phone size={16} /> Contact Us</a>
        </motion.div>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
          {stats.map(([value, label]) => (
            <motion.div className="hero-stat" key={label} whileHover={{ y: -3 }}>
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
