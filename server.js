const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  console.log(name, message);

  res.send("✅ Data received successfully!");
});

app.listen(3000, () => console.log("Server running on port 3000"));