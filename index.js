const express = require('express');

const app = express();
const anagramsRouter = require('./routes/anagrams');

const port = process.PORT || 3000;

app.use('/v1', anagramsRouter.v1);
app.use('/v2', anagramsRouter.v2);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
