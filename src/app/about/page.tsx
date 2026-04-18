import { portfolioData } from '@/data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed">
              {about.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
            <div className="space-y-6">
              {about.experience.map((exp, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-slate-400 mt-1">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-400 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h2 className="text-xl font-semibold text-white mb-4">Education</h2>
            {about.education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-white font-medium">{edu.degree}</h3>
                <p className="text-slate-400">{edu.institution}</p>
                <p className="text-slate-500 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {edu.year}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h2 className="text-xl font-semibold text-white mb-4">Location</h2>
            <p className="text-slate-400 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {portfolioData.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}