const mockSpecialServices = [
  {
    id: "support-1",
    title: "Emotional Support Group",
    description: "Weekly group calls led by trained peer mentors focusing on emotional well-being, social reconnection, and stress reduction.",
    includedInPlan: true,
    format: "Group Session",
    frequency: "Weekly",
    link: "https://t.me/emotional-support-room",
  },
  {
    id: "support-2",
    title: "1-on-1 Parental Guidance",
    description: "Book a confidential session with a counselor to navigate tough parenting transitions.",
    includedInPlan: false,
    format: "1-on-1 Coaching",
    frequency: "On Demand",
    pricePerSession: 35,
    link: "https://calendly.com/famrise-counsel/parent-support",
  },
  {
    id: "support-3",
    title: "Community Healing Toolkit",
    description: "Access structured reflection tools, journaling prompts, and exercises designed to reduce emotional overload.",
    includedInPlan: true,
    format: "Self-Guided",
    frequency: "Available Anytime",
    link: "https://famrise.eu/tools/healing-kit",
  },
];

export default mockSpecialServices;
