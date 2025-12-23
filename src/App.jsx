import './styles/global.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WorkingStyle from './components/WorkingStyle/WorkingStyle';
import Services from './components/Services/Services';
import Benefits from './components/Benefits/Benefits';
import TechSolutions from './components/TechSolutions/TechSolutions';
import CTABanner from './components/CTABanner/CTABanner';
import Stats from './components/Stats/Stats';
import TechPartners from './components/TechPartners/TechPartners';
import TechStack from './components/TechStack/TechStack';
import Industries from './components/Industries/Industries';
import Excellence from './components/Excellence/Excellence';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import Articles from './components/Articles/Articles';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechSolutions />
        <CTABanner />
        <Stats />
        <TechPartners />
        <TechStack />
        <Industries />
        <Excellence />
        <CaseStudies />
        {/* <Testimonials /> */}
        <ContactForm />
        {/* <Articles /> */}
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
