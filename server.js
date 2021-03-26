const express = require('express');
// esto es un ejemplo
const app = express();

app.get('/',(req, res) => res.send('<h1> express con HTML</h1>'))

app.listen(8080);
console.log('Server on port: 8080');
