import fs = require('fs');
import https = require('https');
import express = require('express');
import path = require('path');
import dotenv = require('dotenv');
import cors = require('cors');
import apiRoutes from './routes/api'; // Certifique-se de que o caminho está correto

dotenv.config();

const server = express();
server.use(cors());

server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use('/api', apiRoutes);

server.use((req, res) => {
  res.status(404);
  res.json({
    error: 'endpoint não encontrado',
  });
});

const httpsServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, '../.cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../.cert', 'cert.pem')),
  },
  server
);

httpsServer.listen(process.env.PORT, () => {
  console.log(`Servidor HTTPS rodando na porta ${process.env.PORT}`);
});
// import express = require('express');
// import path = require('path');
// import dotenv = require('dotenv');
// import cors = require('cors');
// import apiRoutes from './routes/api';
// import fs = require('fs')

// dotenv.config();

// const server = express();
// server.use(cors());
// server.use(express.json());

// server.use(express.static(path.join(__dirname, '../public')));
// server.use(express.urlencoded({ extended: true }));

// server.use('/api', apiRoutes);

// server.use((req, res) => {
//   res.status(404);
//   res.json({
//     error: 'endpoint não encontrado',
//   });
// });

// server.listen(process.env.PORT);
