import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

const links = ['Home', 'Services', 'Industries', 'About', 'Leadership', 'Careers', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <BrandLogo onClick={closeMenu} />
        <button className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <AnimatePresence>
          <motion.div
            className={`nav-panel${isOpen ? ' nav-panel-open' : ''}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul className="nav-links">
              {links.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a></li>)}
            </ul>
            <a className="nav-quote" href="#contact" onClick={closeMenu}>Request a Quote</a>
          </motion.div>
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
