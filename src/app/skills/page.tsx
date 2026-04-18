import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'bg-blue-500';
    if (level >= 80) return 'bg-blue-400';
    if (level >= 70) return 'bg-blue-300';
    return 'bg-blue-200';
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
      <p className="text-slate-400 mb-12 text-lg">
        Technologies and tools I work with on a daily basis.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-slate-900/50 rounded-xl p-6 border border-slate-800"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium text-lg">{skill.name}</span>
              <span className="text-slate-400 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${getLevelColor(skill.level)} transition-all duration-500`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-900/30 rounded-xl border border-slate-800">
        <h2 className="text-xl font-semibold text-white mb-4">Additional Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {['Jupyter', 'VS Code', 'GitHub', 'AWS', 'Docker', 'Linux', 'REST APIs', 'Data Visualization', 'Statistics', 'A/B Testing'].map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}