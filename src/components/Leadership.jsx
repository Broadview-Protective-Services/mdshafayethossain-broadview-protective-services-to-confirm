import { motion } from 'framer-motion';

const founders = [
  ['Md Shafayet Hossain Bhuiyan', 'shafayet@broadviewprotectiveservices.com', 'Shafayet oversees operations, client relations, and service delivery, ensuring every engagement meets the highest security standards.'],
  ['Shefayen Islam', 'shefayen@broadviewprotectiveservices.com', 'Shefayen drives strategy, talent, and growth, building a team culture rooted in professionalism and reliability.'],
];

function Leadership() {
  return (
    <section id="leadership" className="section leadership-section">
      <div className="container">
        <div className="section-intro centered">
          <p className="section-kicker">Leadership Team</p>
          <h2>Built on equal partnership and shared standards.</h2>
          <p>Two co-founders, one commitment — delivering professional, dependable protection across the GTA through broadviewprotectiveservices.com.</p>
        </div>
        <div className="founders-grid">
          {founders.map(([name, email, bio], index) => (
            <motion.article
              className="founder-card"
              key={name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="founder-initials">
                {name.split(' ').filter((_, i) => i === 0 || i === name.split(' ').length - 1).map((word) => word[0]).join('')}
              </div>
              <h3>{name}</h3>
              <p className="founder-role">Co-Founder &amp; Director</p>
              <p className="founder-bio">{bio}</p>
              <span className="ownership">50% Ownership</span>
              <a href={`mailto:${email}`}>Send email</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
