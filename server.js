const express = require('express');
const mustacheExpress = require('mustache-express');
const { authenticateToken, isAdmin, login } = require('./middleware/auth'); // Importando a função de login
const { User, Ticket, Purchase } = require('./models');
const sequelize = require('./models/index');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de venda de ingressos!');
});

// Rota de Login
app.post('/login', login); // Definindo a rota de login

// Rota de Cadastro
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    await User.create({ username, password: hash });
    res.send('Usuário registrado!');
});

// Outras rotas...

// Inicialização
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000 🚀'));
});