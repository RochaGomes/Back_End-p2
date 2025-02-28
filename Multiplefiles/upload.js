const express = require('express');
const router = express.Router();

// Exemplo de rota de upload
router.post('/upload', (req, res) => {
    // Lógica de upload aqui
    res.send('Upload realizado com sucesso!');
});

module.exports = router;