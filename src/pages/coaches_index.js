import React from "react";
import { Link } from "react-router-dom";

export default function CoachesIndexPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 1️⃣ Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Transform Lives While Creating Your Freedom</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Use your people skills to guide others while enjoying flexible hours from home and building a rewarding career path.
        </p>
        <Link to="/profile">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition">
            Join Our Mentor Community
          </button>
        </Link>
      </section>

      {/* 2️⃣ Problem-Solution Intro */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for Meaningful Work That Fits Your Life?</h2>
        <p className="mb-4">
          Many of us have valuable life experience and people skills that traditional jobs don't fully utilize.
        </p>
        <p>
          Applied Skills Mentoring offers a solution: become a guide who helps others apply knowledge to real-world challenges — flexibly and meaningfully.
        </p>
      </section>

      {/* 3️⃣ Why Become a Mentor */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Become a Skills Mentor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Freedom & Flexibility</h3>
            <p>
              Work up to 6 hours per day, any day of the week. No commute, no rigid hours—just the freedom to design your work around your life.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Growth & Development</h3>
            <p>
              Follow a clear career progression. Gain coaching skills, expand your network, and develop professionally while helping others grow.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Purpose & Connection</h3>
            <p>
              Make a difference by helping others apply skills and succeed. Build meaningful relationships along the way.
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ How It Works */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">How It Works: No Experience Needed</h2>
        <ol className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">1. Choose Your Skills</h3>
            <p>
              Pick life skills you're good at and growth skills you've applied. No coaching background needed — just real-world experience.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">2. Complete Free Certification</h3>
            <p>
              Learn our mentoring methodology, coaching fundamentals, and communication techniques at no cost.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">3. Start Mentoring</h3>
            <p>
              Begin with small group sessions using our tools and guided scenarios. Build confidence while supporting others.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">4. Grow Your Career</h3>
            <p>
              Advance to paid sessions, unlock business-facing work, and earn more as you progress through our platform.
            </p>
          </li>
        </ol>
      </section>

      {/* 5️⃣ Career Progression */}
      <section className="py-16 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Your Career Progression Path</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Level 1: Soft Skills Guide</h3>
            <p>Start for free. Gain experience and feedback through practice hours.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Level 2: Growth Skills Mentor</h3>
            <p>Earn €30–40/session. Use our guided materials and grow your impact.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Level 3: Partner Consultant</h3>
            <p>Work with SMEs/startups on real-world problems. Collaborate with other mentors to maximize your income and impact.</p>
          </div>
        </div>
      </section>

      {/* 6️⃣ Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Community of Guides</h2>
        <blockquote className="italic text-lg mb-4">
          "I started as a soft skills guide while caring for my children. Now I’m a paid mentor working 25 hours a week from home."
        </blockquote>
        <p className="font-semibold">— Maria, Communication Skills Mentor</p>
      </section>

      {/* 7️⃣ Final CTA */}
      <section className="py-16 px-6 text-center bg-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Us and Earn Your Freedom</h2>
        <p className="mb-4">Take the first step toward a flexible, meaningful career helping others succeed.</p>
        <p className="mb-6">Our basic certifications are free—start today!</p>
        <Link to="/profile">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition">
            Apply to Become a Mentor
          </button>
        </Link>
      </section>

      {/* 8️⃣ Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        Built with ❤️ by Famrise — Empowering Families & Mentors for a Better Future
      </footer>
    </div>
  );
}
