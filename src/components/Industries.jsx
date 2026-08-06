import { motion } from 'framer-motion';

const industries = ['Construction & Development', 'Commercial Properties', 'Logistics & Warehousing', 'Residential Communities'];

function Industries() {
  return (
    <section id="industries" className="section industries-section">
      <div className="container industries-layout">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">Industries</p>
          <h2>Security for the environments that keep Canada moving.</h2>
        </motion.div>
        <div className="industry-list">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <span>0{index + 1}</span>{industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
