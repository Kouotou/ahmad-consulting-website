import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const Services = () => {
  return (
    <div className="services-page">
      <Section background="dark" className="text-center pb-0" id="services-hero">
        <h1 className="hero-title">Elevate Your Presence. <br/> Accelerate Your Career.</h1>
        <p className="hero-subtitle mb-6" style={{color: '#fff', opacity: 0.9}}>
          Whether you need a complete communication overhaul, focused team training, or highly personalized coaching to navigate your specific workplace, we have a solution.
        </p>
      </Section>

      {/* Programs */}
      <Section background="light" id="programs">
        <div className="authority-grid">
          <div className="service-content">
            <h2 className="mb-2">Signature Programs</h2>
            <h4 className="text-primary mb-4">Structured Multi-Week Transformation</h4>
            <p className="mb-4">
              Our signature programs are designed for early to mid-career professionals who are ready to stop being overlooked and start being heard. Over the course of several weeks, we rebuild your communication foundation from the ground up.
            </p>
            <ul className="solution-list mb-6">
              <li><strong>Who it's for:</strong> Professionals seeking a comprehensive, step-by-step framework to establish authority and influence.</li>
              <li><strong>What it solves:</strong> Fear of public speaking, inability to articulate value, and getting overshadowed in meetings by louder colleagues.</li>
              <li><strong>Outcomes:</strong> Unshakeable confidence, a robust communication toolkit, and a clear roadmap for career advancement.</li>
            </ul>
            <Button to="/booking" variant="primary">Book a Clarity Call to see if this is right for you</Button>
          </div>
          <div className="authority-image-placeholder" style={{aspectRatio: '16/9'}}>
            <div className="author-photo">Program Image</div>
          </div>
        </div>
      </Section>

      {/* Workshops */}
      <Section background="alt" id="workshops">
        <div className="authority-grid" style={{direction: 'rtl'}}>
          <div className="service-content" style={{direction: 'ltr'}}>
            <h2 className="mb-2">Intensive Workshops</h2>
            <h4 className="text-primary mb-4">Short, High-Impact Sessions</h4>
            <p className="mb-4">
              When you or your team need rapid skill acquisition, our interactive workshops deliver immediate results. These sessions focus on specific, highly actionable communication techniques that can be applied the very next day.
            </p>
            <ul className="solution-list mb-6">
              <li><strong>Who it's for:</strong> Corporate teams, ERGs, or motivated individuals looking for a targeted boost in a specific area like presentation skills or navigating difficult conversations.</li>
              <li><strong>What it solves:</strong> Scattered messaging, low team alignment, and ineffective cross-functional communication.</li>
              <li><strong>Outcomes:</strong> Immediate improvement in specific skills, shared team vocabulary for communication, and actionable templates.</li>
            </ul>
            <Button to="/booking" variant="primary">Book a Clarity Call to discuss your needs</Button>
          </div>
          <div className="authority-image-placeholder" style={{aspectRatio: '16/9'}}>
            <div className="author-photo">Workshop Image</div>
          </div>
        </div>
      </Section>

      {/* 1:1 Coaching */}
      <Section background="light" id="coaching">
        <div className="authority-grid">
          <div className="service-content">
            <h2 className="mb-2">1:1 Strategic Coaching</h2>
            <h4 className="text-primary mb-4">Intensely Personalized Support</h4>
            <p className="mb-4">
              Sometimes the fastest way to grow is with a guide who understands exactly what you're dealing with. In 1:1 coaching, we dive deep into your unique workplace dynamics, office politics, and personal barriers.
            </p>
            <ul className="solution-list mb-6">
              <li><strong>Who it's for:</strong> Professionals navigating complex workplace challenges, preparing for a major promotion, or overcoming deep-seated communication anxieties.</li>
              <li><strong>What it solves:</strong> Unique, nuanced challenges that require strategic, customized advice rather than a one-size-fits-all approach.</li>
              <li><strong>Outcomes:</strong> Real-time problem solving, immense personal growth, and a dedicated strategic partner for your career trajectory.</li>
            </ul>
            <Button to="/booking" variant="primary">Book a Clarity Call to secure your spot</Button>
          </div>
          <div className="authority-image-placeholder" style={{aspectRatio: '16/9'}}>
            <div className="author-photo">1:1 Coaching Session Image</div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
