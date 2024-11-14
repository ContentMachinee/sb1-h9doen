import React from 'react';

export default function ContactForm() {
  return (
    <form className="glass-card p-8 rounded-xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-400/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 text-white"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-400/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 text-white"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-purple-200 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-400/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 text-white"
          placeholder="john@company.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-purple-200 mb-2">
          Company
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-400/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 text-white"
          placeholder="Company Inc."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-purple-200 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-purple-400/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 text-white"
          placeholder="Tell us about your needs..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all"
      >
        Send Message
      </button>
    </form>
  );
}