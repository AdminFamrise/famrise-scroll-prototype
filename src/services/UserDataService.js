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

// Check if user skipped the Well-being Check (previously MHC)
export function didSkipWellBeingCheck() {
  const user = getUserData();
  return user.wellBeingSkipped === true; // ✅ updated key
}

// Optional: check if user has submitted well-being data
export function hasWellBeingData() {
  const user = getUserData();
  return (
    user.mhcSWB !== undefined &&
    user.mhcPWB !== undefined &&
    user.matrixLabel !== undefined
  );
}

// Optional: clear user data (e.g. on logout)
export function clearUserData() {
  localStorage.removeItem("userData");
}
