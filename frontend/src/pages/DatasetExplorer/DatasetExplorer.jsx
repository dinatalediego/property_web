import { Database } from "lucide-react";
import { DatasetExplorerAgent } from "./logic/DatasetExplorerAgent";
import { datasetConfig } from "./config";
import DatasetCard from "./components/DatasetCard";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function DatasetExplorer() {
  const agent = new DatasetExplorerAgent(datasetConfig.defaultDataset);

  return (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans pt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <DatasetCard
          icon={<Database size={48} />}
          title="Dataset Explorer"
          description={agent.getDescription()}
          onAction={() => agent.startExploration()}
        />
      </motion.div>
    </>
  );
}