import React, { useState } from 'react';
import {
  BrainCircuit,
  Cpu,
  LineChart,
  Users,
  Lock,
  Zap,
  ArrowRight,
  Check,
  Play,
  Pause,
  ChevronRight,
  Award,
  Globe,
  Building2,
} from 'lucide-react';
import TestimonialCard from './landing/TestimonialCard';
import FeatureCard from './landing/FeatureCard';
import PricingCard from './landing/PricingCard';
import ContactForm from './landing/ContactForm';
import CompanyLogos from './landing/CompanyLogos';
import AnimatedCounter from './landing/AnimatedCounter';
import CaseStudyCard from './landing/CaseStudyCard';
import TalentMetricsCard from './landing/TalentMetricsCard';
import DemoVideo from './landing/DemoVideo';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('enterprise');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="bg-gray-900">
      {/* Hero Section with Interactive Demo */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-500 mb-6">
              AI-Powered Talent Acquisition
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              Find exceptional AI talent 5x faster with our advanced machine
              learning algorithms and rigorous vetting process.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                className="px-8 py-3 rounded-full border border-purple-400 hover:bg-purple-400/10 text-purple-400 font-semibold transition-all flex items-center"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                {isVideoPlaying ? (
                  <>
                    <Pause className="mr-2 h-5 w-5" /> Pause Demo
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" /> Watch Demo
                  </>
                )}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-8 text-sm text-purple-200">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-emerald-400 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-emerald-400 mr-2" />
                No credit card required
              </div>
            </div>
          </div>
          <div className="relative">
            <DemoVideo isPlaying={isVideoPlaying} />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-t border-b border-purple-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-purple-200 mb-8">
            Trusted by leading technology companies
          </p>
          <CompanyLogos />
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Successful Placements', value: 10000, suffix: '+' },
            { label: 'Time Saved', value: 75, suffix: '%' },
            { label: 'Client Satisfaction', value: 98, suffix: '%' },
            { label: 'Talent Pool', value: 1000000, suffix: '+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-3xl font-bold text-emerald-400"
              />
              <div className="mt-2 text-sm text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Whether you're a startup or enterprise, we have the perfect
              solution for your AI talent needs
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-purple-400/20 p-1">
              {['startup', 'scaleup', 'enterprise'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md transition-all ${
                    activeTab === tab
                      ? 'bg-purple-500 text-white'
                      : 'text-purple-200 hover:bg-purple-400/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TalentMetricsCard activeTab={activeTab} />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BrainCircuit}
              title="AI-Powered Matching"
              description="Advanced algorithms match candidates to roles based on skills, experience, and cultural fit."
            />
            <FeatureCard
              icon={LineChart}
              title="Predictive Analytics"
              description="Make data-driven decisions with insights into market trends and candidate success probability."
            />
            <FeatureCard
              icon={Zap}
              title="Automated Screening"
              description="Save time with intelligent resume parsing and candidate pre-screening."
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard
              company="TechCorp"
              logo={Building2}
              metric="75%"
              description="Reduction in time-to-hire for ML engineers"
              quote="DeepData AI transformed our hiring process completely."
            />
            <CaseStudyCard
              company="AI Innovations"
              logo={Globe}
              metric="90%"
              description="Candidate acceptance rate"
              quote="The quality of candidates is consistently exceptional."
            />
            <CaseStudyCard
              company="DataFlow"
              logo={Award}
              metric="$2M"
              description="Saved in recruitment costs"
              quote="ROI was evident within the first quarter."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="DeepData AI transformed our hiring process. We've reduced time-to-hire by 60% while improving quality of hires."
              author="Sarah Chen"
              role="Head of Talent, TechCorp"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            />
            <TestimonialCard
              quote="The AI-powered insights have been game-changing for our recruitment strategy."
              author="Michael Rodriguez"
              role="CEO, InnovateTech"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
            />
            <TestimonialCard
              quote="Outstanding results. The platform's accuracy in candidate matching is remarkable."
              author="Emily Wong"
              role="CTO, DataFlow"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="499"
              features={[
                '50 job postings/month',
                'Basic AI matching',
                'Email support',
                'Analytics dashboard',
              ]}
            />
            <PricingCard
              title="Professional"
              price="999"
              features={[
                'Unlimited job postings',
                'Advanced AI matching',
                'Priority support',
                'Custom analytics',
                'API access',
              ]}
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                'Custom solutions',
                'Dedicated account manager',
                'Custom integrations',
                'SLA guarantee',
                'On-premise deployment',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get Started Today
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
