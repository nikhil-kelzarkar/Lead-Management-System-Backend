const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
//
app.use(cors({
  origin: 'https://lead-management-system-frontend-bwy5whltm.vercel.app', // use your Vercel frontend domain
}));
//
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'));

app.use('/api/leads', require('./routes/leads'));
app.use('/api/auth', require('./routes/auth'));

app.listen(5000, () => console.log('Server running on port 5000'));
