// src/services/UserDataService.js

// Save user data to localStorage
export function saveUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

// Retrieve user data from localStorage
export function getUserData() {
  const stored = localStorage.getItem("userData");
  return stored ? JSON.parse(stored) : {};
}

// Merge new user data into existing stored data
export function mergeUserData(partialData) {
  const existing = getUserData();
  const merged = {
    ...existing,
    ...partialData,
  };
  saveUserData(merged);
  return merged;
}

// Track current onboarding step (1-6)
export function setOnboardingStep(step) {
  mergeUserData({ onboardingStep: step });
}

export function getOnboardingStep() {
  const user = getUserData();
  return user.onboardingStep || 1;
}

// Optional: clear user data (e.g. on logout)
export function clearUserData() {
  localStorage.removeItem("userData");
}

