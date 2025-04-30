const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbConfig');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Mount route
app.use('/students', studentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

connectDB();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
