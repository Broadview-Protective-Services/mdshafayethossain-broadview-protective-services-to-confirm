import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="section-kicker section-kicker-light">Contact broadviewprotectiveservices.com</p>
          <h2>Let’s build the right security plan.</h2>
          <p>Connect with our team to discuss your site, operations, and protection priorities at broadviewprotectiveservices.com.</p>
          <div className="contact-details">
            <a href="tel:+14166663889"><Phone size={18} /> +1 416-666-3889</a>
            <a href="mailto:shafayet@broadviewprotectiveservices.com"><Mail size={18} /> shafayet@broadviewprotectiveservices.com</a>
            <p><MapPin size={18} /> Serving construction, logistics, commercial, and residential clients.</p>
          </div>
          <div className="founder-contacts">
            <p><strong>Md Shafayet Hossain Bhuiyan</strong><br />Co-Founder &amp; Director<br /><a href="mailto:shafayet@broadviewprotectiveservices.com">shafayet@broadviewprotectiveservices.com</a></p>
            <p><strong>Shefayen Islam</strong><br />Co-Founder &amp; Director<br /><a href="mailto:shefayen@broadviewprotectiveservices.com">shefayen@broadviewprotectiveservices.com</a></p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Phone<input type="tel" name="phone" /></label>
          <label>Company<input name="company" /></label>
          <label className="full-field">Message<textarea name="message" rows="5" required /></label>
          <button className="button button-light" type="submit"><Send size={16} /> Request Consultation</button>
          <small>Submitting opens your email application so you remain in control of your information.</small>
        </form>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <CheckCircle2 size={20} /> Request received — our team will be in touch shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
