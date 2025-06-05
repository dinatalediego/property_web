import { Brain } from 'lucide-react';

export default function AILab() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans">
      <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 max-w-md text-center backdrop-blur-md">
        <Brain className="mx-auto mb-4" size={48} />
        <h1 className="text-3xl font-bold mb-2">AI Lab</h1>
        <p className="mb-6 opacity-80">Run simulations, test predictions, and train your economic models.</p>
        <button className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-black font-semibold transition">
          Run Simulation
        </button>
      </div>
    </div>
  );
}
