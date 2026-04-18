import { portfolioData } from '@/data/portfolio';

export default function Home() {
  const { name, title, location, email, github, linkedin, about, education, experience, projects, news, skills, publications } = portfolioData;

  return (
    <main className="space-y-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">{name}</h1>
        <p className="text-xl text-slate-600">{title}</p>
        <p className="text-slate-500">
          {about.university} · {location}
        </p>
        <p className="text-slate-500">
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-2">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href={`mailto:${email}`} className="text-slate-600 hover:text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">About</h2>
        <p className="text-slate-700 leading-relaxed">{about.description}</p>
        
        {about.previous && (
          <p className="text-slate-700 leading-relaxed">{about.previous}</p>
        )}
        
        <p className="text-slate-700">
          <strong>Interests:</strong> {about.interests.join(", ")}
        </p>
      </section>

      {/* News Section */}
      {news && news.length > 0 && (
        <section id="news" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Updates</h2>
          <ul className="space-y-2">
            {news.map((item, index) => (
              <li key={index} className="text-slate-700">
                <span className="font-semibold">{item.date}:</span> {item.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Publications / Projects */}
      {publications && publications.length > 0 && (
        <section id="publications" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Publications</h2>
          <ul className="space-y-3">
            {publications.map((pub, index) => (
              <li key={index} className="text-slate-700">
                <span className="font-semibold">{index + 1}.</span> {pub.title}. <em>{pub.venue}</em> ({pub.year}).
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      <section id="projects" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="text-slate-700">
              <p>
                <span className="font-semibold">{index + 1}. {project.title}</span>
                <span className="text-slate-500"> - {project.description}</span>
              </p>
              <p className="text-slate-500 text-sm">{project.tech.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Experience</h2>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="text-slate-700">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-slate-500">{exp.company} · {exp.period}</p>
              <p className="text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Education</h2>
        <div className="space-y-2">
          {education.map((edu, index) => (
            <div key={index} className="text-slate-700">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-slate-500">{edu.institution} · {edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section id="skills" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm pt-8 border-t border-slate-300">
        <p>© {new Date().getFullYear()} {name}</p>
      </footer>
    </main>
  );
}