# Infographic Interactivity API

API REST responsável pelo gerenciamento de dados do sistema **Infográfico Interativo – Livro das Formas de Expressão (IPHAN)**.

Este projeto foi desenvolvido como parte de um Trabalho de Conclusão de Curso (TCC) do Bacharelado em Sistemas e Mídias Digitais da Universidade Federal do Ceará (UFC).

---

## Sobre o Projeto

Esta API fornece suporte ao sistema de visualização interativa do patrimônio cultural imaterial brasileiro, sendo responsável por:

- Gerenciamento de bens culturais  
- Autenticação de usuários  
- Fornecimento de dados para o front-end do infográfico  

A arquitetura foi projetada para ser modular e escalável, permitindo a futura expansão para outros livros de registro do IPHAN.

---

## Funcionalidades

- Autenticação de usuários  
- CRUD de bens culturais  
- API REST para consumo do front-end  
- Estrutura preparada para múltiplos livros do IPHAN  
- Middleware de autenticação e segurança  

---

## Tecnologias

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

---

## Arquitetura

O projeto segue uma arquitetura baseada em separação de responsabilidades:

server.js → Rotas → Controllers → Models → MongoDB

---

## Estrutura do Projeto

infografico-interativo-api/
├── server.js
├── .env
├── models/
│   ├── User.js
│   └── Bem.js
├── routes/
│   ├── auth.js
│   └── bens.js
├── controllers/
│   ├── authController.js
│   └── bemController.js
├── middleware/
│   └── auth.js

---

## Integração com o Front-end

Esta API é consumida pelo front-end do projeto:

**Infográfico Interativo – Livro das Formas de Expressão**

Principais integrações:
- Autenticação de usuários  
- Consulta de bens culturais  
- Atualização e gerenciamento de conteúdo  

---

## Escalabilidade

A API foi projetada para expansão futura, permitindo:

- Inclusão de novos livros do IPHAN:
  - Livro dos Saberes  
  - Livro das Celebrações  
  - Livro dos Lugares  
- Expansão do sistema de autenticação  
- Evolução para painel administrativo completo  

---

## 👨‍💻 Autor

Mateus de Aquino -
Universidade Federal do Ceará (UFC)

Projeto acadêmico desenvolvido para fins de pesquisa em Visualização da Informação e Patrimônio Cultural Digital.
