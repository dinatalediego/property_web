import { BarChart2 } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans">
      <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 max-w-md text-center backdrop-blur-md">
        <BarChart2 className="mx-auto mb-4" size={48} />
        <h1 className="text-3xl font-bold mb-2">Solutions</h1>
        <p className="mb-6 opacity-80">Discover dashboards and APIs designed for actionable insights.</p>
        <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-black font-semibold transition">
          Explore Solutions
        </button>
      </div>
    </div>
  );
}
