import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-white pt-24 pb-20"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        EconoAgents – Economic Intelligence
      </h1>
      <p className="mt-4 text-center max-w-2xl">
        Predictive AI agents for real-time economic modeling, forecasting & dashboards.
      </p>
    </motion.div>
  );
}