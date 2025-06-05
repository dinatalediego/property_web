import { Database } from "lucide-react";
import { DatasetExplorerAgent } from "./logic/DatasetExplorerAgent";
import { datasetConfig } from "./config";
import DatasetCard from "./components/DatasetCard";
import Navbar from "../../components/Navbar"; // Ajusta si está fuera

export default function DatasetExplorer() {
  const agent = new DatasetExplorerAgent(datasetConfig.defaultDataset);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans">
      <DatasetCard
        icon={<Database size={48} />}
        title="Dataset Explorer"
        description={agent.getDescription()}
        onAction={() => agent.startExploration()}
      />
    </div>
  );
}