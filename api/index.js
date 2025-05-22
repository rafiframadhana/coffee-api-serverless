import express from 'express';
import cors from 'cors';
import connectDB from '../src/utils/db.js';
import coffeeRoutes from '../src/routes/coffee.js';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/coffee', coffeeRoutes);

export default app;