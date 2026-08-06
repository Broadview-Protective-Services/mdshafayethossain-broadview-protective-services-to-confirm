import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import About from './components/About';
import Leadership from './components/Leadership';
import WhyChooseUs from './components/WhyChooseUs';
import Careers from './components/Careers';
import ChatGPT from './components/ChatGPT';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <About />
        <Leadership />
        <WhyChooseUs />
        <Careers />
        <Contact />
        <ChatGPT />
      </main>
      <Footer />
    </div>
  );
}

export default App;
