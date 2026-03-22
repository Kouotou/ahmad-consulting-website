import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { Calendar, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Booking = () => {
  const [booked, setBooked] = useState(false);

  const handleBookingClick = () => {
    setBooked(true);
  };

  return (
    <div className="booking-page">
      <Section background="dark" className="text-center pb-0">
        <h1 className="hero-title">Book a 20-Minute Clarity Call</h1>
        <p className="hero-subtitle mb-6" style={{color: '#fff', opacity: 0.9}}>
          Let's diagnose your communication challenges and map out a plan.
        </p>
      </Section>

      <Section background="light">
        <div className="authority-grid">
          <div>
            <h2 className="mb-4 text-primary">What happens on this call?</h2>
            <p className="mb-4" style={{fontSize: '1.125rem'}}>
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

          <div style={{background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid var(--color-border)'}}>
            {booked ? (
               <div className="text-center py-6">
                 <CheckCircle size={64} className="text-primary mx-auto mb-4" />
                 <h3 className="mb-2">Call Confirmed!</h3>
                 <p className="text-text-light mb-4">A confirmation email with the Zoom link has been sent to your inbox.</p>
                 <Button onClick={() => setBooked(false)} variant="outline">Book Another Time</Button>
               </div>
            ) : (
              <div>
                <h3 className="mb-4 text-center d-flex align-center justify-center gap-2">
                  <Calendar className="text-primary" /> Select a Time
                </h3>
                {/* Mock Scheduling Interface */}
                <p className="text-center mb-4" style={{fontSize: '0.9rem', color: 'var(--color-text-light)'}}>
                  Select a convenient slot below. Calls are conducted via Zoom or Google Meet.
                </p>
                
                <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem'}}>
                  {['Mon 12th', 'Tue 13th', 'Wed 14th', 'Thu 15th'].map((date, i) => (
                    <button key={i} style={{padding: '0.5rem 1rem', background: i === 0 ? 'var(--color-primary)' : 'var(--color-secondary)', color: i === 0 ? '#fff' : 'inherit', border: '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer', flexShrink: 0}}>
                      {date}
                    </button>
                  ))}
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2rem'}}>
                  {['9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM'].map((time, i) => (
                    <button key={i} onClick={handleBookingClick} style={{padding: '0.75rem', background: '#fff', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: '4px', cursor: 'pointer', fontWeight: '500'}} className="btn-outline">
                      {time}
                    </button>
                  ))}
                </div>
                
                <p className="text-center mb-0" style={{fontSize: '0.8rem', color: 'var(--color-text-light)'}}>
                  Timezone: Your local time.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Booking;
