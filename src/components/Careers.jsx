import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Award, BadgeCheck, Briefcase, Building2, CalendarCheck, CheckCircle2,
    Clock, GraduationCap, HeartHandshake, MapPin, ShieldCheck, Users, Wallet, Send
} from 'lucide-react';
import Modal from './Modal';

const categories = ['All', 'Security Guard', 'Supervisor', 'Dispatch', 'Specialist'];

const jobs = [
    ['Licensed Security Guard', 'On-Site Patrol', 'Security Guard', 'Toronto, ON', 'Full-time', 'Construction, commercial, and residential sites.'],
    ['Mobile Patrol Officer', 'Mobile Patrol', 'Security Guard', 'GTA Region', 'Full-time', 'Responsive patrol coverage for multiple client sites.'],
    ['Concierge Security Officer', 'Front of House', 'Security Guard', 'Toronto, ON', 'Full-time', 'Polished, security-minded presence for premium properties.'],
    ['Access Control Officer', 'Access Control', 'Security Guard', 'Mississauga, ON', 'Part-time', 'Credential-aware entry management and visitor screening.'],
    ['Shift Supervisor', 'Operations', 'Supervisor', 'Toronto, ON', 'Full-time', 'Lead and mentor guard teams across active sites.'],
    ['Field Supervisor', 'Operations', 'Supervisor', 'GTA Region', 'Full-time', 'Site inspections, staff support, and quality assurance.'],
    ['Security Dispatcher', 'Dispatch Center', 'Dispatch', 'Remote / Hybrid', 'Full-time', 'Coordinate patrols, alarms, and incident escalation.'],
    ['CCTV Monitoring Specialist', 'Surveillance', 'Specialist', 'Toronto, ON', 'Full-time', 'Proactive monitoring and real-time incident response.'],
];

const perks = [
    ['Competitive Pay', Wallet, 'Fair, transparent compensation with overtime and shift premiums.'],
    ['Paid Training', GraduationCap, 'Comprehensive onboarding and ongoing professional development.'],
    ['Uniform & Equipment', ShieldCheck, 'High-quality issued uniform and all necessary duty equipment.'],
    ['Career Growth', Award, 'Clear advancement path from officer to supervisor and beyond.'],
    ['Flexible Shifts', Clock, 'Day, afternoon, and night rotations to fit your schedule.'],
    ['Supportive Team', HeartHandshake, 'A respectful, professional culture that has your back.'],
];

const process = [
    ['Apply Online', 'Submit your application with your availability and experience.'],
    ['Phone Screen', 'A quick call to learn more about your goals and background.'],
    ['Interview', 'Meet our team to discuss the role and your fit.'],
    ['Offer & Onboard', 'Complete onboarding and licensing, then start your shift.'],
];

const values = [
    ['Integrity', 'We act with honesty and honor in every situation.'],
    ['Professionalism', 'Our people reflect the highest standard of conduct.'],
    ['Reliability', 'Clients and teammates can always count on us.'],
    ['Continuous Improvement', 'We invest in training, feedback, and growth.'],
];

function Careers() {
    const [active, setActive] = useState('All');
    const [applyFor, setApplyFor] = useState(null);
    const filtered = active === 'All' ? jobs : jobs.filter(([, , cat]) => cat === active);

    return (
        <section id="careers" className="section careers-section">
            <div className="container">
                <div className="section-intro centered">
                    <p className="section-kicker">Careers</p>
                    <h2>Build a security career with purpose.</h2>
                    <p>Join a professional team that values your growth, rewards your commitment, and protects our communities.</p>
                </div>

                {/* Why join us */}
                <div className="careers-highlight">
                    <div className="careers-highlight-copy">
                        <h3>More than a job — a calling.</h3>
                        <p>At broadviewprotectiveservices.com, we invest in the people who protect our clients. Receive paid training, real equipment, and a clear path to grow — all while working with a team that respects and supports you.</p>
                        <a className="button" href="#open-roles">View Open Roles <Briefcase size={17} /></a>
                    </div>
                    <ul className="careers-highlight-list">
                        <li><CheckCircle2 size={18} /> Paid certification &amp; licensing support</li>
                        <li><CheckCircle2 size={18} /> Growth into supervisory roles</li>
                        <li><CheckCircle2 size={18} /> Consistent, reliable shift scheduling</li>
                        <li><CheckCircle2 size={18} /> A safety-first, people-first culture</li>
                    </ul>
                </div>

                {/* Open roles */}
                <div id="open-roles" className="careers-roles">
                    <div className="careers-roles-head">
                        <h3>Open Positions</h3>
                        <div className="job-filters" role="tablist" aria-label="Filter jobs by category">
                            {categories.map((cat) => (
                                <button key={cat} className={`job-filter${active === cat ? ' job-filter-active' : ''}`} onClick={() => setActive(cat)} role="tab" aria-selected={active === cat}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="jobs-grid">
                        {filtered.map(([title, type, cat, location, schedule, desc], index) => (
                            <motion.article className="job-card" key={title} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.04 }}>
                                <div className="job-card-top">
                                    <span className="job-badge">{cat}</span>
                                    <span className="job-type"><Clock size={14} /> {schedule}</span>
                                </div>
                                <h4>{title}</h4>
                                <p className="job-role">{type}</p>
                                <p className="job-desc">{desc}</p>
                                <div className="job-meta">
                                    <span><MapPin size={15} /> {location}</span>
                                    <span><Building2 size={15} /> {type}</span>
                                </div>
                                <a className="job-apply" role="button" tabIndex={0} onClick={() => setApplyFor(title)} onKeyDown={(e) => { if (e.key === 'Enter') setApplyFor(title); }}>Apply Now <span>→</span></a>
                            </motion.article>
                        ))}
                        {filtered.length === 0 && <p className="jobs-empty">No open roles in this category right now — check back soon or email us your resume.</p>}
                    </div>
                </div>

                {/* Perks */}
                <div className="careers-perks">
                    <h3>Perks &amp; Benefits</h3>
                    <div className="perks-grid">
                        {perks.map(([label, Icon, desc], index) => (
                            <motion.div className="perk-card" key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.06 }}>
                                <span className="perk-icon"><Icon size={24} /></span>
                                <h4>{label}</h4>
                                <p>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Process */}
                <div className="careers-process">
                    <h3>Our Hiring Process</h3>
                    <div className="process-steps">
                        {process.map(([step, desc], i) => (
                            <motion.div className="process-step" key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                                <span className="process-num">{i + 1}</span>
                                <h4>{step}</h4>
                                <p>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="careers-values">
                    <h3>What We Stand For</h3>
                    <div className="values-grid">
                        {values.map(([label, desc], index) => (
                            <motion.div className="value-card" key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.06 }}>
                                <BadgeCheck size={22} />
                                <h4>{label}</h4>
                                <p>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Apply CTA */}
                <div id="apply" className="careers-apply">
                    <div>
                        <h3>Ready to join the team?</h3>
                        <p>Send your resume and availability to our recruiting team. We’ll be in touch to discuss the right role for you.</p>
                    </div>
                    <a className="button button-light" href="mailto:careers@broadviewprotectiveservices.com"><Users size={18} /> Apply Today</a>
                </div>
            </div>

            <Modal open={!!applyFor} onClose={() => setApplyFor(null)}>
                {applyFor && (
                    <>
                        <span className="modal-icon"><Briefcase size={26} /></span>
                        <span className="modal-badge">Application</span>
                        <h3>{applyFor}</h3>
                        <p>Send your resume and brief availability to our recruiting team. We’ll review your application and reach out to discuss next steps.</p>
                        <a className="button" href="mailto:careers@broadviewprotectiveservices.com?subject=Application:%20"><Send size={17} /> Apply via Email</a>
                    </>
                )}
            </Modal>
        </section>
    );
}

export default Careers;
