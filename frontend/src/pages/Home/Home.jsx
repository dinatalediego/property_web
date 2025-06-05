import { useNavigate } from "react-router-dom";
import { Database, Brain, BarChart2 } from "lucide-react";
import { HomeAgent } from "./logic/HomeAgent";
import { homeConfig } from "./config";
import HomeCard from "./components/HomeCard";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const agent = new HomeAgent();

  return (
    <>
      <Navbar />
      <motion.div
        className="bg-gradient-to-br from-blue-900 via-indigo-800 to-black text-white font-sans min-h-screen pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center pb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {homeConfig.title}
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">{homeConfig.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
          <HomeCard
            icon={<Database size={40} />}
            title="Dataset Explorer"
            description="Interact with data."
            onClick={() => navigate("/dataset")}
          />
          <HomeCard
            icon={<Brain size={40} />}
            title="AI Lab"
            description="Simulate economic models."
            onClick={() => navigate("/lab")}
          />
          <HomeCard
            icon={<BarChart2 size={40} />}
            title="Solutions"
            description="Dashboards & APIs."
            onClick={() => navigate("/solutions")}
          />
        </div>
      </motion.div>
    </>
  );
}