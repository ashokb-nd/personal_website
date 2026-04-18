import { portfolioData } from '@/data/portfolio';

export default function Research() {
  const { publications, about } = portfolioData;

  return (
    <div className="space-y-12">
      <header className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">Research</h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          {about.description}
        </p>
        <p className="text-slate-500">
          I am broadly interested in {about.interests.join(", ")}.
        </p>
      </header>

      {publications && publications.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-1">Publications</h2>
          <ul className="space-y-4">
            {publications.map((pub, index) => (
              <li key={index} className="text-slate-700">
                <span className="font-semibold text-lg">{pub.title}</span>
                <br />
                <span className="text-slate-600">{pub.authors}</span>
                <em className="text-slate-500"> {pub.venue}</em>
                <div className="mt-1 space-x-2">
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[pdf]</a>
                  )}
                  {pub.code && (
                    <a href={pub.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[code]</a>
                  )}
                  {pub.data && (
                    <a href={pub.data} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[data]</a>
                  )}
                  {pub.website && (
                    <a href={pub.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[website]</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="text-center text-slate-500">No publications yet.</p>
      )}
    </div>
  );
}