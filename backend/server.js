require('dotenv').config();
const express = require('express');
const cors = require('cors');
const footballRoutes = require('./routes/footballRoutes');

const app = express();
app.use(cors());

const PORT = 3000;

app.use('/', footballRoutes);

app.get('/', (req, res) => {
  res.send("server is up");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
