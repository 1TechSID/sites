import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { ApproachSection } from '@/components/ApproachSection';
import { ResourcesSection } from '@/components/ResourcesSection';
import { WorkMethodSection } from '@/components/WorkMethodSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { useGSAP } from '@/hooks/useGSAP';

const Index = () => {
  useGSAP();

  useEffect(() => {
    // Add dark class to html element for dark theme
    document.documentElement.classList.add('dark');
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      
      <main>
        <div className="hero-title hero-subtitle hero-cta hero-image">
          <Hero />
        </div>
        
        <div className="section-animate">
          <ProblemSection />
        </div>
        
        <div className="section-animate">
          <ApproachSection />
        </div>
        
        <div className="section-animate">
          <ResourcesSection />
        </div>
        
        <div className="section-animate">
          <WorkMethodSection />
        </div>
        
        <div className="section-animate">
          <BenefitsSection />
        </div>
        
        <div className="section-animate">
          <FAQSection />
        </div>
        
        <div className="section-animate">
          <FinalCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
