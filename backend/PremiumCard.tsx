import { LucideIcon } from 'lucide-react'

export function PremiumCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-xl transition hover:scale-[1.02] hover:shadow-2xl">
      <div className="mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  )
}
