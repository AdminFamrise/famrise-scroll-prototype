import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import CoachList from "../../services/MockCoachDirectory";

const CoachDirectory = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎓 Meet Your Coaches & Mentors</h1>
      <p className="text-center text-gray-600 mb-6">
        Browse available guides for your journey — book a 1-on-1, join a peer meetup, or attend a session.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CoachList.map((coach, idx) => (
          <Card key={idx} className="p-4">
            <CardContent>
              <div className="flex items-center mb-3">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h2 className="font-semibold">{coach.name}</h2>
                  <p className="text-xs text-gray-500">{coach.languages.join(", ")}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-2">{coach.bio}</p>
              <p className="text-xs text-gray-600 italic mb-2">📘 {coach.theorySession}</p>
              <p className="text-xs text-gray-600 mb-4">
                Format: {coach.format} • Price:{" "}
                {coach.included ? "Included" : `€${coach.price}`}
              </p>

              {coach.calendarLink && (
                <Button
                  className="mb-2 w-full"
                  onClick={() => window.open(coach.calendarLink, "_blank")}
                >
                  📅 Book Now
                </Button>
              )}

              {coach.groupInvite && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(coach.groupInvite, "_blank")}
                >
                  👥 Join Peer Group
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoachDirectory;
