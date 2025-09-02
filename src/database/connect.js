// Load env early (index.js should already call dotenv, but keep safe)
require("dotenv").config();

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const user = encodeURIComponent(process.env.MONGODB_USER || "");
    const pass = encodeURIComponent(process.env.MONGODB_PASSWORD || "");
    const dbName = process.env.MONGODB_DB || "";
    const host = "cursonodejs.qltao8l.mongodb.net";

    const credentials = user && pass ? `${user}:${pass}@` : "";
    const dbSegment = dbName ? `/${dbName}` : "";

    const uri = `mongodb+srv://${credentials}${host}${dbSegment}?retryWrites=true&w=majority&appName=CursoNodeJs`;

    // Set a reasonable server selection timeout so failures surface quickly
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error(
      "Error connecting to MongoDB:",
      error && error.message ? error.message : error
    );
    // Rethrow so callers can handle failure (and avoid starting server while disconnected)
    throw error;
  }
};

module.exports = connectToDatabase;
