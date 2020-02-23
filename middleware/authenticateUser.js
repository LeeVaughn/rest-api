const auth = require("basic-auth");
const User = require("../models").User;
const bcryptjs = require("bcryptjs");

const authenticateUser = async (req, res, next) => {
  // parse the user's credentials from the Authorization header
  const credentials = auth(req);
  let message = null;

  // if the user's credentials are available...
  if (credentials) {
    // attempt to retrieve the user from data store using the user's key from the Authorization header
    const user = await User.findOne({ where: { emailAddress: credentials.name } });

    // if a user was successfully retrieved from the data store...
    if (user) {
      // compares the credentialed user's password to the retrieved user's password
      const authenticated = bcryptjs.compare(credentials.pass, user.password);

      // If the passwords match...
      if (authenticated) {
        console.log(`Authentication successful for username: ${user.username}`);

        // store the retrieved user object on the request object so middleware that follows will have access to this info
        req.currentUser = user;
      } else {
        message = `Authentication failure for username: ${user.username}`;
      }
    } else {
      message = `User not found for username: ${credentials.name}`;
    }
  } else {
    message = "Auth header not found";
  }

  // if user authentication has failed...
  if (message) {
    console.warn(message);

    res.status(401).json({ message: "Access Denied" });
  }

  // if user authentication has succeeded...
  next();
}

module.exports = authenticateUser;