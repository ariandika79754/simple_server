// Import package/library express
const express = require('express');

// Initialization application expressJS
const app = express();

const PORT = 4000;

// Parsing JSON body
app.use(express.json({ limit: '50mb' }));

// Parsing URL-encoded data
app.use(express.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000,
}));

/**
 * Req adalah Request
 * Res adalah Response
 */
app.get('/', (req, res) => {
  return res.status(200).send("Hello my name is Ari Andika");
});

app.post('/', (req, res) => {
  return res.status(201).send("Ini adalah HTTP Method POST");
})

app.get('/:id', (req, res) => {
  return res.status(200).send(`Hello, World from ${req.params.id}`);
});

app.put('/', (req, res) => {
  return res.status(200).send("Ini adalah HTTP Method PUT");
})

app.delete('/', (req, res) => {
  return res.status(200).send("Ini adalah HTTP Method DELETE");
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
})