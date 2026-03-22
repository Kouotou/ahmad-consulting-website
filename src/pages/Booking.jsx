import React from 'react';
import Section from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const Booking = () => {
  return (
    <div className="booking-page">
      <Section background="dark" className="text-center pb-0">
        <h1 className="hero-title">Book a 20-Minute Clarity Call</h1>
        <p className="hero-subtitle mb-6" style={{ color: '#fff', opacity: 0.9 }}>
          Let's diagnose your communication challenges and map out a plan.
        </p>
      </Section>

      <Section background="light">
        <div className="authority-grid">
          <div>
            <h2 className="mb-4 text-primary">What happens on this call?</h2>
            <p className="mb-4" style={{ fontSize: '1.125rem' }}>
              This is a zero-pressure, highly focused conversation. It's not a sales pitch in disguise—it's a genuine strategy session.
            </p>

            <h4 className="mb-3">During our 20 minutes, we will:</h4>
            <ul className="solution-list mb-6">
              <li>
                <CheckCircle className="text-primary" size={24} />
                <span><strong>Identify Root Causes:</strong> Understand exactly why your current communication style isn't getting the results you want.</span>
              </li>
              <li>
                <CheckCircle className="text-primary" size={24} />
                <span><strong>Expert Diagnosis:</strong> Get immediate feedback on what's holding you back in meetings and presentations.</span>
              </li>
              <li>
                <CheckCircle className="text-primary" size={24} />
                <span><strong>Recommended Plan:</strong> Walk away with a customized strategy to build authority and influence.</span>
              </li>
            </ul>
          </div>

          <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
            {/* The Calendly Embed Component */}
            <InlineWidget
              url="https://calendly.com/kouotouahmad/30min"
              styles={{
                height: '650px',
                width: '100%'
              }}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Booking;
