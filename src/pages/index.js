import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 1️⃣ Header */}
      <header className="flex justify-between items-center p-6 shadow">
        <div className="text-2xl font-bold">
          <span className="bg-gray-200 px-3 py-1 rounded">LOGO</span>
        </div>
        <Link to="/profile">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </header>

      {/* 2️⃣ About Famrise */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Famrise</h2>
        <p className="mb-4">
          <strong>Our Vision:</strong> A society where every family has the tools to thrive emotionally,
          socially, and professionally — no matter the challenges they face.
        </p>
        <p>
          <strong>Our Mission:</strong> To empower families through personalized digital guidance, community
          support, and life-relevant skill-building.
        </p>
      </section>

      {/* 3️⃣ How It Works */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <ul className="space-y-3 max-w-xl mx-auto text-left text-lg">
          <li>1️⃣ Discover: Self-guided story to build awareness</li>
          <li>2️⃣ Learn: Self-guided content with real-life tools</li>
          <li>3️⃣ Practice: Scenario-based journaling or simulation</li>
          <li>4️⃣ Apply: Real-life task or coach check-in</li>
          <li>5️⃣ Reflect: Peer or coach session with personalized feedback</li>
        </ul>
        <Link to="/profile">
          <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
            Start My Journey
          </button>
        </Link>
      </section>

      {/* 4️⃣ FAQ Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>
        <ul className="space-y-4 text-left">
          <li>❓ What kind of families is Famrise designed for?</li>
          <li>❓ Do I need any special background or education?</li>
          <li>❓ How does the learning process work?</li>
          <li>❓ Can I connect with real professionals?</li>
          <li>❓ Is this just for parents or whole families?</li>
          <li>❓ How is my personal data handled?</li>
          <li>❓ Do I need to complete everything at once?</li>
          <li>❓ What if I want to join as a coach or mentor?</li>
          <li>❓ Will this help me find work or improve skills?</li>
          <li>❓ How much does it cost?</li>
        </ul>
      </section>

      {/* 5️⃣ Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        Built with ❤️ by Famrise — Empowering Families for a Better Future
      </footer>
    </div>
  );
}

