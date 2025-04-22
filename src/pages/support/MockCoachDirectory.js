import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import MockCoachDirectory from "../services/MockCoachDirectory";

const CoachDirectory = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">🎓 Coach & Mentor Directory</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {MockCoachDirectory.map((coach, idx) => (
          <Card key={idx}>
            <CardContent className="flex gap-4 items-start">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{coach.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{coach.bio}</p>
                <p className="text-sm mb-1">
                  <strong>Format:</strong> {coach.format}
                </p>
                <p className="text-sm mb-1">
                  <strong>Session:</strong> {coach.theorySession}
                </p>
                <p className="text-sm mb-1">
                  <strong>Languages:</strong> {coach.languages.join(", ")}
                </p>
                <p className="text-sm mb-3">
                  <strong>Price:</strong> {coach.included ? "Included" : `€${coach.price}`}
                </p>
                <div className="space-x-2">
                  {coach.calendarLink && (
                    <a href={coach.calendarLink} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">📅 Book Session</Button>
                    </a>
                  )}
                  {coach.groupInvite && (
                    <a href={coach.groupInvite} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">💬 Join Group</Button>
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoachDirectory;
