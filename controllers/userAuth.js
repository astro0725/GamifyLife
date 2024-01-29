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

module.exports = {
    signUpUser,
};