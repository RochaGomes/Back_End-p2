// Exemplo de chamada da API no frontend
async function createPurchase(userId, tickets) {
    const response = await fetch('/api/purchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, tickets }),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao criar compra');
    }
  
    const data = await response.json();
    return data;
  }
  
  // Exemplo de uso da função createPurchase
  document.getElementById('purchaseButton').addEventListener('click', async () => {
    const userId = 1; // Exemplo de ID do usuário
    const tickets = [
      { ticketId: 1, quantity: 2 }, // Exemplo de ingresso
      { ticketId: 2, quantity: 1 }  // Outro ingresso
    ];
  
    try {
      const result = await createPurchase(userId, tickets);
      console.log('Compra criada com sucesso:', result);
    } catch (error) {
      console.error('Erro ao criar compra:', error);
    }
  });