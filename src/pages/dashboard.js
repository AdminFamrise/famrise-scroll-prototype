import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { getUserData } from "../services/UserDataService";

const CustomerDashboard = () => {
  const [user, setUser] = useState(null);
  const hasCurrentLearnings = true; // Simulated for testing
  const hasSpecializations = false; // Placeholder

  useEffect(() => {
    const data = getUserData();
    setUser(data);
  }, []);

  return (
    <main className="p-6 space-y-10 flex-grow">
      <h1 className="text-2xl font-bold text-center">🎓 Welcome to Your Dashboard</h1>

      {/* Language Settings */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">🌐 Site Language</h3>
            <select className="w-full p-2 border rounded">
              <option>English</option>
              <option>Dutch</option>
              <option>Spanish</option>
            </select>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">🗣️ Language Add-On</h3>
            <select className="w-full p-2 border rounded">
              <option>Dutch</option>
              <option>English</option>
            </select>
          </CardContent>
        </Card>
      </section>

      {/* Search */}
      <section>
        <Input placeholder="🔍 Search for a skill or topic..." className="mb-3" />
      </section>

      {/* Current Learnings */}
      <section>
        <h2 className="text-xl font-semibold mb-4">📘 My Current Learnings</h2>
        {hasCurrentLearnings ? (
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">🧠 Speak & Think with Clarity</h3>
                <p className="text-sm text-gray-600 mb-4">Your journey to improve clarity and reasoning.</p>

                <div className="space-y-2">
                  <a href="/skills/speak-clarity/discover" className="text-blue-600 hover:underline block">1️⃣ Discover</a>
                  <a href="/skills/speak-clarity/learn" className="text-blue-600 hover:underline block">2️⃣ Learn</a>
                  <a href="/skills/speak-clarity/practice" className="text-blue-600 hover:underline block">3️⃣ Practice</a>
                  <a href="/skills/speak-clarity/apply" className="text-blue-600 hover:underline block">4️⃣ Apply</a>
                  <a href="/skills/speak-clarity/reflect" className="text-blue-600 hover:underline block">5️⃣ Reflect</a>
                  <a href="/skills/speak-clarity/bridge" className="text-blue-600 hover:underline block">🔗 Bridge to Next</a>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <CardContent>
              <p className="text-gray-600">You haven’t started learning yet.</p>
              <Button className="mt-3">📚 Choose what to learn</Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Specializations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🎯 My Specializations</h2>
        {hasSpecializations ? (
          <div className="grid md:grid-cols-2 gap-4">{/* ... */}</div>
        ) : (
          <Card>
            <CardContent>
              <p className="text-gray-600">No specializations selected yet.</p>
              <Button className="mt-3">✨ Explore Specializations</Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Mental Health Add-On */}
      <section>
        <h2 className="text-xl font-semibold mb-4">🧠 My Special Services</h2>
        <Card>
          <CardContent>
            <p className="text-gray-600">No services assigned yet.</p>
            <Button className="mt-3">🌈 Take Mental Health Check</Button>
          </CardContent>
        </Card>
      </section>

      {/* Mentor Sessions */}
      <section>
        <h2 className="text-xl font-semibold mb-4">👥 My Mentor Sessions</h2>
        <Card>
          <CardContent>
            <p className="text-gray-600">No mentor sessions scheduled.</p>
            <Button className="mt-3">💬 Book a Session</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default CustomerDashboard;

