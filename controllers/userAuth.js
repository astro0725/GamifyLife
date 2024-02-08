const bcrypt = require('bcrypt');
const db = require("../models");
const User = db.User;

// function to sign up a new user with email and password
async function signUpUser(req, email, password, username) {
  console.log("Received request body:", req.body);

  try {
    // // hash the password using bcrypt
    // const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user record in the database
    const newUser = await User.create({ username, email, password });
    console.log("New User:", newUser.toJSON());

    // store user session data (e.g., user ID) once signed up
    req.session.authenticated = true; 
    req.session.userId = newUser.id; 
    console.log(req.sessionID)

    await SessionModel.update({ userId: user.id }, { where: { sid: req.sessionID } });

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

    // // compare the provided password with the hashed password from the database
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    const isPasswordValid = (password === user.password);

    if (isPasswordValid) {
      req.session.userId = user.id; 
      req.session.authenticated = true; 
      return { success: true, user };
    }

    // store user session data once signed in
    req.session.authenticated = true; 
    req.session.userId = user.id; 
    console.log(req.sessionID)

    await SessionModel.update({ userId: user.id }, { where: { sid: req.sessionID } });

    // log the user info
    console.log("User signed in:", user);
    return { success: true, user };
  } catch (error) {
    console.error("Error during sign in:", error);
    return { error: "Error during sign in." };
  }
}

// function to logout user
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

// function to delete a user account
async function deleteUser(req) {
  try {
    // check if there is an authenticated user session
    if (!req.session.userId) {
      return { error: "User not authenticated." };
    }

    const userId = req.session.userId;

    // find the user in the database
    const user = await User.findByPk(userId);

    if (!user) {
      return { error: "User not found." };
    }

    // delete the user from the database
    await user.destroy();

    // log the user out by destroying their session
    req.session.destroy(err => {
      if (err) {
        console.error("Error destroying session:", err);
      }
    });

    console.log("User deleted successfully.");
    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { error: "Error deleting user." };
  }
}

module.exports = {
    signUpUser,
    signInUser,
    logoutUser,
    deleteUser
};