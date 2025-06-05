import { BarChart2 } from 'lucide-react';
import { SolutionsAgent } from './logic/SolutionsAgent';
import { solutionsConfig } from './config';
import SolutionCard from './components/SolutionCard';

export default function Solutions() {
  const agent = new SolutionsAgent(solutionsConfig.defaultView);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white flex items-center justify-center font-sans">
      <SolutionCard
        icon={<BarChart2 size={48} />}
        title="Solutions"
        description={agent.getDescription()}
        onAction={() => agent.viewSolutions()}
      />
    </div>
  );
}

