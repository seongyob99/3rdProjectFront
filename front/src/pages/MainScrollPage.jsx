import MainPage from '../components/MainPage';
import QuestionExamples from '../components/QuestionExamples';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import HowItWorks from '../components/HowItWorks'
import FeatureCards from '../components/FeatureCards';

export default function MainScrollPage() {
    return (
      <div className="text-white font-sans bg-black scroll-smooth">
        <section id="home" className="h-screen flex items-center justify-center bg-black">
          <MainPage />
        </section>
  
        <section id="intro" className="space-y-32 py-24">
          <FeatureCards />
          <HowItWorks />
        </section>
  
        <section id="examples" className="py-24">
          <QuestionExamples />
        </section>
  
        <section id="faq" className="py-24">
          <FAQSection />
        </section>
  
        <section id="cta" className="py-24">
          <CTASection />
        </section>
      </div>
    );
  }
  
