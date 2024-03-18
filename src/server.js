// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { evaluateFractionExpression } = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
  const expression = req.body.expression;
  const result = evaluateFractionExpression(expression);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
