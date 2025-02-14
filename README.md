# Sistema de Vendas de Ingressos

Este projeto é um sistema de vendas de ingressos que permite o gerenciamento de usuários, tipos de ingressos e compras. O sistema utiliza o Sequelize para persistência de dados em um banco de dados SQLite e oferece uma API RESTful para interações.

## Funcionalidades

### API REST

1. **Gerenciamento de Usuários**
   - **Cadastro**: Permite o registro de novos usuários.
   - **Autenticação**: Usuários podem se autenticar usando um nome de usuário e senha.

2. **Gestão dos Tipos de Ingressos**
   - **CRUD Completo**: Permite criar, ler, atualizar e excluir tipos de ingressos. Cada ingresso possui um nome, preço e quantidade disponível.

3. **Venda de Ingressos**
   - Usuários autenticados podem adquirir ingressos de diferentes tipos.

### Interface Web

1. **Login**
   - Interface para login de usuários.
   - Login pode ser realizado a partir de um token.

2. **Histórico de Compras**
   - Exibe a lista de ingressos adquiridos pelo usuário.

3. **Visualização de um Ingresso**
   - Usuários podem visualizar individualmente cada ingresso adquirido.

## Regras de Negócio

- **Estoque**: Uma compra não pode ser concluída se a quantidade solicitada exceder o estoque disponível.
- **Validação de Usuários**: Apenas usuários autenticados podem realizar compras.
- **Autonomia Administrativa**: Apenas administradores podem criar ou editar tipos de ingressos.
- **Política de Cancelamento**: Compras não podem ser canceladas após a conclusão.

## Estrutura de Diretórios
MultipleFiles/ ├── models/ │ ├── User.js │ ├── Ticket.js │ ├── Purchase.js │ └── index.js ├── routes/ │ ├── upload.js │ └── auth.js ├── views/ │ ├── login.mustache │ ├── purchases.mustache │ └── ticket.mustache ├── uploads/ ├── .env ├── .gitignore ├── database.sqlite ├── package.json ├── package-lock.json ├── server.js └── README.md

## Instalação

1. Clone o repositório:

   ```bash
   git clone <https://github.com/RochaGomes/Back_End-p2>
   cd MultipleFiles
Instale as dependências:

bash
Copy code
npm install
Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como a chave secreta para o JWT.

Inicie o servidor:

bash
Copy code
node server.js
Acesse a aplicação em http://localhost:3000.

Uso
Cadastro de Usuários: Acesse a rota de cadastro (a ser implementada) para registrar novos usuários.
Login: Acesse /login para autenticar um usuário.
Gestão de Ingressos: Acesso à API para criar, ler, atualizar e excluir ingressos (a ser implementada).
Compra de Ingressos: Usuários autenticados podem realizar compras de ingressos.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

### Observações

- **URL_DO_REPOSITORIO**: Substitua pelo URL do seu repositório Git.
- **Variáveis de Ambiente**: Certifique-se de documentar quais variáveis de ambiente são necessárias no arquivo `.env`.
- **Rotas e Funcionalidades**: Você pode adicionar mais detalhes sobre as rotas e suas funcionalidades conforme necessário.

Essa documentação fornece uma visão geral do projeto, suas funcionalida
