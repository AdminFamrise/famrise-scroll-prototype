import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  const everydaySkills = [
    "Speak & Think with Clarity",
    "Learn What You Need, When You Need It",
    "Make Smart Money & Planning Decisions",
    "Work Better with Others",
    "Handle Change with More Ease",
    "Choose What Works for You",
    "Fix What's Not Working",
    "Take Initiative in Small Ways",
    "Understand Emotions — Yours & Others"
  ];

  const growthSkills = [
    "AI & Emerging Tech Awareness",
    "Digital world protection",
    "Turn Screen Time into Skill Time",
    "Make Smarter Decisions with Data",
    "Learn to Code or Automate Without Fear",
    "Live Sustainably, Think Circular",
    "Discover Tech Without Being a Techie",
    "Create, Lead, or Grow a Flexible Career",
    "Build What Your Community or Market Needs"
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 1️⃣ Header */}
      <header className="flex justify-between items-center p-6 shadow">
        <div className="text-2xl font-bold">
          <span className="bg-gray-200 px-3 py-1 rounded">LOGO</span>
        </div>
        <div className="flex gap-3">
          <Link to="/login">
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
              Log In
            </button>
          </Link>
          <Link to="/profile">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* 2️⃣ About Famrise */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Famrise</h2>
        <p className="mb-4">
          <strong>Our Vision:</strong> Your 1st Lifelong Learning Skills platform. 
          A Smarter path to families growth and well-being
        </p>
        <p>
          <strong>Our Mission:</strong> Give customers the skills they need to be more productive and competitive
          in a fast changing world.
        </p>
      </section>

      {/* 3️⃣ How It Works */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <ul className="space-y-3 max-w-xl mx-auto text-left text-lg">
          <li>1️⃣ Discover: Understand how a particular skill relates to your current life challenges</li>
          <li>2️⃣ Learn: Gain high level skills using our Self-guided tools content at your own pace</li>
          <li>3️⃣ Practice: Our tools guide you towards mastering concepts </li>
          <li>4️⃣ Apply: Different formats are designed so you may start applying skills in real life</li>
          <li>5️⃣ Reflect: Human mentorship and coaching is what makes the difference</li>
        </ul>
        <Link to="/profile">
          <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
            Start My Journey
          </button>
        </Link>
      </section>

      {/* 🧠 Skills Preview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Our Skills</h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Everyday Life Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {everydaySkills.map((skill, index) => (
              <div key={index} className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
                <p className="font-medium">{skill}</p>
                <span className="text-xs inline-block mt-2 px-2 py-1 rounded bg-blue-100 text-blue-800">
                  Everyday Skill
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">New Paths & Opportunities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {growthSkills.map((skill, index) => (
              <div key={index} className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
                <p className="font-medium">{skill}</p>
                <span className="text-xs inline-block mt-2 px-2 py-1 rounded bg-green-100 text-green-800">
                  Growth Skill
                </span>
              </div>
            ))}
          </div>
        </div>
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
