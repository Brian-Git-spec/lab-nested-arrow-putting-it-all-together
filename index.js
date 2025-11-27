function createLoginTracker(userInfo) {
  let attempts = 0;
  const maxAttempts = 3;

  return (passwordAttempt) => {
    // Already locked
    if (attempts > maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Wrong password → increase attempts
    attempts++;

    // After increment, check if lock applies to NEXT attempt
    if (attempts >= maxAttempts + 1) {
      return "Account locked due to too many failed login attempts";
    }

    // Return attempt message for this attempt
    return `Attempt ${attempts}: Login failed`;
  };
}

module.exports = {
  createLoginTracker
};
