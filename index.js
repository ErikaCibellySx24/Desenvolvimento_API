
const express = require('express');
const server = express();
const contratos = require('./src/data/contrato.json');
require('dotenv').config();

const PORT = process.env.PORT || 3005;



server.listen(3005, () => {
    console.log(`O servidor está funcionando normalmente, na porta ${PORT}`);

});


