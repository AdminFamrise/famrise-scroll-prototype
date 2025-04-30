import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* 1️⃣ Hero Section */}
      <header className="text-center py-16 px-6 bg-gray-100">
        <h1 className="text-4xl font-extrabold mb-4">Feeling pulled in a million directions? Find focus with FamRise</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Your lifelong learning journey designed for busy parents. We deliver personalised roadmaps that help you upskill, guide your children, and build the future you wish for.
        </p>
        <div className="mt-8">
          <Link to="/profile">
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
              Discover Your Path to Growth
            </button>
          </Link>
        </div>
      </header>

      {/* 2️⃣ Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join a Lifelong Learning Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🗺️ Improve Your Skills, Take Control of Your Future</h3>
            <p>In a fast-changing world, better decision-making is essential — for yourself, your family, and the future you're building.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🌟 Lead by Example, Grow Sustainably</h3>
            <p>Learn the mindset and habits that build resilience, boost your performance, and nurture your family’s well-being.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <h3 className="text-xl font-semibold mb-2">🛠️ Real-World Application, Real-World Confidence</h3>
            <p>Practical skills you can apply across life's challenges — empowering you to adapt, grow, and lead in every situation.</p>
          </div>
        </div>
      </section>

      {/* 3️⃣ How It Works */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">🛤️ Your Personalized Path to Growth</h2>
        <p className="max-w-3xl mx-auto mb-6">Simple. Structured. Supported. We focus on your progress, not comparisons.</p>
        <ul className="space-y-8 max-w-3xl mx-auto text-left text-lg">
          <li>
            <strong>🌱 Step 1: Know Your Starting Point</strong><br />
            Reflect on where you are today — your strengths, challenges, and the life you want to build.
          </li>
          <li>
            <strong>🔍 Step 2: Discover What Matters</strong><br />
            Find the skills most relevant to your goals — and how they solve real-life family and personal challenges.
          </li>
          <li>
            <strong>🎯 Step 3: Set Goals That Guide You</strong><br />
            Turn big dreams into clear, motivating steps that fit your real life.
          </li>
          <li>
            <strong>🧭 Step 4: Learn. Practice. Apply.</strong><br />
            Learn in bite-sized lessons, practice with simple tools, apply to real situations, and bridge to new opportunities.
          </li>
          <li>
            <strong>🧠 Step 5: Build Habits for Life</strong><br />
            Get support from mentors who help you apply skills to real-world challenges — and track your impact over time.
          </li>
        </ul>
      </section>

      {/* 4️⃣ Final CTA */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Family’s Brighter Future?</h2>
        <p className="text-lg mb-6">
          Whether you’re navigating a career change, mastering a new skill, or nurturing your child’s development, FamRise gives you the tools you need.
        </p>
        <p className="text-gray-700 mb-8 italic">
          Stay connected to a fast-changing world — without leaving your family behind.
        </p>
        <Link to="/profile">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg">
            Start Your FamRise Journey Today
          </button>
        </Link>
        <p className="text-sm text-gray-500 mt-3">Explore plans | Learn more about our method</p>
      </section>

      {/* 5️⃣ Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        Built with ❤️ by Famrise — Empowering Families for a Better Future
      </footer>
    </div>
  );
}
