import { BarChart2 } from "lucide-react";
import { SolutionsAgent } from "./logic/SolutionsAgent";
import { solutionsConfig } from "./config";
import SolutionCard from "./components/SolutionCard";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Solutions() {
  const agent = new SolutionsAgent(solutionsConfig.defaultView);

  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans pt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SolutionCard
          icon={<BarChart2 size={48} />}
          title="Solutions"
          description={agent.getDescription()}
          onAction={() => agent.viewSolutions()}
        />
      </motion.div>
    </>
  );
}