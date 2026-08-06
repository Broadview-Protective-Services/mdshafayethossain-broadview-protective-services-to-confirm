import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Camera, CheckCircle2, ConciergeBell, KeyRound, ShieldCheck, Truck } from 'lucide-react';
import Modal from './Modal';

const services = [
  {
    title: 'Construction Security',
    Icon: Building2,
    description: 'Site access control, visible patrols, and asset monitoring for active projects.',
    details: 'Around-the-clock protection for construction sites and active projects. We manage access points, monitor equipment and materials, and maintain a visible deterrent against theft and vandalism.',
    points: ['Gate & access point control', 'Asset and equipment monitoring', 'Daily site reports and incident logs'],
  },
  {
    title: 'Mobile Patrol Security',
    Icon: ShieldCheck,
    description: 'Professional patrol coverage and responsive property checks when it matters.',
    details: 'A visible, responsive patrol service that covers multiple client sites across the GTA. Our officers perform scheduled and on-demand property checks to keep your premises secure around the clock.',
    points: ['Scheduled random patrol routes', 'Rapid incident response', 'GPS-verified tour reporting'],
  },
  {
    title: 'Concierge Security',
    Icon: ConciergeBell,
    description: 'A polished, security-minded front-of-house presence for your property.',
    details: 'A refined front-of-house presence that blends hospitality with security. Our concierge officers welcome visitors, manage access, and maintain a professional, secure environment for premium properties.',
    points: ['Visitor greeting and registration', 'Access and key management', 'Professional, client-facing presence'],
  },
  {
    title: 'Logistics Security',
    Icon: Truck,
    description: 'Disciplined oversight for warehouses, yards, fleets, and supply operations.',
    details: 'Comprehensive security for warehouses, yards, and fleet operations. We oversee loading docks, verify shipments, and protect high-value inventory throughout the supply chain.',
    points: ['Loading dock and yard security', 'Shipment and inventory verification', 'Fleet and asset protection'],
  },
  {
    title: 'CCTV Monitoring',
    Icon: Camera,
    description: 'Proactive monitoring and incident escalation for greater site visibility.',
    details: 'Proactive, real-time video monitoring that gives you greater visibility over your site. Our operators watch for suspicious activity and escalate incidents immediately to security or authorities.',
    points: ['24/7 live video monitoring', 'Instant incident escalation', 'Evidence-grade footage retention'],
  },
  {
    title: 'Access Control',
    Icon: KeyRound,
    description: 'Credential-aware entry management that keeps your facilities secure.',
    details: 'Credential-aware entry management that keeps your facilities secure. We manage who enters your building, when, and why — with a clear audit trail for every entry.',
    points: ['Credential verification', 'Visitor and contractor management', 'Complete entry audit trail'],
  },
];

function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-intro"><p className="section-kicker">Our Services</p><h2>Protection designed around your operation.</h2><p>Reliable, professional coverage for the spaces and people that matter to your business.</p></div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <span className="service-icon"><Icon size={25} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a role="button" tabIndex={0} onClick={() => setActive(service)} onKeyDown={(e) => { if (e.key === 'Enter') setActive(service); }}>
                  Learn more <span>→</span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <span className="modal-icon"><active.Icon size={26} /></span>
            <span className="modal-badge">Service Detail</span>
            <h3>{active.title}</h3>
            <p>{active.details}</p>
            <ul className="modal-list">
              {active.points.map((point) => <li key={point}><CheckCircle2 size={16} />{point}</li>)}
            </ul>
            <a className="button" href="#contact">Request This Service</a>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Services;
