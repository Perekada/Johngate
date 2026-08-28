import { companyValues, managementTeam } from '../data/site-data';

export default function ManagementPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Leadership</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">The people behind the product experience.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <section className="space-y-6">
          {managementTeam.map((person) => (
            <div key={person.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{person.name}</h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{person.role}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
                  {person.name.charAt(0)}
                </div>
              </div>
              <p className="mt-4 text-slate-700">{person.summary}</p>
            </div>
          ))}
        </section>

        <aside className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-200">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Our values</p>
          <ul className="mt-6 space-y-4 text-slate-200">
            {companyValues.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
