import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';

export default function Home() {
  const { name, title, location, email, github, linkedin, googleScholar, twitter, instagram, about, education, experience, publications, news, teaching, art, photography } = portfolioData;

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="text-center space-y-3">
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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          {googleScholar && (
            <a href={googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.5 18.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm2.5-6c0 1.38-1.12 2.5-2.5 2.5S9 13.88 9 12.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5z"/></svg>
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          )}
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          )}
        </div>
      </header>

      {/* About Section */}
      <section className="space-y-4">
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">{about.description}</p>
        
        {about.previous && (
          <p className="text-slate-700 leading-relaxed">{about.previous}</p>
        )}
        
        <p className="text-slate-700">
          <strong>Interests:</strong> {about.interests.join(", ")}
        </p>
      </section>

      {/* News Section */}
      {news && news.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Updates</h2>
          <ul className="space-y-2">
            {news.map((item, index) => (
              <li key={index} className="text-slate-700">
                <span className="font-semibold">{item.date}:</span> {item.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Publications / Research */}
      {publications && publications.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Research</h2>
          <ul className="space-y-3">
            {publications.map((pub, index) => (
              <li key={index} className="text-slate-700">
                <span className="font-semibold">{index + 1}. {pub.title}</span>
                <br />
                <span className="text-slate-600">{pub.authors}</span>
                <em className="text-slate-500"> {pub.venue}</em>
                {pub.link && (
                  <>
                    {" "}· <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[pdf]</a>
                  </>
                )}
                {pub.code && (
                  <>
                    {" "}· <a href={pub.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[code]</a>
                  </>
                )}
                {pub.data && (
                  <>
                    {" "}· <a href={pub.data} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[data]</a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Experience</h2>
          <div className="space-y-3">
            {experience.map((exp, index) => (
              <div key={index}>
                <p className="font-semibold text-slate-900">
                  {exp.role}
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                      {exp.company}
                    </a>
                  )}
                  {!exp.link && <span className="ml-1">{exp.company}</span>}
                </p>
                <p className="text-slate-500">{exp.period}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <p className="font-semibold text-slate-900">
                {edu.degree}
                {edu.link && (
                  <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    {edu.institution}
                  </a>
                )}
                {!edu.link && <span className="ml-1">{edu.institution}</span>}
              </p>
              <p className="text-slate-500">{edu.year}</p>
            </div>
          ))}
        </section>
      )}

      {/* Teaching */}
      {teaching && teaching.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Teaching</h2>
          <div className="space-y-3">
            {teaching.map((item, index) => (
              <div key={index}>
                <p className="text-slate-700">
                  <strong>{item.role}</strong>, <em>{item.course}</em> at {item.university}
                  {item.instructor && (
                    <span className="text-slate-500"> taught by <a href={item.link || '#'} className="text-blue-600 hover:underline">{item.instructor}</a></span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Art & Photography Links */}
      {(art || photography) && (
        <section className="space-y-2">
          {art && (
            <p>
              <a href={art} className="text-blue-600 hover:underline">Art</a>
            </p>
          )}
          {photography && (
            <p>
              <a href={photography} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Photography</a>
            </p>
          )}
        </section>
      )}

      {/* Footer */}
      <footer className="text-center text-slate-400 text-sm pt-8">
        <p>© {new Date().getFullYear()} {name}</p>
      </footer>
    </div>
  );
}