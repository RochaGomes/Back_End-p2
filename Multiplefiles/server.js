const express = require('express');
const uploadRouter = require('./upload'); // Importando o router de upload

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', uploadRouter); // Integrando a rota de upload

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});