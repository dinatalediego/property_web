import { Brain } from "lucide-react";
import { AILabAgent } from "./logic/AILabAgent";
import { prompts } from "./config";
import SimulationCard from "./components/SimulationCard";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function AILab() {
  const agent = new AILabAgent(prompts.defaultPrompt);

  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans pt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SimulationCard
          icon={<Brain size={48} />}
          title="AI Lab"
          description={agent.getDescription()}
          onAction={() => agent.runSimulation()}
        />
      </motion.div>
    </>
  );
}