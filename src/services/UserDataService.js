// src/services/UserDataService.js

const USER_DATA_KEY = "userData";

/**
 * Save cleaned user data to localStorage
 * Only the required fields are kept for better data management
 */
export function saveUserData(data) {
  const {
    name,
    email,
    zipCode,
    city,
    challenge,
    goal,
    softSkills,
    profession,
    cvUploaded,
    desiredLanguages,
  } = data;

  // Create a clean data object without unused fields
  const cleanData = {
    name,
    email,
    zipCode,
    city,
    challenge,
    goal,
    softSkills,
    profession,
    cvUploaded,
    desiredLanguages,
  };

  localStorage.setItem(USER_DATA_KEY, JSON.stringify(cleanData));
}

/**
 * Retrieve user data from localStorage
 */
export function getUserData() {
  const stored = localStorage.getItem(USER_DATA_KEY);
  return stored ? JSON.parse(stored) : {};
}

/**
 * Merge new user data into existing stored data
 * This keeps only the relevant fields while merging
 */
export function mergeUserData(partialData) {
  const existing = getUserData();
  const merged = {
    ...existing,
    ...partialData,
  };
  saveUserData(merged);
  return merged;
}

/**
 * Track current onboarding step (1-6)
 */
export function setOnboardingStep(step) {
  mergeUserData({ onboardingStep: step });
}

export function getOnboardingStep() {
  const user = getUserData();
  return user.onboardingStep || 1;
}

/**
 * Clear user data (e.g. on logout)
 */
export function clearUserData() {
  localStorage.removeItem(USER_DATA_KEY);
}
