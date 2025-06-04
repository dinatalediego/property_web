import Hero from './components/Hero'
import Card from './components/Card'
import { Database, Brain, BarChart2 } from 'lucide-react'

export default function App() {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <Card Icon={Database} title="Dataset Explorer" description="Interact with data." />
        <Card Icon={Brain} title="AI Lab" description="Simulate economic models." />
        <Card Icon={BarChart2} title="Solutions" description="Dashboards & APIs." />
      </div>
    </div>
  )
}