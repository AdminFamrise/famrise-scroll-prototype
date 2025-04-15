// src/services/UserDataService.js

// Save data to localStorage
export function saveUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

// Get data from localStorage
export function getUserData() {
  const stored = localStorage.getItem("userData");
  return stored ? JSON.parse(stored) : {};
}

// Merge partial updates into stored data
export function mergeUserData(partialData) {
  const existing = getUserData();
  const merged = {
    ...existing,
    ...partialData,
  };
  saveUserData(merged);
  return merged;
}

// ✅ Optional: check if user skipped MHC
export function didSkipMHC() {
  const user = getUserData();
  return user.mhcSkipped === true;
}
