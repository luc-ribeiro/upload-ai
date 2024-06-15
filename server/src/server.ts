import { fastify } from 'fastify'
import { fetchPromptsRoute } from './routes/fetch-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(fetchPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})