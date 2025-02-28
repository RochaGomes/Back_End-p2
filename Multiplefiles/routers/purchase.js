const express = require('express');
const { Purchase } = require('../models'); // Certifique-se de que o caminho está correto
const router = express.Router();

// Rota para criar uma nova compra
router.post('/purchase', async (req, res) => {
  const { userId, tickets } = req.body; // tickets deve ser um array de objetos com ticketId e quantity
  if (!Array.isArray(tickets) || tickets.length === 0) {
    return res.status(400).send('Tickets devem ser um array e não podem estar vazios');
  }

  try {
    const purchases = await Promise.all(tickets.map(ticket => {
      return Purchase.create({ userId, ticketId: ticket.ticketId, quantity: ticket.quantity });
    }));
    res.status(201).json(purchases);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar compra' });
  }
});

module.exports = router;