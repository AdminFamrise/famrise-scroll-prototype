// LanguageLayer.js
import React from "react";
import { Badge } from "../ui/Badge";
import { Dialog, DialogTrigger, DialogContent } from "../ui/Dialog";

const languageData = {
  "Teach kids how to think": {
    level: "Moderate",
    /* ... */
  },
};

const LanguageLayer = ({ goal, level }) => {
  const data = languageData[goal];
  if (!data || data.level !== level) return null;

  return (
    <div className="mt-4 p-4 bg-yellow-50 border rounded">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-md mb-2">🔤 Dutch Language Add-On</h4>
        <Badge variant="outline" className="text-xs">
          Level: {level}
        </Badge>
      </div>
      export default LanguageLayer;
      <p className="text-sm mb-2">
        Here are a few Dutch words you’ll encounter while working on this task:
      </p>
      <ul className="list-disc ml-4 text-sm">
        {data.glossary.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.word}</strong> = {item.translation}
            <br />
            <span className="italic">Example:</span> "{item.sentence}"
            {item.audio && (
              <audio controls className="mt-1">
                <source src={`/audio/${item.audio}`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger className="mt-3 text-blue-600 underline text-sm">
          Show learning tip
        </DialogTrigger>
        <DialogContent>
          <p className="text-sm">💡 {data.tip}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LanguageLayer;
