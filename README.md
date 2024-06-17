<h1 align="center" style="text-align: center;">
  upload.ai
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<div align="right">
    Clique <a href="https://github.com/luc-ribeiro/upload-ai/blob/main/README-PTBR.md">aqui</a> para ver a versão em Português.
</div>

<h2 id="project">📁 Project</h2>

The project consists of a generator of orders and titles for YouTube videos based on the transcription of the content.

![Screenshot_1](https://github.com/luc-ribeiro/upload-ai/assets/69688077/017a8b97-8647-4e80-9adf-0781d3cab360)

<h2 id="technologies">💻 Techs</h2>

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

<h2 id="usage">💡 How to run</h2>

To run the application on your local machine, make sure you have `Node.js` and `npm` installed before proceeding with the steps below:

1. Clone the project:

```
$ git clone https://github.com/luc-ribeiro/upload-ai
```

2. Navigate to the `server` folder of the project:

```
$ cd upload-ai/server
```

3. Install the dependencies:

```
$ npm install
```

4. Run the migrations:

```
$ npx prisma migrate dev
```

5. Execute the database seed command:

```
$ npx prisma db seed
```

6. Start the server:

```
$ npm run dev
```

7. Navigate to the `web` folder of the project:

```
$ cd upload-ai/web
```

8. Install the dependencies:

```
$ npm install
```

9. Start the frontend:

```
$ npm run dev
```

⚠️ **Important**: In the server directory, create a `.env` file based on the `.env.example` file. In the DATABASE_URL field, specify the URL of the database you want to use. Create an account on the [OpenAI](https://openai.com/) website, obtain your API key, and fill in the `OPENAI_API_KEY` field with your key.

<h2 id="license">📝 License</h2>

This project is licensed under the MIT license.
