import { Clock3, FileText, Shield, UsersRound, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  ['Professional Security Officers', Shield],
  ['Fast Response', Zap],
  ['Detailed Reporting', FileText],
  ['Client Trust', UsersRound],
  ['24/7 Protection', Clock3],
];

function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-intro centered">
          <p className="section-kicker">Why Choose Us</p>
          <h2>The details behind dependable protection.</h2>
        </div>
        <div className="reasons-grid">
          {reasons.map(([label, Icon], index) => (
            <motion.div
              className="reason"
              key={label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Icon size={23} />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
