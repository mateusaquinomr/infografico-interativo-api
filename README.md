# API - Infografico Interativo 

## Sobre o projeto

Este repositório contém a **API do infográfico interativo sobre o Livro das Formas de Expressão do IPHAN**, desenvolvido como parte do meu **Trabalho de Conclusão de Curso (TCC)**.

A API é responsável por gerenciar os **dados dos bens culturais**, bem como a **autenticação de usuários**, permitindo que o sistema seja integrado ao front-end do infográfico interativo.

Na versão atual do projeto, a API atende ao **Livro das Formas de Expressão**, mas foi estruturada para permitir a inclusão de **outros livros de registro do patrimônio imaterial do IPHAN** no futuro.

---

## Funcionalidades

* Autenticação de usuários
* Cadastro e gerenciamento de bens culturais
* Fornecimento de dados para o front-end do infográfico interativo
* Estrutura preparada para expansão para outros livros do IPHAN

---

## Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose

---

## Estrutura do projeto

```
infografico-interativo-api/
├── server.js            # Arquivo principal da aplicação
├── .env                 # Variáveis de ambiente
├── models/              # Modelos do banco de dados
│   ├── User.js          # Modelo de usuário
│   └── Bem.js           # Modelo de bem cultural
├── routes/              # Rotas da API
│   ├── auth.js          # Rotas de autenticação
│   └── bens.js          # Rotas de bens culturais
├── controllers/         # Controladores da aplicação
│   ├── authController.js
│   └── bemController.js
└── middleware/          # Middlewares
    └── auth.js          # Middleware de autenticação
```

---

## Integração com o front-end

Esta API foi desenvolvida para servir o projeto:

**Infográfico Interativo - Livro das Formas de Expressão**

O front-end consome esta API para:

* obter dados dos bens culturais
* gerenciar autenticação
* atualizar informações quando necessário

---

## Possibilidades de expansão

Embora a versão atual esteja focada no **Livro das Formas de Expressão**, a API foi estruturada para permitir que futuramente sejam adicionados outros livros do IPHAN, como:

* Livro dos Saberes
* Livro das Celebrações
* Livro dos Lugares

---

## Autor

Mateus de Aquino
Universidade Federal do Ceará
