import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const strengths = ['Trained security professionals', 'Reliable response', 'Detailed reporting', 'Client-focused protection'];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">About broadviewprotectiveservices.com</p>
          <h2>Prevention first. Confidence always.</h2>
          <p>broadviewprotectiveservices.com provides dependable security solutions focused on prevention, response, and operational excellence. Every engagement is shaped around the realities of your site and the standards of your organization.</p>
        </motion.div>
        <motion.div
          className="strength-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5 }}
        >
          {strengths.map((strength, index) => (
            <motion.div key={strength} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1 }}>
              <span><Check size={17} /></span>{strength}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
