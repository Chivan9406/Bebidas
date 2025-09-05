import { streamText } from 'ai'

import { openRouter } from '../lib/ai.ts'

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openRouter(import.meta.env.VITE_OPENROUTER_MODEL),
      system: 'Eres un bartender experto que crea recetas de bebidas y cócteles. Proporciona las recetas en formato markdown, con una lista de ingredientes y pasos numerados para prepararla',
      temperature: 1,
      prompt
    })
    return result.textStream
  }
}