export default function SolutionCard({ icon, title, description, onAction }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 max-w-md text-center backdrop-blur-md">
      <div className="mb-4">{icon}</div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="mb-6 opacity-80">{description}</p>
      <button onClick={onAction} className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-black font-semibold transition">
        Explore Solutions
      </button>
    </div>
  );
}