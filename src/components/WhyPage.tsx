import React from 'react';
import { BrainCog, Target, Sparkles, Trophy, Shield, Rocket } from 'lucide-react';

export default function WhyPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-500">
            Why Choose DeepData AI
          </h1>
          <p className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto">
            Leading the revolution in AI-powered talent acquisition with unmatched accuracy and efficiency
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: BrainCog,
              title: "Advanced AI Technology",
              description: "Our proprietary AI algorithms provide the most accurate candidate matching in the industry"
            },
            {
              icon: Target,
              title: "Precision Matching",
              description: "95% success rate in candidate placements through deep learning-powered compatibility analysis"
            },
            {
              icon: Sparkles,
              title: "Quality Focused",
              description: "Every candidate undergoes our comprehensive vetting process ensuring top-tier talent"
            },
            {
              icon: Trophy,
              title: "Industry Leading",
              description: "Recognized as the #1 AI-powered recruitment platform by industry experts"
            },
            {
              icon: Shield,
              title: "Data Security",
              description: "Enterprise-grade security with SOC 2 Type II certification and GDPR compliance"
            },
            {
              icon: Rocket,
              title: "Faster Hiring",
              description: "Reduce time-to-hire by 75% while improving candidate quality"
            }
          ].map((benefit) => (
            <div key={benefit.title} className="glass-card p-6 rounded-xl hover:glow transition-all">
              <benefit.icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-purple-200">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-card p-8 rounded-xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "75%", label: "Faster Placements" },
              { value: "95%", label: "Retention Rate" },
              { value: "60%", label: "Cost Reduction" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hiring?</h2>
          <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}