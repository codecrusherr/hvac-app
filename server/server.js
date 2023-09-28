// Import required packages and configurations
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";

// Load environment variables from .env file
dotenv.config();

// Creates express application
const app = express();

const corsOptions = {
  origin: "https://localhost:3000",
  credentials: true,
};

// Middleware used in the express application
app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));

// Start server
const PORT = process.env.PORT || 8800;
const server = app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// Error listener for the server instance
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log(
      `Port ${PORT} is already in use. Please use another port or stop the other process.`
    );
    process.exit(1); // Exit the process with a failure code
  } else {
    console.error("Failed to start server:", error);
  }
});

// Error-handling middleware for handling errors during request/response
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace to the console
  res.status(500).json({
    message: "An internal server error occurred!",
  });
});

// When user accesses localhost3000/Register the server access UserRouter and its functions within (GET, POST, etc)
app.use("/register", registerRouter);

// When user accesses localhost3000/Login the server access UserRouter and its functions within (GET, POST, etc)
app.use("/login", loginRouter);
