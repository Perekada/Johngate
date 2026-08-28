import { careerOpenings } from '../data/site-data';

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Careers</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Join the Johngate team.</h1>
        <p className="mt-4 text-lg text-slate-700">
          We are building a team that values service, reliability and customer-focused performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {careerOpenings.map((role) => (
          <article key={role.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{role.type}</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">{role.title}</h2>
            <p className="mt-4 text-slate-700">{role.summary}</p>
            <button className="mt-6 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
              Apply now
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
