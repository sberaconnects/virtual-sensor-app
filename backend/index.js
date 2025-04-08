const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/api/torque', (req, res) => {
  const data = {
    frontLeft: (Math.random() * 100).toFixed(2),
    frontRight: (Math.random() * 100).toFixed(2),
    rearLeft: (Math.random() * 100).toFixed(2),
    rearRight: (Math.random() * 100).toFixed(2),
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`🚀 Torque Sensor API running at http://localhost:${port}`);
});
