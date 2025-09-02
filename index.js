const dotenv = require("dotenv");

// Load environment variables before anything that reads process.env
dotenv.config();

const connectToDatabase = require("./src/database/connect");

// Connect to the database first, then start the server
connectToDatabase()
  .then(() => {
    require("./modules/express");
  })
  .catch((err) => {
    console.error("Failed to connect to database, exiting.", err);
    process.exit(1);
  });
