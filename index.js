const express = require('express');
const app = express();

const sleep = async (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

app.get('/:interval', async (req, res) => {
  await sleep(req.params.interval);
  res.json({ answer: 42 });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server running on port 3000', '');
});
