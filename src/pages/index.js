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
      {/* 1️⃣ Hero Section */}
      <header className="text-center py-16 px-6 bg-gray-100">
        <h1 className="text-4xl font-extrabold mb-4">Stay Ahead in a Changing World — Without Leaving Your Family Behind</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          A personalized lifelong learning journey designed for modern parents who want to thrive — not just survive — in today’s fast-moving world.
        </p>
        <p className="text-md max-w-2xl mx-auto text-gray-700">
          Whether you're navigating a career transition, learning a new skill, or supporting your child’s growth — Famrise helps you build a future where your family and your goals grow together.
        </p>
        <div className="mt-8">
          <Link to="/profile">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
              Start My Journey
            </button>
          </Link>
        </div>
      </header>

      {/* 2️⃣ Why Famrise */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">💡 Why Famrise?</h2>
        <div>
          <h3 className="text-xl font-semibold">👨‍👩‍👧 Built for Real Life</h3>
          <p>We know life doesn't pause when you're a parent. That’s why we design learning and growth pathways that flex with your schedule, your role, and your reality.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">🚀 Stay Competent in a Tech-Driven Future</h3>
          <p>As technology reshapes work and society, we help you upskill in ways that matter — so you stay relevant and resilient in a world where change is constant.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">🌱 Make Growth Sustainable</h3>
          <p>Well-being isn't a luxury — it's a strategy. We combine career development, mental health, and social connection so you can grow without burnout.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">🛡 Future-Proof Your Family</h3>
          <p>You’re not just learning for yourself — you’re shaping the future your children will inherit. Famrise equips you with the tools to lead by example and keep your family thriving.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">✨ Our Vision</h3>
          <p>A Europe where no parent is left behind in the digital age — and where the path to prosperity includes families, care, and lifelong learning.</p>
        </div>
      </section>

      {/* 3️⃣ How It Works */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">💡 How It Works</h2>
        <p className="max-w-3xl mx-auto mb-6">
          In a fast-changing world, basic skills are just the beginning. Famrise helps you move beyond the basics — toward lifelong adaptability, confidence, and purpose.
        </p>
        <ul className="space-y-5 max-w-xl mx-auto text-left text-lg">
          <li>🧭 <strong>Discover:</strong> Understand how specific skills link to your real-life challenges — from parenting to career reinvention. We start where you are.</li>
          <li>📚 <strong>Learn:</strong> Access structured, self-paced lessons to build practical skills — digital, social, emotional — designed for busy adult learners.</li>
          <li>🛠 <strong>Practice:</strong> Apply concepts in guided scenarios to build confidence and prepare for real-life conversations, decisions, and challenges.</li>
          <li>🌍 <strong>Apply:</strong> Turn practice into action. Use our tools to apply your learning at work, at home, and in your community.</li>
          <li>🔁 <strong>Reflect & Connect:</strong> Our mentors and coaches are your allies in real-world problem-solving. They don’t supervise learning — they help you apply skills in real-life contexts that matter, both personally and professionally. Whether it’s navigating transitions, career growth, or daily life challenges, their support ensures that theory becomes action. We also help you track your real impact and achievements, for if you decide to prove you can make a difference.</li>
        </ul>
      </section>

      {/* 4️⃣ Skills Preview */}
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

      {/* 5️⃣ Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        Built with ❤️ by Famrise — Empowering Families for a Better Future
      </footer>
    </div>
  );
}
