import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

function Footer() {
  return (
    <motion.footer className="footer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
      <div className="container footer-grid">
        <div>
          <BrandLogo footer />
          <p>Professional security solutions designed to protect people, property, businesses, and operations across the GTA.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#leadership">Leadership</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Leadership</h3>
          <p>
            Md Shafayet Hossain Bhuiyan<br />Co-Founder &amp; Director<br />
            <a href="mailto:shafayet@broadviewprotectiveservices.com">shafayet@broadviewprotectiveservices.com</a>
          </p>
          <p>
            Shefayen Islam<br />Co-Founder &amp; Director<br />
            <a href="mailto:shefayen@broadviewprotectiveservices.com">shefayen@broadviewprotectiveservices.com</a>
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+14166663889">+1 416-666-3889</a>
          <a href="mailto:shafayet@broadviewprotectiveservices.com">shafayet@broadviewprotectiveservices.com</a>
          <a href="mailto:shefayen@broadviewprotectiveservices.com">shefayen@broadviewprotectiveservices.com</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 broadviewprotectiveservices.com — Owned and operated by broadviewprotectiveservices.com.</div>
    </motion.footer>
  );
}

export default Footer;
