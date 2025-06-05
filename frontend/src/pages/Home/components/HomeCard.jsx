export default function HomeCard({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl shadow-xl p-6 hover:scale-105 transition-transform text-center"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
}