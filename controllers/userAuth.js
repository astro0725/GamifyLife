const bcrypt = require('bcrypt');
const db = require("../models");
const User = db.User;

// function to sign up a new user with email and password
async function signUpUser(req, email, password, username) {
  try {
    // check if a user with the same email already exists in the database
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      console.error("Email already taken.");
      return { error: "Email already taken." };
    }

    // hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user record in the database
    const newUser = await User.create({ username, email, password: hashedPassword });

    // store user session data (e.g., user ID) once signed up
    req.session.userId = newUser.id;

    // log the user info
    console.log("User registered:", newUser);
    return { success: true };
  } catch (error) {
    console.error("Error during sign up:", error);
    return { error: "Error during sign up" };
  }
}

// function to sign in an existing user with email and password
async function signInUser(req, email, password) {
  try {
    // attempt to find the user by email in the database
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      // user with the provided email does not exist
      return { error: "User not found." };
    }

    // compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // passwords don't match
      return { error: "Invalid password." };
    }

    // store user session data once signed in
    req.session.userId = user.id;

    // log the user info
    console.log("User signed in:", user);
    return { success: true, user };
  } catch (error) {
    console.error("Error during sign in:", error);
    return { error: "Error during sign in." };
  }
}

async function logoutUser(req) {
  try {
    // check if a user session exists
    if (req.session) {
      // destroy the user's session
      req.session.destroy(err => {
        if (err) {
          console.error("Error destroying session:", err);
          return { error: "Error destroying session." };
        } else {
          console.log("User signed out successfully.");
          return { success: true };
        }
      });
    } else {
      console.error("No active session to log out.");
      return { error: "No active session." };
    }
  } catch (error) {
    console.error("Error during logout:", error);
    return { error: "Error during logout." };
  }
}

module.exports = {
    signUpUser,
    signInUser,
    logoutUser,
};