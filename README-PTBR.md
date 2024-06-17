<h1 align="center" style="text-align: center;">
  upload.ai
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<div align="right">
    Click <a href="https://github.com/luc-ribeiro/upload-ai/blob/main/README.md">here</a> to view the english version.
</div>

<h2 id="project">📁 Projeto</h2>

O projeto consiste em um gerador de pedidos e títulos para vídeos do YouTube com base na transcrição do conteúdo.

![Screenshot_1](https://github.com/luc-ribeiro/upload-ai/assets/69688077/ba00dbc0-ec3e-4bf9-bd0c-4e6a4e48d4bd)

<h2 id="technologies">💻 Tecnologias</h2>

### Frontend

- ReactJS
- TailwindCSS
- Shadcn/ui
- FFmpeg
- AI SDK

### Backend

- Node.js
- Fastify
- Prisma ORM
- OpenAI
- Zod

<h2 id="usage">💡 Como executar</h2>

Para executar a aplicação em sua máquina local, certifique-se de ter `Node.js` e `npm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/luc-ribeiro/upload-ai
```

2. Acesse a pasta `server` do projeto:

```
$ cd upload-ai/server
```

3. Instale as dependências:

```
$ npm install
```

4. Execute as migrações:

```
$ npx prisma migrate dev
```

5. Rode o comando de seed do banco de dados:

```
$ npx prisma db seed
```

6. Inicie o servidor:

```
$ npm run dev
```

7. Acesse a pasta `web` do projeto:

```
$ cd upload-ai/web
```

8. Instale as dependências:

```
$ npm install
```

9. Inicie o frontend:

```
$ npm run dev
```

⚠️ **Importante**: No diretório do servidor, crie um arquivo `.env` com base no arquivo `.env.example`. No campo DATABASE_URL, especifique a URL do banco de dados que deseja utilizar. Crie uma conta no site [OpenAI](https://openai.com/), obtenha sua chave da API e preencha o campo `OPENAI_API_KEY` com sua chave.

<h2 id="license">📝 Licença</h2>

Este projeto está licenciado sob a licença MIT.
