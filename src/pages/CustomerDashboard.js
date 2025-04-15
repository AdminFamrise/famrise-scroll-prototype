import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

const CustomerDashboard = () => {
  return (
    <div className="p-6 space-y-8">

      {/* Language Selection */}
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

      {/* Search and Recently Viewed */}
      <section>
        <Input placeholder="🔍 Search for a skill or topic..." className="mb-3" />
        <h2 className="text-xl font-semibold mb-1">🕒 Recently Viewed</h2>
        <p className="text-gray-600">You haven’t viewed anything yet.</p>
      </section>

      {/* Special Services */}
      <section>
        <h2 className="text-xl font-semibold mb-1">💡 My Special Services</h2>
        <Card className="mt-2">
          <CardContent>
            <p>No special services assigned yet.</p>
            <Button className="mt-2">🧠 Take Mental Health Check</Button>
          </CardContent>
        </Card>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-xl font-semibold mb-1">🎒 Quick Access</h2>
        <ul className="list-disc ml-6 space-y-1 text-blue-700 underline">
          <li><a href="#">📘 My Current Learnings</a></li>
          <li><a href="#">📗 My Specializations</a></li>
          <li><a href="#">🧑‍🏫 My Mentor Sessions</a></li>
        </ul>
      </section>

      {/* Profile Dropdown (simulated for now) */}
      <section>
        <h2 className="text-xl font-semibold mb-1">👤 Profile Menu</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>📄 Subscription</li>
          <li>⚙️ Settings</li>
          <li>🏅 Accomplishments</li>
          <li>🆘 Help Center</li>
        </ul>
      </section>
    </div>
  );
};

export default CustomerDashboard;
