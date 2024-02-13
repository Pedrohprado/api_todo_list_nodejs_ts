import express = require('express');
import path = require('path');
import dotenv = require('dotenv');
import cors = require('cors');
import apiRoutes from './routes/api';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use('/api', apiRoutes);

server.use((req, res) => {
  res.status(404);
  res.json({
    error: 'endpoint não encontrado',
  });
});

server.listen(process.env.PORT);
