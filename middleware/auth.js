const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models'); // Ajuste o caminho conforme necessário

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).send('Token necessário');
    jwt.verify(token, 'secret', (err, user) => {
        if (err) return res.status(403).send('Token inválido');
        req.user = user;
        next();
    });
}

function isAdmin(req, res, next) {
    if (!req.user?.isAdmin) return res.status(403).send('Acesso restrito');
    next();
}

async function login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    
    if (!user) return res.status(404).send('Usuário não encontrado');
    
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(401).send('Senha inválida');
    
    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'secret', { expiresIn: '1h' });
    res.json({ token });
}

module.exports = { authenticateToken, isAdmin, login };