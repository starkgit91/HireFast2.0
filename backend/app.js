const express = require('express');
const cors = require('cors');
const candidateRoutes = require('./routes/candidates');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/candidates', candidateRoutes);

module.exports = app;
