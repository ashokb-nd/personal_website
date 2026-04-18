import { portfolioData } from '@/data/portfolio';

export default function Art() {
  const { art } = portfolioData;

  if (!art) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Art</h1>
        <p className="text-slate-500">Coming soon...</p>
      </div>
    );
  }

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Art</h1>
      <a href={art} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View my art portfolio →
      </a>
    </div>
  );
}