import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <Section background="dark" className="text-center pb-0">
        <h1 className="hero-title">Let's Connect</h1>
        <p className="hero-subtitle mb-6 text-white" style={{ color: '#fff', opacity: 0.9 }}>
          Have a question or want to discuss a custom workshop? I'd love to hear from you.
        </p>
      </Section>

      <Section background="light">
        <div className="authority-grid">
          <div>
            <h2 className="mb-4">Get in Touch</h2>
            <p className="mb-6">
              Whether you're curious about my services, want to inquire about a speaking engagement, or just have a general question, feel free to reach out. I typically respond within 24-48 hours.
            </p>

            <div className="mb-4 d-flex align-center gap-2">
              <div className="service-icon" style={{ background: 'var(--color-secondary)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <strong>Email Me:</strong><br />
                <a href="mailto:hello@Ahmadconsulting.com" style={{ color: 'var(--color-text)' }}>hello@Ahmadconsulting.com</a>
              </div>
            </div>

            <div className="mb-6 d-flex align-center gap-2">
              <div className="service-icon" style={{ background: 'var(--color-secondary)', padding: '0.75rem', borderRadius: '50%', color: '#25D366' }}>
                <MessageCircle size={24} />
              </div>
              <div>
                <strong>WhatsApp:</strong><br />
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text)' }}>Send a quick message</a>
              </div>
            </div>

            <p className="text-accent mb-4">
              <strong>Prefer to jump right in?</strong><br />
              The fastest way to get started is by booking a free discovery call.
            </p>
            <Button to="/booking" variant="outline">Schedule a Clarity Call</Button>
          </div>

          <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid var(--color-border)' }}>
            <h3 className="mb-4 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-main)' }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-main)' }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-main)', resize: 'vertical' }}
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-100 d-flex align-center justify-center gap-2">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
