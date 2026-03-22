import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <Section background="dark" className="text-center pb-0">
        <h1 className="hero-title">Real Results. Genuine Impact.</h1>
        <p className="hero-subtitle mb-6 text-white" style={{ color: '#fff', opacity: 0.9 }}>
          See how young professionals have transformed their careers by finding their voice and building undeniable authority.
        </p>
      </Section>

      <Section background="light">
        <div className="problem-grid mb-8">
          <div className="problem-card" style={{ position: 'relative' }}>
            <Quote size={40} className="text-primary mb-3" style={{ opacity: 0.2, position: 'absolute', top: '1rem', right: '1rem' }} />
            <p className="mb-4" style={{ fontStyle: 'italic', fontSize: '1.125rem' }}>
              "Before working with Ahmad, I was terrified to speak in leadership meetings. Now, I comfortably present my ideas and was recently promoted to Team Lead. The strategy she gave me was a game-changer."
            </p>
            <div>
              <strong>Alex M.</strong>
              <div className="text-primary" style={{ fontSize: '0.9rem' }}>Marketing Manager</div>
            </div>
          </div>

          <div className="problem-card" style={{ position: 'relative' }}>
            <Quote size={40} className="text-primary mb-3" style={{ opacity: 0.2, position: 'absolute', top: '1rem', right: '1rem' }} />
            <p className="mb-4" style={{ fontStyle: 'italic', fontSize: '1.125rem' }}>
              "I knew my stuff, but I always felt ignored. The subtle communication tweaks and confident posturing we worked on changed how my entire team perceives me. I'm finally taken seriously."
            </p>
            <div>
              <strong>Priya T.</strong>
              <div className="text-primary" style={{ fontSize: '0.9rem' }}>Software Engineer</div>
            </div>
          </div>

          <div className="problem-card" style={{ position: 'relative' }}>
            <Quote size={40} className="text-primary mb-3" style={{ opacity: 0.2, position: 'absolute', top: '1rem', right: '1rem' }} />
            <p className="mb-4" style={{ fontStyle: 'italic', fontSize: '1.125rem' }}>
              "Ahmad's coaching was the best investment in my career. She helped me structure my arguments so clearly that my VP personally requested me for a high-visibility project."
            </p>
            <div>
              <strong>James D.</strong>
              <div className="text-primary" style={{ fontSize: '0.9rem' }}>Financial Analyst</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3>Ready to become the next success story?</h3>
          <Button to="/booking" variant="primary" size="lg" className="mt-4">
            Book Your Clarity Call
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
