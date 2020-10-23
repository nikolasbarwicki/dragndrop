const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const recipes = require('./routes/recipes');

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/recipes', recipes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
