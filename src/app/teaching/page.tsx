import { portfolioData } from '@/data/portfolio';

export default function Teaching() {
  const { teaching, education } = portfolioData;

  return (
    <div className="space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">Teaching</h1>
      </header>

      {teaching && teaching.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Teaching Experience</h2>
          <div className="space-y-4">
            {teaching.map((item, index) => (
              <div key={index} className="text-slate-700">
                <p className="font-semibold">
                  {item.role}: <em>{item.course}</em>
                </p>
                <p className="text-slate-500">
                  {item.university}
                  {item.instructor && (
                    <> · taught by <a href={item.link || '#'} className="text-blue-600 hover:underline">{item.instructor}</a></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center text-slate-500">No teaching experience yet.</p>
      )}

      {education && education.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Coursework</h2>
          <p className="text-slate-500">Relevant coursework from {education[0]?.institution}:</p>
          <p className="text-slate-600">
            Machine Learning, Data Structures, Algorithms, Database Systems, 
            Computer Networks, Operating Systems, Artificial Intelligence, 
            Natural Language Processing
          </p>
        </section>
      )}
    </div>
  );
}