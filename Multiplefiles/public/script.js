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
    const userId = document.getElementById('userId').value; // Obter ID do usuário
    const tickets = [
        { ticketId: document.getElementById('ticketId1').value, quantity: document.getElementById('quantity1').value },
        { ticketId: document.getElementById('ticketId2').value, quantity: document.getElementById('quantity2').value }
    ];

    try {
        const result = await createPurchase(userId, tickets);
        console.log('Compra criada com sucesso:', result);
    } catch (error) {
        console.error('Erro ao criar compra:', error);
    }
});