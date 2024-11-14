import React from 'react';
import { Search, UserCheck, BrainCog, LineChart, CheckCircle, Zap } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-500">
            Our Rigorous Process
          </h1>
          <p className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto">
            Discover how we combine AI technology with human expertise to ensure only the highest quality talent makes it to your team
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-16">
          {[
            {
              icon: Search,
              title: "Initial AI Screening",
              description: "Our AI analyzes millions of profiles to identify candidates with the perfect skill match for your requirements",
              details: ["Pattern recognition across vast datasets", "Skills verification algorithms", "Experience validation"]
            },
            {
              icon: BrainCog,
              title: "Technical Assessment",
              description: "Candidates undergo comprehensive technical evaluations tailored to your specific needs",
              details: ["Custom coding challenges", "Problem-solving scenarios", "Technical knowledge verification"]
            },
            {
              icon: UserCheck,
              title: "Behavioral Analysis",
              description: "Advanced AI-powered behavioral assessments to ensure cultural fit and soft skills alignment",
              details: ["Communication style analysis", "Team compatibility assessment", "Leadership potential evaluation"]
            },
            {
              icon: LineChart,
              title: "Performance Prediction",
              description: "Data-driven insights predict candidate success probability in your specific role",
              details: ["Success metrics analysis", "Performance trajectory prediction", "Risk assessment"]
            },
            {
              icon: CheckCircle,
              title: "Expert Verification",
              description: "Senior industry experts conduct in-depth interviews to validate AI findings",
              details: ["Technical expertise verification", "Project experience validation", "Soft skills confirmation"]
            },
            {
              icon: Zap,
              title: "Final Match Analysis",
              description: "Comprehensive analysis of all data points to ensure perfect candidate-role alignment",
              details: ["Match score calculation", "Compatibility verification", "Final recommendations"]
            }
          ].map((step, index) => (
            <div key={step.title} className="glass-card p-8 rounded-xl hover:glow transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-purple-900/50 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-purple-400">Step {index + 1}</span>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-purple-200 mb-4">{step.description}</p>
                  <ul className="grid md:grid-cols-3 gap-4">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-purple-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Experience Our Premium Vetting Process</h2>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Join the leading companies who trust DeepData AI to find their perfect candidates through our comprehensive vetting process
          </p>
          <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all">
            Start Hiring Today
          </button>
        </div>
      </div>
    </div>
  );
}