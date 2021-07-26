const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");

// Setting up config file
dotenv.config({ path: "backend/config/config.env" });

// Connect to Mongo
connectDB();

const app = express();

// Body Parser
app.use(express.json());

app.use(cookieParser());

app.use("/api", require("./routes/api/product"));
app.use("/api", require("./routes/api/auth"));

// Middleware to handle errors
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
