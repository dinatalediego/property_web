export default function Card({ Icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl shadow-xl p-6 hover:scale-105 transition-transform"
    >
      <Icon className="mx-auto mb-4" size={40} />
      <h3 className="text-xl">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
}
