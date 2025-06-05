import { supabase } from "../../../supabaseClient";

export class AILabAgent {
  constructor(prompt) {
    this.prompt = prompt;
    this.state = {};
  }
  async runSimulation() {
      console.log("Running AI Simulation with prompt:", this.prompt)
      const { error } = await supabase
        .from("simulations")
        .insert([{ prompt: this.prompt, timestamp: new Date().toISOString() }])
      if (error) console.error("Supabase error:", error.message)
    }

    getDescription() {
      return "Run simulations, test predictions, and train your economic models with AI."
    }

  runSimulation() {
    console.log("Running AI Simulation with prompt:", this.prompt);
    // Simulated AI action (replace with OpenAI API later)
  }
}