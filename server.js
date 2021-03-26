const express = require('express');
// esto es un ejemplo
const app = express();

app.get('/',(req, res) => res.send('Hola mundo desde express'))

app.listen(3000);
console.log('Server on port: 3000');
