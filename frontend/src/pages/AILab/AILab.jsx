import { Brain } from 'lucide-react'
import { AILabAgent } from './logic/AILabAgent'
import { prompts } from './config'
import SimulationCard from './components/SimulationCard'

export default function AILab() {
  const agent = new AILabAgent(prompts.defaultPrompt)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans">
      <SimulationCard
        icon={<Brain size={48} />}
        title="AI Lab"
        description={agent.getDescription()}
        onAction={() => agent.runSimulation()}
      />
    </div>
  )
}
