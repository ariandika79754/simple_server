const express = require('express');

// create an instance of express
const app = express();

// define the port to be used
const PORT = 1945;

// basic rule that responds with a message "hello Ari"
app.get('/', (req, res) => {
    res.send("Hello my name is Ari Andika Leva Pratama");
});

// start the server on the defined port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
