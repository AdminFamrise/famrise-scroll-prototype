
import React from "react";
import { motion } from "framer-motion";

const illustrationMap = [
  "https://placehold.co/400x250?text=Step+By+Step+Profile",
  "https://placehold.co/400x250?text=Digital+Safety",
  "https://placehold.co/400x250?text=Life+Improvement",
  "https://placehold.co/400x250?text=Societal+Value",
  "https://placehold.co/400x250?text=User+Case+Skills",
  "https://placehold.co/400x250?text=Support+Options",
  "https://placehold.co/400x250?text=Community+Impact"
];

export default function FamriseScrollPage() {
  const sections = [
    {
      title: "How does it work?",
      subtitle: "A guided process tailored to your real-life scenario",
      points: [
        "1️⃣ Choose a skill, share your experience and current context",
        "2️⃣ Take a quick check-in to assess your social & psychological needs",
        "3️⃣ Our system matches you with solutions: based on goals, needs & starting level",
        "4️⃣ Receive a dynamic personal dashboard with AI assistance to guide your path"
      ]
    },
    {
      title: "Digital Safety Meets Well-Being",
      subtitle: "No distractions. No manipulation. Just support.",
      points: [
        "🧘‍♀️ No information overload or algorithmic stress",
        "🔒 Your data stays private, always",
        "📵 No popups or addictive triggers",
        "👥 Option to share with certified professionals (doctor, therapist, coach)"
      ]
    },
    {
      title: "How does it improve your life?",
      subtitle: "Designed to support your psychological needs and daily performance",
      points: [
        "📚 Learn at your own pace without feeling left behind",
        "🎯 Tasks are designed to boost competence, autonomy, and relatedness",
        "⏳ Learn to apply the right skill at the right time and free up more life enjoyment"
      ]
    },
    {
      title: "Beyond UX — Building Societal Value",
      subtitle: "Why this matters at a European scale",
      points: [
        "🏛 A more productive and supported population sustains our social model",
        "🔋 Helps align tech adoption with mental health and social inclusion",
        "🌍 Supports EU leadership in innovation, well-being, and independence"
      ]
    },
    {
      title: "User Case — Building Lifelong Skills",
      subtitle: "Decentralized solutions matched to individual growth paths",
      points: [
        "🧩 Skills like local language, automation, software, and task design are broken into small learning steps",
        "🔗 Each step is linked to a real-life task, difficulty level, and interaction type",
        "🧠 Interaction types evolve with customer’s psychological state — solo, group, real-world tasks",
        "📈 Learning is progressive and modular, like a flexible micro-diploma pathway"
      ]
    },
    {
      title: "Support That Adapts to You",
      subtitle: "Personalized guidance when you need it most",
      points: [
        "🤝 Share your learning path with a coach for motivation and accountability",
        "🩺 Share your progress with doctors or psychologists during follow-up tests",
        "📊 Your activities influence well-being — and we help track and understand that",
        "🧘‍♂️ Learn not just what works — but what makes you feel well and connected"
      ]
    },
    {
      title: "Positive Outcomes: Community Impact",
      subtitle: "Real stories, real people, real transformation",
      points: [
        "🚲 A group of users from one city used their new skills to address mobility challenges",
        "🤖 They applied automation and design thinking to propose a smart community transport solution",
        "🌟 With help from a mentor, they co-created a pilot program for the city",
        "💬 Outcome: enhanced belonging, pride, and well-being through applied learning and creativity"
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {sections.map((section, i) => (
        <section
          key={i}
          className="min-h-screen flex flex-col justify-center items-center p-10 text-center border-b"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {section.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-6"
          >
            {section.subtitle}
          </motion.p>

          <motion.img
            src={illustrationMap[i]}
            alt={section.title + " visual"}
            className="rounded-lg shadow-md w-full max-w-md mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <ul className="max-w-2xl text-left">
            {section.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="mb-3 text-base md:text-lg"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </section>
      ))}
      <footer className="py-10 text-center text-sm text-gray-500">
        Built with ❤️ by Famrise — Empowering Families for a Better Future
      </footer>
    </div>
  );
}
