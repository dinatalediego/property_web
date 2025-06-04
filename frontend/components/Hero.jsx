import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        EconoAgents – Economic Intelligence
      </h1>
      <p className="mt-4">
        Predictive AI agents for real-time economic modeling, forecasting & dashboards.
      </p>
    </motion.div>
  );
}
