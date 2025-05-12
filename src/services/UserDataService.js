// src/services/UserDataService.js
/* ─────────────────────────────
   Persist the NEW onboarding shape
   ─ context, challenge, goal,
   ─ skills, preferences, onboardingStep
───────────────────────────── */
const USER_DATA_KEY = "userData";

/** Keep only the high‑level buckets we care about */
const ALLOWED_KEYS = [
  "context",
  "challenge",
  "goal",
  "skills",
  "preferences",
  "onboardingStep",
];

/* Save to localStorage */
export function saveUserData(data) {
  // Strip anything that isn’t in ALLOWED_KEYS
  const cleanData = Object.fromEntries(
    Object.entries(data).filter(([k]) => ALLOWED_KEYS.includes(k))
  );
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(cleanData));
}

/* Retrieve */
export function getUserData() {
  const stored = localStorage.getItem(USER_DATA_KEY);
  return stored ? JSON.parse(stored) : {};
}

/* Merge partial chunk (e.g., { context: {...} } ) */
export function mergeUserData(partialData) {
  const existing = getUserData();
  const merged = { ...existing, ...partialData };
  saveUserData(merged);
  return merged;
}

/* Onboarding‑step helpers */
export function setOnboardingStep(step) {
  mergeUserData({ onboardingStep: step });
}
export function getOnboardingStep() {
  return getUserData().onboardingStep || 1;
}

/* Clear everything */
export function clearUserData() {
  localStorage.removeItem(USER_DATA_KEY);
}
