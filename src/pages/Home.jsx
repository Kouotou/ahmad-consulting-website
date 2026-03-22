import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, MessageSquare } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Section background="light" className="hero-section">
        <div className="hero-content text-center">
          <h1 className="hero-title">
            Communicate with Authority. <br />
            <span className="text-accent">Get Noticed. Influence Decisions.</span>
          </h1>
          <p className="hero-subtitle mb-6">
            I help young professionals build the communication skills, presence, and confidence needed to stand out, earn respect, and accelerate their careers.
          </p>
          <div className="hero-ctas">
            <Button to="/booking" variant="primary" size="lg">
              Book a Free 20-Minute Clarity Call
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section background="alt" className="problem-section">
        <div className="text-center mb-8">
          <h2>Sound familiar?</h2>
          <p className="section-subtitle">You have the skills, but your voice isn't being heard.</p>
        </div>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">📉</div>
            <h3>You do good work but no one notices</h3>
            <p>Your contributions are overlooked because you struggle to showcase your value effectively.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🤐</div>
            <h3>You hesitate to speak in meetings</h3>
            <p>You have great ideas but hold back, afraid of saying the wrong thing or being judged.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🤷</div>
            <h3>Your ideas are ignored</h3>
            <p>You speak up, but your points get lost. Worse, someone else repeats what you said and gets the credit.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon"> stagnate</div>
            <h3>Others get promoted before you</h3>
            <p>Less capable peers move up the ladder simply because they know how to communicate their worth.</p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="dark" className="solution-section">
        <div className="solution-container">
          <div className="solution-content">
            <h2>The shift: From invisible to indispensable.</h2>
            <p className="mb-4">
              Career growth isn't just about working harder. It's about communicating your value. My coaching transforms your approach so you can:
            </p>
            <ul className="solution-list">
              <li>
                <CheckCircle className="text-accent" size={24} />
                <span>Speak with unshakeable confidence in high-stakes meetings.</span>
              </li>
              <li>
                <CheckCircle className="text-accent" size={24} />
                <span>Structure your thoughts to deliver clear, impactful points.</span>
              </li>
              <li>
                <CheckCircle className="text-accent" size={24} />
                <span>Build natural influence and be seen as a strategic leader.</span>
              </li>
              <li>
                <CheckCircle className="text-accent" size={24} />
                <span>Develop a tailored communication strategy for fast career growth.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="light" className="services-overview">
        <div className="text-center mb-8">
          <h2>How We Can Work Together</h2>
          <p className="section-subtitle">Tailored solutions for your career stage and goals.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <TrendingUp size={40} className="service-icon text-primary mb-3" />
            <h3>Programs</h3>
            <p>Structured, multi-week transformations to build your communication foundation, authority, and influence.</p>
            <Button to="/services" variant="outline" className="mt-4 w-100">Learn More</Button>
          </div>
          <div className="service-card">
            <Users size={40} className="service-icon text-primary mb-3" />
            <h3>Workshops</h3>
            <p>Short, intensive, high-impact sessions ideal for tackling specific communication hurdles or team training.</p>
            <Button to="/services" variant="outline" className="mt-4 w-100">Learn More</Button>
          </div>
          <div className="service-card">
            <MessageSquare size={40} className="service-icon text-primary mb-3" />
            <h3>1:1 Coaching</h3>
            <p>Intensely personalized support mapped exactly to your real, day-to-day workplace challenges.</p>
            <Button to="/services" variant="outline" className="mt-4 w-100">Learn More</Button>
          </div>
        </div>
      </Section>

      {/* Authority Section */}
      <Section background="alt" className="authority-section">
        <div className="authority-grid">
          <div className="authority-image-placeholder">
            {/* Realistically, an image goes here. Using a styled div as a placeholder */}
            <div className="author-photo">Photo of Ahmad</div>
          </div>
          <div className="authority-content">
            <h2>Hi, I'm Ahmad.</h2>
            <p className="mb-3">
              I spent the early years of my career doing excellent work but remaining completely invisible. I watched as louder, more confident—but less competent—peers got the promotions and the respect.
            </p>
            <p className="mb-4">
              Everything changed when I learned that communication is the ultimate career leverage. Today, as a communication consultant, my mission is to give young professionals the tools, strategy, and confidence to make their voices heard.
            </p>
            <Button to="/about" variant="secondary">
              Read My Full Story
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="dark" className="final-cta text-center">
        <h2>Ready to command the room?</h2>
        <p className="mb-6 cta-text">
          Stop letting your hard work go unnoticed. Let's build a strategy to elevate your professional presence today.
        </p>
        <Button to="/booking" variant="primary" size="lg" className="btn-white">
          Book Your 20-Minute Clarity Call
        </Button>
        <p className="mt-3 small-text opacity-70">
          In this free call, we'll diagnose your communication challenges and map out a recommended plan.
        </p>
      </Section>
    </div>
  );
};

export default Home;
