// const bcrypt = require("bcryptjs");
import bcrypt from "bcrypt";

// Function for hashing the password...
async function hashpassword(password) {
  const saltrounds = 10;
  return bcrypt.hash(password, saltrounds);
}

// comparing the plaintext-password and the hashed password
async function comparePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Exporting the two modules
export { hashpassword, comparePassword };
