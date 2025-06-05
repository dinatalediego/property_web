export class AILabAgent {
  constructor(prompt) {
    this.prompt = prompt
    this.state = {}
  }

  getDescription() {
    return "Run simulations, test predictions, and train your economic models with AI."
  }

  runSimulation() {
    console.log("Running AI Simulation with prompt:", this.prompt)
    // Aquí podrías integrar llamada a API OpenAI, etc.
  }
}
