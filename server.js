const express = require('express');
const path = require('path'); // Importar o módulo path
const uploadRouter = require('./Multiplefiles/upload'); 
const purchaseRouter = require('./routers/purchase'); // Importando o router de compras

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir arquivos estáticos da pasta 'public'

// Rota para servir a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', uploadRouter); // Integrando a rota de upload
app.use('/api', purchaseRouter); // Integrando a rota de compras

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});