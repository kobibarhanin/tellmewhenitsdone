const express = require('express');
const app = express();

const SECOND = 1000;

const sleep = async (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

app.get('/:interval', async (req, res) => {
  const interval = req.params.interval;
  if (interval > 30 * SECOND) {
    res.status(400).send('Interval too long');
    return;
  }

  await sleep(req.params.interval);
  res.json({ answer: 42 });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server running on port 3000', '');
});
