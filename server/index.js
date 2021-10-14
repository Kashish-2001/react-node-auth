const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);

// Import Routes
const authRoute = require("./routes/auth");

// Middlewares
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use("/api/user", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
