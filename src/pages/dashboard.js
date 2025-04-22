import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { getUserData } from "../services/UserDataService";

const CustomerDashboard = () => {
  const [user, setUser] = useState(null);
  const hasCurrentLearnings = false; // Placeholder
  const hasSpecializations = false; // Placeholder

  useEffect(() => {
    const data = getUserData();
    setUser(data);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">Famrise</div>
        <nav className="space-x-4 text-sm text-gray-700">
          <span>👤 {user?.name || "Guest"}</span>
          <a href="/overview" className="hover:underline">Overview</a>
          <a href="/profile" className="hover:underline">Profile</a>
          <a href="/help" className="hover:underline">Help</a>
        </nav>
      </header>

      {/* MAIN */}
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
            <div className="grid md:grid-cols-2 gap-4">{/* ... */}</div>
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

        {/* Profile Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">👤 My Profile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card><CardContent>📄 Subscription</CardContent></Card>
            <Card><CardContent>⚙️ Settings</CardContent></Card>
            <Card><CardContent>🏅 Accomplishments</CardContent></Card>
            <Card><CardContent>🆘 Help Center</CardContent></Card>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Famrise. Empowering Families for a Better Future.
      </footer>
    </div>
  );
};

export default CustomerDashboard;

