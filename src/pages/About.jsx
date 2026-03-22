import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="about-page">
      <Section background="dark" className="text-center pb-0">
        <h1 className="hero-title">From invisible to indispensable.</h1>
        <p className="hero-subtitle mb-6" style={{color: '#fff', opacity: 0.9}}>
          My journey from a struggling, quiet employee to a confident communication strategist.
        </p>
      </Section>

      {/* The Story */}
      <Section background="light">
        <div className="solution-container" style={{maxWidth: '800px'}}>
          <h2 className="mb-4 text-center">My Story</h2>
          
          <p className="mb-4" style={{fontSize: '1.125rem', lineHeight: '1.8'}}>
            Early in my career, I fully believed that if I just kept my head down, did exceptional work, and never complained, I would naturally be recognized, rewarded, and promoted.
          </p>
          
          <p className="mb-4" style={{fontSize: '1.125rem', lineHeight: '1.8'}}>
            <strong>I was wrong.</strong>
          </p>
          
          <p className="mb-4" style={{fontSize: '1.125rem', lineHeight: '1.8'}}>
            Instead, I watched as colleagues who were undeniably less skilled—but significantly more vocal—accelerated past me. They spoke up in meetings with ease, pitched half-baked ideas that were met with applause, and consistently built rapport with senior leadership. Meanwhile, my meticulously researched proposals were either ignored or, worse, co-opted by someone else who "packaged" them better. It was frustrating, exhausting, and paralyzing.
          </p>
          
          <p className="mb-4" style={{fontSize: '1.125rem', lineHeight: '1.8'}}>
            The turning point came during a critical project review. I had done 90% of the work, but when it came time to present to the VP, my mind went blank. I stumbled, downplayed my contributions, and let a peer take all the questions. Walking out of that room, I realized something fundamental: <strong>Doing the work is only half the job. Communicating its value is the other half.</strong>
          </p>
          
          <p className="mb-6" style={{fontSize: '1.125rem', lineHeight: '1.8'}}>
            I spent the next several years obsessively studying communication, psychology, and office dynamics. I stopped trying to be the "good worker" and started becoming a strategic communicator. The results were immediate. I earned the respect of leadership, my ideas drove major decisions, and my career trajectory skyrocketed.
          </p>

          <hr style={{borderColor: 'var(--color-border)', marginBottom: '3rem'}} />

          <h2 className="mb-4 text-center">My Mission</h2>
          <p className="mb-6 text-center" style={{fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-primary)'}}>
            "To give young professionals the tools, strategy, and confidence they need to make their voices heard, their value recognized, and their impact undeniable."
          </p>

          <hr style={{borderColor: 'var(--color-border)', marginBottom: '3rem'}} />

          <h2 className="mb-4 text-center">My Philosophy</h2>
          
          <div className="problem-grid mb-6">
            <div className="problem-card text-center" style={{padding: '2rem'}}>
              <h3 className="mb-2 text-primary">Communication = Leverage</h3>
              <p>Your technical skills get you in the door. Your ability to communicate dictates how far and how fast you move up the ladder.</p>
            </div>
            <div className="problem-card text-center" style={{padding: '2rem'}}>
              <h3 className="mb-2 text-primary">Authority is Built</h3>
              <p>You don't need a senior title to have authority. Authority is established through clarity, presence, and strategic messaging.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h3 className="mb-4">Ready to start your own transformation?</h3>
            <Button to="/booking" variant="primary" size="lg">
              Book a Free 20-Minute Clarity Call
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
