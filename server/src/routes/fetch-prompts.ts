import type { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function fetchPromptsRoute(app: FastifyInstance) {
  app.get('/prompts', async () => {
    const prompts = await prisma.prompt.findMany({})
  
    return 'HTTP Server Running'
  })
}