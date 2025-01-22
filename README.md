# API para Exercício da Faculdade

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## Descrição do Projeto

Este é um projeto de desenvolvimento de uma API básica utilizando **Node.js** e **Express** para fins acadêmicos. O objetivo principal é explorar os conceitos de desenvolvimento de APIs RESTful, incluindo rotas, middlewares e integração com banco de dados MySQL.

---

## Funcionalidades

- **CRUD Completo**: 
  - Criação, leitura, atualização e exclusão de recursos.
- **Middlewares**:
  - Implementação de middlewares para manipulação de erros e validação.
- **Integração com Banco de Dados**:
  - Conexão com banco de dados MySQL utilizando a biblioteca `mysql2`.

---

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução para JavaScript.
- **Express** - Framework web minimalista para Node.js.
- **MySQL** - Banco de dados relacional.
- **dotenv** - Gerenciamento de variáveis de ambiente.
- **body-parser** - Parsing do corpo das requisições HTTP.

---

## Instalação e Configuração

### Pré-requisitos

- Node.js instalado na máquina.
- MySQL configurado e em execução.

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
   - Crie um banco de dados MySQL e atualize o arquivo `.env` com as informações de conexão:
     ```env
     DB_HOST=localhost
     DB_USER=seu-usuario
     DB_PASSWORD=sua-senha
     DB_NAME=nome-do-banco
     ```

4. Execute o servidor:
   ```bash
   npm start
   ```

5. Acesse a API no navegador ou em ferramentas como Postman:
   ```
   http://localhost:3000
   ```

---

## Estrutura de Diretórios

```plaintext
.
├── src
│   ├── routes        # Definição das rotas
│   ├── controllers   # Lógica de negócios
│   ├── models        # Interação com o banco de dados
│   └── middlewares   # Middlewares para validação e erros
├── .env              # Configuração do ambiente
├── package.json      # Dependências do projeto
└── README.md         # Documentação do projeto
```

---

## Rotas Disponíveis

### Exemplo de Rotas

- **GET /api/resources**: Retorna todos os recursos.
- **GET /api/resources/:id**: Retorna um recurso específico pelo `id`.
- **POST /api/resources**: Cria um novo recurso.
- **PUT /api/resources/:id**: Atualiza um recurso pelo `id`.
- **DELETE /api/resources/:id**: Remove um recurso pelo `id`.

---

## Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adicionei nova funcionalidade'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
