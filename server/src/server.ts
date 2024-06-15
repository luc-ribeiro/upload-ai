import { fastify } from 'fastify'
import { fetchPromptsRoute } from './routes/fetch-prompts'
import { uploadVideoRoute } from './routes/upload-video'

const app = fastify()

app.register(fetchPromptsRoute)
app.register(uploadVideoRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})